from __future__ import unicode_literals
from django.db import models
import re, bcrypt

class UserManager(models.Manager):
	def validator(self, postData, typelogin): #validates login/registration informtaion
		NAME_REGEX = re.compile(r'^[a-zA-Z\-\']{2,}$')
		EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
		PWORD_REGEX = re.compile(r'(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;\'?/&gt;.&lt;,])(?!.*\s).*$')
		errors = {
			'reg' : [],
			'login' : [],
		} #empty dictionary to push errors to for registration, password, and login attempts
		result = {} #empty dictionary to store return values

		if typelogin == 'register': #if the user is trying to register...
			try: #attempt to retrieve user information based on the email they entered
				validuser = self.get(email = postData['email'])
			except User.DoesNotExist: #set validuser to none if it isn't able to retrieve anything
				validuser = None

			if validuser: #if able to retrieve a user from the database based on the entered email address...
				errors['reg'].append('This email has already been registered.')
			if '' in (postData['first_name'], postData['last_name'], postData['email'], postData['password'], postData['confirm']): #if any of the fields are left blank...
				errors['reg'].append('Please fill in all fields.')
			if not NAME_REGEX.match(postData['first_name']): #if the first name isn't a valid format
				errors['reg'].append('Please enter a valid first name.')
			if not NAME_REGEX.match(postData['last_name']): #if the last name isn't a valid format
				errors['reg'].append('Please enter a valid last name.')
			if not EMAIL_REGEX.match(postData['email']): #if the email isn't a valid format
				errors['reg'].append('Please enter a valid email address.')
			if not PWORD_REGEX.match(postData['password']): #if the password doesn't meet the minimum requirements
				errors['reg'].append('Password must be at least 8 characters and contain one uppercase letter, one lowercase letter, one number, and one special character.')
			if postData['password'] != postData['confirm']: #if the password and password confirmation don't match
				errors['reg'].append('Password and confirmation password do not match.')

		elif typelogin == 'login': #if the user is trying to login...
			try: #attempt to retrieve the user information based on the entered email address
				loginuser = self.get(email = postData['email'])
			except User.DoesNotExist: #if the entered email address isn't in the system, set loginuser to none
				loginuser = None

			if not loginuser: #if the entered email address isn't in the database...
				errors['login'].append('Please enter a registered email and/or valid password.')
			elif not bcrypt.hashpw(postData['password'].encode(), loginuser.password.encode()) == loginuser.password.encode(): #if the password doesn't match the one for the user in the database...
				errors['login'].append('Please enter a registered email and/or valid password.')

		if not errors['reg'] and not errors['login']: #if there are no errors...
			if typelogin == 'register': #and the user is registering
				user = self.creator(postData) #create the user using the creator method below and store the user information returned as user
			elif typelogin == 'login': #if the user is logging in
				user = self.get(email = postData['email']) #retrieve that user's information and store is as user
			result['loggedin'] = True #set the user's logged in status to true and store it in the result dictionary
			result['user'] = user #store the user information in the result dictionary

		else: #however, if there ARE errors...
			result['loggedin'] = False #set the user's logged in status to false and store it in the result dictionary
			result['errors'] = errors #store the errors in the result dictionary

		return result #return the result dictionary

	def creator(self, data): #creates the user in the database based on the appropriately entered registration information
		new_user = self.create(first_name = data['first_name'], last_name = data['last_name'], email = data['email'], password = bcrypt.hashpw(data['password'].encode(), bcrypt.gensalt()))
		return new_user #return the newly created user's information

class SecretManager(models.Manager):
	def creator(self, secretData, user_id): #creates a secret based on the secret entered in the text area and attaches the appropriate user to it
		user = User.objects.get(id = user_id) #gets the user's information based on the passed user_id (we need the entire user object for that user to attach it to the secret!)
		self.create(secret = secretData['secret'], person = user)
		return self

	def deleter(self, secret_id): #deletes the appropriate message
		self.get(id = secret_id).delete()
		return self

	def liker(self, secret_id, user_id): #enters a like one a message based on the id of the secret and the id of the user
		secret = self.get(id = secret_id) #same as Secret.creator...you need the entire secret object for that particular secret to attach it appropriately
		user = User.objects.get(id = user_id) #^^^^^
		Like.objects.create(secret_id = secret, user_id = user)
		return self

class User(models.Model):
	first_name = models.CharField(max_length = 55)
	last_name = models.CharField(max_length = 100)
	email = models.EmailField(max_length = 254)
	password = models.CharField(max_length = 255)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = UserManager()

class Secret(models.Model):
	secret = models.TextField(max_length = 1000)
	person = models.ForeignKey(User, related_name = "secrets")
	likers = models.ManyToManyField( #creates a custom through table for the many-to-many relationship between the user and the secret
        User,
        through='Like',
        through_fields=('secret_id', 'user_id'),
    )
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = SecretManager()

class Like(models.Model): #this is the custom through table
	secret_id = models.ForeignKey(Secret, on_delete = models.CASCADE)
	user_id = models.ForeignKey(User, on_delete = models.CASCADE)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
