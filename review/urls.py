from django.urls import path

from review.views import *

app_name = 'review'

urlpatterns = [
    # path('review/', ),
    path('', ReviewIndexView.as_view(), name='index'),
    # path('<slug:app_id>', AppDetailView.as_view(), name='profile'),

    # path('create/', ReviewCreationView.as_view(), name='create'),

]
