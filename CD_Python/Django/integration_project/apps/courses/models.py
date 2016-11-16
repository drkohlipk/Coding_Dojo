from __future__ import unicode_literals


from django.db import models
from ..logreg.models import User

class Course(models.Model):
	name = models.CharField(max_length = 255)
	description = models.TextField()
	students = models.ManyToManyField(User, related_name = 'courses')
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

class Comment(models.Model):
	comment = models.TextField()
	course_id = models.ForeignKey(Course)
	user_id = models.ForeignKey(User, related_name = 'comments')
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
