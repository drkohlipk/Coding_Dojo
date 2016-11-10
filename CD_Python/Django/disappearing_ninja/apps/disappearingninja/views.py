from django.shortcuts import render, redirect

def index(request):
    return render(request, 'disappearingninja/index.html')

def ninjas(request):
    try:
        context = {
            'label' : request.session['label'],
            'img' : request.session['img']
        }
    except KeyError:
        request.session['label'] = 'placeholder'
        request.session['img'] = 'placeholder'
        context = {
            'label' : request.session['label'],
            'img' : request.session['img']
        }
    return render(request, 'disappearingninja/ninjas.html', context)

def processninjas(request, id):
    return redirect('/ninjas')
