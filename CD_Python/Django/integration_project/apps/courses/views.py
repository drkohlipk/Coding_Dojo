from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.db.models import Count
from .models import Course, Comment
from ..logreg.models import User

def index(request):
	if not request.session['loggedin']: #if the user is not logged in...
		return redirect(reverse('logreg:index'))
	context = {
		'courses' : Course.objects.all()
	}
	return render(request, 'courses/index.html', context)

def adduser(request):
	if not request.session['loggedin']: #if the user is not logged in...
		return redirect(reverse('logreg:index'))
	context = {
		'courses' : Course.objects.annotate(Count('students')),
		'students' : User.objects.all()
	}
	return render(request, 'courses/adduser.html', context)

def processuser(request):
	if not request.session['loggedin']: #if the user is not logged in...
		return redirect(reverse('logreg:index'))
	student = User.objects.get(id = request.POST['students'])
	course = Course.objects.get(id = request.POST['courses'])
	course.students.add(student)
	return redirect(reverse('courses:adduser'))

def processAdd(request):
	if not request.session['loggedin']: #if the user is not logged in...
		return redirect(reverse('logreg:index'))
	Course.objects.create(name = request.POST['name'], description = request.POST['description'])
	return redirect(reverse('courses:index'))

def removecheck(request, id):
	if not request.session['loggedin']: #if the user is not logged in...
		return redirect(reverse('logreg:index'))
	context = {
		'course' : Course.objects.get(id = id)
	}
	return render(request, 'courses/remove.html', context)

def remove(request, id):
	if not request.session['loggedin']: #if the user is not logged in...
		return redirect(reverse('logreg:index'))
	Course.objects.get(id = id).delete()
	return redirect(reverse('courses:index'))

def comment(request, id):
	if not request.session['loggedin']: #if the user is not logged in...
		return redirect(reverse('logreg:index'))
	context = {
		'course' : Course.objects.get(id = id)
	}
	return render(request, 'courses/comment.html', context)

def addcomment(request, id):
	if not request.session['loggedin']: #if the user is not logged in...
		return redirect(reverse('logreg:index'))
	course = Course.objects.get(id = id)
	Comment.objects.create(comment = request.POST['comment'], course_id = course, user_id = request.session['user'])
	return redirect(reverse('courses:comment', kwargs={'id':id}))
