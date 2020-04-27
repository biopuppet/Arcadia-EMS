from django.urls import path

from .views import *

app_name = 'department'

urlpatterns = [
    path('', DepartmentsView.as_view(), name='index'),
]