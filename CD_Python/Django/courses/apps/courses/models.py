from __future__ import unicode_literals

from django.db import models

class Course(models.Model):
	name = models.CharField(max_length = 255)
	description = models.TextField()
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

class Comment(models.Model):
	comment = models.TextField()
	course_id = models.ForeignKey(Course)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
