from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^home$', views.home, name = 'home'),
    url(r'^addbook$', views.addbook, name = 'addbook'),
    url(r'^book/(?P<id>\d+)$', views.showbook, name = 'showbook'),
    url(r'^user/(?P<id>\d+)$', views.showuser, name = 'showuser'),
    url(r'^dispatch/(?P<page>(home)|(showbook))$', views.dispatch, name = 'dispatch'),
    url(r'^validate/(?P<typelogin>(register)|(login))$', views.validate, name = 'validate'),
    url(r'^delete/(?P<id>\d+)/(?P<page>(home)|(showbook))$', views.delete, name = 'delete'),
    url(r'^processadd/(?P<typeadd>(book)|(review))/(?P<page>(home)|(showbook))/(?P<id>\d*)$', views.processadd, name = 'processadd'),
    url(r'^logout$', views.logout, name = 'logout'),
]
