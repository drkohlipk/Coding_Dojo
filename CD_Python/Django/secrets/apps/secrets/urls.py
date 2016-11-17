from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^success/(?P<page>(secrets)|(popular))$', views.success, name='success'), #allows the appropriate page (secrets or popular) to be accessed
	url(r'^validate/(?P<typelogin>(login)|(register))$', views.validate, name='validate'), #allows the passing of login or register based on what the user is trying to do
	url(r'^postsecret$', views.postsecret, name='postsecret'),
	url(r'^like/(?P<page>(secrets)|(popular))/(?P<id>\d+)$', views.like, name='like'), #allows the appropriate page (secrets or popular) to be accessed
	url(r'^delete/(?P<page>(secrets)|(popular))/(?P<id>\d+)$', views.delete, name='delete'), #allows the appropriate page (secrets or popular) to be accessed
	url(r'^logout$', views.logout, name='logout'),
]
