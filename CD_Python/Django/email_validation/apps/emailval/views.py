from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Email

def index(request):
	return render(request, 'emailval/index.html')

def addaddy(request):
	result = Email.objects.validator(request.POST)

	if result["added"]:
		messages.success(request, 'The email address you entered ({}) is a VALID email address!  Thank you!'.format(result['new_addy'].email))
	else:
		for error in result['errors']:
			messages.error(request, error)
			return redirect('/')
	return emails(request)

def emails(request):
	emails = Email.objects.all()
	context = {
		'emails' : emails
	}
	return render(request, 'emailval/emails.html', context)

def delete(request, id):
	Email.objects.filter(id = id).delete()
	return emails(request)
