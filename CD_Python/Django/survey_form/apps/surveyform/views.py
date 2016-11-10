from django.shortcuts import render, redirect

def index(request):
    return render(request, 'surveyform/index.html')

def process(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['name']
    try:
        request.session['counter'] += 1
    except KeyError:
        request.session['counter'] = 1
    return redirect('/result')

def result(request):
    return render(request, 'surveyform/result.html')
