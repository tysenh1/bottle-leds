from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('color/blue', views.solid_blue, name='blue strip'),
    path("color/red", views.solid_red, name="red strip"),
    path('color/green', views.solid_green, name='green strip'),
    path('color/rainbow', views.rainbow, name='rainbow'),
    path('color/reset', views.reset_strip, name='reset'),
]