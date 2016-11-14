from __future__ import unicode_literals
from django.db import models
import re

class EmailManager(models.Manager):
	def validator(self, postData):
		EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
		errors = []
		response = {}

		if not postData['email']:
			errors.append('You suck, enter an email!')
		elif not EMAIL_REGEX.match(postData['email']):
			errors.append("Are you kidding me?  That's not a valid email address!")
		elif self.filter(email = postData['email']):
			errors.append('This email has already been entered')
		else:
			new_email = self.createEmail(postData)

		if not errors:
			response['added'] = True
			response['new_addy'] = new_email
		else:
			response['added'] = False
			response['errors'] = errors

		return response

	def createEmail(self, data):
		new_email = self.create(email = data['email'])
		return new_email


class Email(models.Model):
	email = models.CharField(max_length = 255)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = EmailManager()
