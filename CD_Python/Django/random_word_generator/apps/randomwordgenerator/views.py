from django.shortcuts import render, redirect
import string, random

def index(request):
	try:
		request.session['counter'] += 1
	except KeyError:
		request.session['counter'] = 1

	context = {
		'rando' : ''.join(random.choice(string.ascii_uppercase + string.digits) for num in range(14))
	}
	return render(request, 'randomwordgenerator/index.html', context)

def reset(request):
	del request.session['counter']
	return redirect('/')
