from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^addaddy$', views.addaddy),
    url(r'^delete/(?P<id>\d+)$', views.delete)
]
