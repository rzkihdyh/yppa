from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name='index'),
    path('laporkan/', views.laporkan, name='laporkan'),
    path('berbagi-cerita/', views.berbagi_cerita, name='berbagi_cerita'),
    path('diskusi/', views.diskusi, name='diskusi'),
    path('bijak-finansial/', views.bijak_finansial, name='bijak_finansial'),
    path('main-sambil-paham/', views.main_sambil_paham, name='main_sambil_paham'),
    path('berita/', views.berita, name='berita'),
]