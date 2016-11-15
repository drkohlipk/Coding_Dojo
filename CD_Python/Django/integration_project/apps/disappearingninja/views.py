from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse

def index(request):
    return render(request, 'disappearingninja/index.html') #standard page with no ninjas

def result(request): #result page after ninja is processed
    try: #if request.session is defined...set context
        context = {
            'label' : request.session['label'],
            'img' : request.session['img']
        }
    except KeyError: #otherwise...define it and set context
        request.session['label'] = 'TMNT'
        request.session['img'] = 'disappearingninja/images/tmnt.jpg'
        context = {
            'label' : request.session['label'],
            'img' : request.session['img']
        }
    return render(request, 'disappearingninja/ninjas.html', context) #ninjas page

def processninjas(request, color): #processing of the ninjas
    if not color: #if color was left blank...
        try: #try to delete session (assuming it was previously defined)...and redirect to result
            del request.session['label']
            del request.session['img']
            return redirect(reverse('disappearing_ninja:result'))
        except KeyError: #if session was not previously defined...redirect to result
            return redirect(reverse('disappearing_ninja:result'))
    else: #if color was not left blank...
        colors = { #define the colors object
            'red' : {
                'label' : 'Raphael',
                'img' : 'disappearingninja/images/raphael.jpeg'
            },
            'blue' : {
                'label' : 'Leonardo',
                'img' : 'disappearingninja/images/leonard.jpg'
            },
            'purple' : {
                'label' : 'Donatello',
                'img' : 'disappearingninja/images/donatello.jpg'
            },
            'orange' : {
                'label' : 'Michaelangelo',
                'img' : 'disappearingninja/images/michaelangelo.jpg'
            },
            'april' : {
                'label' : 'April',
                'img' : 'disappearingninja/images/Megan-Fox.jpg'
            },
        }

        if color not in ('red','blue','purple','orange'): #if color is not a color we defined in the colors object...render april
            request.session['label'] = colors['april']['label']
            request.session['img'] = colors['april']['img']
        else: #if color is a color we defined in the colors object...render the appropriate ninja
            request.session['label'] = colors[color]['label']
            request.session['img'] = colors[color]['img']

    return redirect(reverse('disappearing_ninja:result'))
