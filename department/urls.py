from django.urls import path

from .views import *

app_name = 'department'

urlpatterns = [
    path('', DepartmentsView.as_view(), name='index'),
    path('create/', DepartmentCreationView.as_view(), name='create'),
    path('delete/<int:department_id>', DepartmentDeleteView.as_view(), name='delete'),
    path('change/<int:department_id>', DepartmentChangeView.as_view(), name='change'),

]
