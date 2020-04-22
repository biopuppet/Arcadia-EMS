from django.urls import path

from user.views import *

app_name = 'user'

urlpatterns = [
    # path('user/', ),
    path('', UserListView.as_view(), name='index'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('create-user/', UserCreateView.as_view(), name='create-user'),
    path('delete-user/<int:user_id>', UserDeleteView.as_view(), name='delete-user'),
    path('update-user/', UpdateUserView.as_view(), name='update-user'),

    path('change-password/', UserChangePasswordView.as_view(), name='change-password'),
    path('calendar/', UserCalendarView.as_view(), name='calendar'),
    path('groups/', UserGroupsView.as_view(), name='groups'),
    path('create-group/', UserCreateGroupView.as_view(), name='create-group')
]
