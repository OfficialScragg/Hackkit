from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('dashboard',views.dashboard, name='dashboard'),
    path('profile',views.profile, name='profile'),
    path('decode',views.decoder, name='decoder'),
    path('wordlists',views.wordlists, name='wordlists'),
    path('cve',views.cve, name='cve'),
    path('convert',views.convert, name='convert'),
]
