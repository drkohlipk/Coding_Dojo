from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^processAdd$', views.processAdd, name='processAdd'),
    url(r'^comment/(?P<id>\d+)$', views.comment, name='comment'),
    url(r'^addcomment/(?P<id>\d+)$', views.addcomment, name='addcomment'),
    url(r'^removecheck/(?P<id>\d+)$', views.removecheck, name='removecheck'),
    url(r'^remove/(?P<id>\d+)$', views.remove, name='remove')
]
