import re, datetime
from datetime import timedelta
from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "ShhhHHHhhh, it's a secret!"

mysql = MySQLConnector(app, "the_wall")
bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') #must look like an e-mail...
NAME_REGEX = re.compile(r'(?=^.{2,}$)[a-zA-Z\'-]+$') #must be at least 2 characters and needs to be letters or ' or -
PWORD_REGEX = re.compile(r'(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;\'?/&gt;.&lt;,])(?!.*\s).*$') #must be at least 8 characters and include one uppercase, one lowercase, a number, and a special character

@app.route('/')
def index():
	return render_template("splash.html")

@app.route('/register', methods=['POST'])
def register(): #when a user registers...
	errors = [] #create an empty list to store error messages

	query = "SELECT * FROM users WHERE email = :email;" #retrieve user information based on the user's e-mail addy
	data = {'email' : request.form['email']} #retrieve the entered email address

	user = mysql.query_db(query, data) #store retrieved info as user

	if not NAME_REGEX.match(request.form['first_name']): #if an invalid first name is entered...
		errors.append('Please enter a valid name') #append this error message to errors
	elif not NAME_REGEX.match(request.form['last_name']): #if an invalid last name is entered...
		errors.append('Please enter a valid name') #append this error message to errors

	if not request.form['email']: #if the email field is left blank...
		errors.append('Please enter an E-mail address') #append this error message to errors
	elif not EMAIL_REGEX.match(request.form['email']): #if the email doesn't look like an email...
		errors.append('Not a valid E-mail') #append this error message to errors
	elif user: #if the user already has an account...
		errors.append('E-mail address already in use') #append this error message to errors

	if not request.form['password']: #if the password field is left blank...
		errors.append('Please enter a password') #append this error message to errors
	elif not PWORD_REGEX.match(request.form['password']): #if the password doesn't meet the min requirements...
		errors.append('Password must be at least 8 characters and include one lowercase letter, one uppercase letter, and a special character') #append this error message to errors
	elif request.form['password'] != request.form['confirm']: #if the password and confirm fields don't match...
		errors.append('Password and confirm password must match') #append this error message to errors

	if errors: #if there are any errors in errors...
		for error in errors: #for every message...
			flash(error) #flash that message!
	else: #otherwise!
		query = 'INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :pw_hash, NOW(), NOW());' #insert the entered info into the database
		data = { #using this database
			'first_name' : request.form['first_name'],
			'last_name' : request.form['last_name'],
			'email' : request.form['email'],
			'pw_hash' : bcrypt.generate_password_hash(request.form['password']) #encrypt the password before storing it!
		}

		session['user_id'] = mysql.query_db(query, data) #submit the insert request and retrieve a user id and store it in session

		return redirect('/wall') #redirect to the wall to log in based on the registration info

	return redirect('/') #if there is an error during registration, return to the splash page

@app.route('/login', methods=['POST'])
def login(): #when a user logs in...
	query = 'SELECT * FROM users WHERE email = :email;' #retrieve that user's info based upon their email addy
	data = {'email' : request.form['email']} #store the email entered in the input field in the data dictionary

	user = mysql.query_db(query, data) #retrieve the user's information based on their email and store it as user

	if not user: #if unable to retrieve information based on the entered email...
		flash('User name or password not valid') #flash this error message
		return redirect('/') #and return to the splash page

	user = user[0] #redefine user as the dictionary inside the returned list (returned info is [{.....}])

	if bcrypt.check_password_hash(user['password'], request.form['password']): #if the password entered matches the one listed in the database...
		session['user_id'] = user['id'] #store the user id in session
		return redirect('/wall') #and redirect to the wall
	else: #if the password isn't correct...
		flash('User name or password not valid') #flash this error message
		return redirect('/') #and return to the splash page

@app.route('/wall')
def wall(): #if the user is able to log in...
	if 'user_id' not in session: #if the user id isn't being stored in session (ie, correct info has not been entered)...
		return redirect('/') #return to the splash page

	query1 = "SELECT * FROM users WHERE users.id = :id;" #retrive the user's information based on their user id
	data1 = {'id' : session['user_id']} #id is defined as the stored user id
	user = mysql.query_db(query1, data1)[0] #retrieve the user info and store it as user

	query2 = "SELECT concat(users.first_name, ' ', users.last_name) AS user_name, messages.message, messages.created_at, messages.id, messages.user_id FROM users JOIN messages ON users.id = messages.user_id GROUP BY messages.message ORDER BY messages.created_at DESC;" #request the messages and have them return with the newest first
	messages = mysql.query_db(query2) #store the retrieved messages in messages

	query3 = "SELECT concat(users.first_name, ' ', users.last_name) AS user_name, comments.comment, comments.created_at, comments.message_id FROM comments LEFT JOIN users ON comments.user_id = users.id LEFT JOIN messages ON comments.message_id = messages.id;" #retrieve the stored comments
	comments = mysql.query_db(query3) #store the comments as comments

	return render_template('index.html', user = user, messages = messages, comments = comments) #render template of the index.html(the wall) and send these variables

@app.route('/message', methods=['POST'])
def message(): #if a user posts a message...
	query = 'INSERT INTO messages (message, user_id, created_at, updated_at) VALUES (:message, :user_id, NOW(), NOW());' #insert that message into the database
	data = {
		'message' : request.form['message'], #the message entered into the input field will be stored as message
		'user_id' : session['user_id'] #the user id will be set to the session user id
	}
	mysql.query_db(query, data) #submit query and store the retrieved info as user
	return redirect('/wall') #redirect the user to the wall

@app.route('/comment', methods=['POST'])
def comment(): #if a user posts a comment
	query = 'INSERT INTO comments (comment, message_id, user_id, created_at, updated_at) VALUES (:comment, :message_id, :user_id, NOW(), NOW());' #insert that comment into the database
	data = {
		'comment' : request.form['comment'], #store the comment entered as comment
		'user_id' : session['user_id'], #store the session user id as user id
		'message_id' : request.form['message_id'] #store the message id for the message commented on as message_id (this comes from the hidden input on index.html)
	}
	mysql.query_db(query, data) #submit query and store the retrieved info as user
	return redirect('/wall') #redirect the user to the wall

@app.route('/delete/<id>')
def delete(id): #function to delete a message
	query1 = "SELECT messages.created_at, messages.id, messages.user_id FROM messages WHERE messages.id = :message_id;" #query to pull required message info
	data = {
		'message_id' : id #based on the selected message id
	}
	messageQuery = mysql.query_db(query1, data)[0] #set the returned info to messageQuery

	created_at = messageQuery['created_at'] #set created_at variable to be the time/date the message was created
	now = datetime.datetime.now() #create a new variable with the current time
	diff = now - created_at #create variable 'diff' and set equal to the difference between the time now and the message created_at time/date

	if diff < datetime.timedelta(minutes = 30) and messageQuery['user_id'] == session['user_id']: #if it's been less than 30 mins since the message was created and the user_id for the message matches the user_id for the logged in user...
		query2 = 'DELETE FROM comments WHERE comments.message_id = :message_id; DELETE FROM messages WHERE messages.id = :message_id;' #delete the comments and then appropriate message from the database
		mysql.query_db(query2, data) #run the query (data was set above with query1)
		
	return redirect('/wall')

@app.route('/logoff')
def logoff(): #if the user hits the logoff button...
	session.clear() #clear the session (removes user id)
	return redirect('/') #redirect the user back to the splash page

app.run(debug=True)
