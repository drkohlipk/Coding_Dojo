from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.db.models import Count
from django.contrib import messages
from datetime import datetime
from .models import User, Book, Author, Review

###################start render routes###################

def index(request): #renders login/registration page
	return render(request, 'beltreview/index.html')

def home(request):
	if not request.session['loggedin']:
		return redirect(reverse('beltreview:index'))

	context = {
		'first_name' : request.session['user'].first_name,
		'reviews' : Review.objects.order_by('-created_at')[:3],
		'books' : Book.objects.all(),
	}
	return render(request, 'beltreview/home.html', context)

def addbook(request):
	if not request.session['loggedin']:
		return redirect(reverse('beltreview:index'))
	context = {
		'authors' : Author.objects.all(),
	}
	return render(request, 'beltreview/addbook.html', context)

def showbook(request, id):
	if not request.session['loggedin']:
		return redirect(reverse('beltreview:index'))
	context = {
		'book' : Book.objects.get(id = id),
		'reviews' : Review.objects.get(book__id = id),
	}
	return render(request, 'beltreview/book.html', context)

def showuser(request, id):
	if not request.session['loggedin']:
		return redirect(reverse('beltreview:index'))
	context = {
		'user' : User.objects.get(id = id),
		'reviews' : Review.objects.filter(user__id = id).annotate(Count('review')),
		'books' : Book.objects.filter(review__user__id = id),
	}
	return render(request, 'beltreview/user.html', context)

#####################end render routes###################


##################start redirect routes##################

def dispatch(request, page): #redirects to home or showbook appropriately
	if page == 'home':
		return redirect(reverse('beltreview:home'))
	elif page == 'showbook':
		return redirect(reverse('beltreview:showbook'))

def validate(request, typelogin): #validates user info and stores info appropriately
	result = User.objects.validator(request.POST, typelogin)
	request.session['loggedin'] = result['loggedin']

	if request.session['loggedin']:
		request.session['user'] = result['user']
	else:
		for regerror in result['errors']['reg']: #create the appropriate errors for the registration/login page...reg(error) is for registration side
			messages.error(request, regerror)
		for logerror in result['errors']['login']: #login(warning) is for the login side
			messages.warning(request, logerror)

	return redirect(reverse('beltreview:home'))

def delete(request, id, page):
	Review.objects.delete_review(id)
	return redirect(reverse('beltreview:dispatch', kwargs = {'page' : page}))

def processadd(request, typeadd, page, id = False):
	if typeadd == 'book':
		Book.objects.book_val(request.POST, request.session['user'])
	if typeadd == 'review':
		Review.objects.create_review(request.POST, request.session['user'], id)

	return redirect(reverse('beltreview:dispatch', kwargs = {'page' : page}))

def logout(request): #logs user out
    request.session['loggedin'] = False #set the loggedin status to false...
    del request.session['user'] #delete the session user information
    return redirect(reverse('beltreview:index')) #redirect user to the login/registration route

###################end redirect routes###################
