from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from .models import Course, Comment

# Create your views here.

def index(request):
	context = {
		'courses' : Course.objects.all()
	}
	return render(request, 'courses/index.html', context)

def processAdd(request):
	Course.objects.create(name = request.POST['name'], description = request.POST['description'])
	return redirect(reverse('courses:index'))

def removecheck(request, id):
	context = {
		'course' : Course.objects.get(id = id)
	}
	return render(request, 'courses/remove.html', context)

def remove(request, id):
	Course.objects.get(id = id).delete()
	return redirect(reverse('courses:index'))

def comment(request, id):
	context = {
		'course' : Course.objects.get(id = id)
	}
	return render(request, 'courses/comment.html', context)

def addcomment(request, id):
	course = Course.objects.get(id = id)
	Comment.objects.create(comment = request.POST['comment'], course_id = course)
	return redirect(reverse('courses:comment', kwargs={'id':id}))
