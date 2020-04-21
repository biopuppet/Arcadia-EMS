from django.urls import path

from user.views import UserCreateView, UserProfileView, UserListView, UserChangePasswordView, UserCalendarView

app_name = 'user'

urlpatterns = [
    # path('user/', ),
    path('', UserListView.as_view(), name='index'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('create/', UserCreateView.as_view(), name='create'),
    path('change-password/', UserChangePasswordView.as_view(), name='change-password'),
    path('calendar/', UserCalendarView.as_view(), name='calendar'),
]
