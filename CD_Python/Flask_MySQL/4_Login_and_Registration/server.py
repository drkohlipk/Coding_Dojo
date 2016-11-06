import re

from flask import Flask, render_template, request, redirect, session, flash
from flask_bcrypt import Bcrypt
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "secret_key"

mysql = MySQLConnector(app, "login_demo")
bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'(?=^.{2,}$)[a-zA-Z\'-]+$')
PWORD_REGEX = re.compile(r'(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;\'?/&gt;.&lt;,])(?!.*\s).*$')

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/register', methods=['POST'])
def register():
	errors = []

	query = "SELECT * FROM users WHERE email = :email;"
	data = {'email' : request.form['email']}

	user = mysql.query_db(query, data)

	if not NAME_REGEX.match(request.form['first_name']):
		errors.append('Please enter a valid name')
	elif not NAME_REGEX.match(request.form['last_name']):
		errors.append('Please enter a valid name')

	if not request.form['email']:
		errors.append('Please enter an E-mail address')
	# elif re.match(EMAIL_REGEX, request.form['email']) don't need re.compile
	elif not EMAIL_REGEX.match(request.form['email']): #need re.compile
		errors.append('Not a valid E-mail')
	elif user:
		errors.append('E-mail address already in use')

	if not request.form['password']:
		errors.append('Please enter a password')
	elif not PWORD_REGEX.match(request.form['password']):
		errors.append('Password must be at least 8 characters and include one lowercase letter, one uppercase letter, and a special character')
	elif request.form['password'] != request.form['confirm']:
		errors.append('Password and confirm password must match')

	if errors:
		for error in errors:
			flash(error)
	else:
		query = 'INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :pw_hash, NOW(), NOW());'
		data = {
			'first_name' : request.form['first_name'],
			'last_name' : request.form['last_name'],
			'email' : request.form['email'],
			'pw_hash' : bcrypt.generate_password_hash(request.form['password'])
		}

		session['user_id'] = mysql.query_db(query, data)

		return redirect('/success')

	return redirect('/')

@app.route('/login', methods=['POST'])
def login():
	query = 'SELECT * FROM users WHERE email = :email;'
	data = {'email' : request.form['email']}

	user = mysql.query_db(query, data)

	if not user:
		flash('User name or password not valid')
		return redirect('/')

	user = user[0]

	if bcrypt.check_password_hash(user['password'], request.form['password']):
		session['user_id'] = user['id']
		# session['logged_in'] = True
		return redirect('/success')
	else:
		flash('User name or password not valid')
		return redirect('/')

@app.route('/success')
def success():
	if 'user_id' not in session:
		return redirect('/')
	query = 'SELECT * FROM users WHERE id = :id;'
	data = {'id' : session['user_id']}
	user = mysql.query_db(query, data)[0]
	return render_template('success.html', user = user)

@app.route('/logoff')
def logoff():
	session.clear()
	# session.pop('user_id')
	# del session['user_id']
	return redirect('/')

app.run(debug=True)
