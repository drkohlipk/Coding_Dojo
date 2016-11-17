from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.db.models import Count
from django.contrib import messages
from datetime import datetime
from .models import User, Secret, Like

##################begin render routes#############

def index(request): #renders register/log in page
    return render(request, 'secrets/index.html')

def success(request, page): #renders secrets or popular page after a successful logon and fills context appropriately
    if not request.session['loggedin']: #if user attempts to bypass login...
        return redirect(reverse('secrets:index')) #return them to index

    if page == 'secrets': #if the user is trying to get to the secrets page...
        context = { #fill context appropriately!
            'first_name' : request.session['user'].first_name,
            'user_id' : request.session['user'].id,
            'secrets' : Secret.objects.order_by('-created_at').annotate(Count('likers'))[:5], #request the 5 newest secrets ordered from newest to oldest and attach a count flag to the amount of likes it has
        }
        return render(request, 'secrets/secrets.html', context)

    elif page == 'popular': #if the user is trying to get to the popular page...
        context = { #fill context appropriately!
            'first_name' : request.session['user'].first_name,
            'user_id' : request.session['user'].id,
            'secrets' : Secret.objects.annotate(Count('likers')).order_by('-likers__count', '-created_at'), #request all secrets and order them from most likes to the least and then from newest to oldest
        }
        return render(request, 'secrets/popular.html', context)

###################end render routes##############

##################begin redirect routes#############

def validate(request, typelogin): #route to validate logon/registration
    result = User.objects.validator(request.POST, typelogin) #run the entered information through the validator method in the UserManager class in models
    request.session['loggedin'] = result['loggedin'] #store whether or not the user was able to log on based on their entered information (this returns a boolean)

    if request.session['loggedin']: #if they were successfully able to log on...
        request.session['user'] = result['user'] #store their user information in session

    else: #if they weren't able to successfully log in...
        for regerror in result['errors']['reg']: #create the appropriate errors for the registration/login page...reg(error) is for registration side
            messages.error(request, regerror)
        for pworderror in result['errors']['pword']: #pword(info) is specifically for the registration password
            messages.info(request, pworderror)
        for logerror in result['errors']['login']: #login(warning) is for the login side
            messages.warning(request, logerror)

    return redirect(reverse('secrets:success', kwargs = {'page' : 'secrets'})) #redirect the user to the success route attempting to access the secrets page and let it decide whether or not to allow the users in

def postsecret(request): #route to post a secret
    Secret.objects.creator(request.POST, request.session['user'].id) #run the entered information through the secret creator method in the SecretManager class in models
    return redirect(reverse('secrets:success', kwargs = {'page' : 'secrets'})) #redirect the user to the success route/secrets page

def like(request, page, id): #route to like a secret
    Secret.objects.liker(id, request.session['user'].id) #run the user id and secret id through the liker method in the SecretManager class in models
    return redirect(reverse('secrets:success', kwargs={'page' : page})) #redirect the user to the success route/appropriate page (secrets or popular appropriately)

def delete(request, page, id): #route to delete a secret
    Secret.objects.deleter(id) #run the secret id through the deleter method in the SecretManager class in models
    return redirect(reverse('secrets:success', kwargs={'page' : page})) #redirect the user to the success route/appropriate page (secrets or popular appropriately)

def logout(request): #logs user out
    request.session['loggedin'] = False #set the loggedin status to false...
    del request.session['user'] #delete the session user information
    return redirect(reverse('secrets:index')) #redirect user to the login/registration route

###################end redirect routes##############
