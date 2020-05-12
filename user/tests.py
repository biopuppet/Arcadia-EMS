from django.test import TestCase
from django.urls import reverse, resolve

from user.views import *


class HomeTests(TestCase):

    def test_home_view_status_code(self):
        url = reverse('user:index')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_home_url_resolves_home_view(self):
        view = resolve('/user/')
        self.assertEquals(view.func, UserIndexView)


class UserCreationTests(TestCase):

    def test_user_creation_view_status_code(self):
        url = reverse('user:create-user')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_user_creation_url_resolves_home_view(self):
        view = resolve('/user/create-user/')
        self.assertEquals(view.func, UserCreateView)


class UserUpdateTests(TestCase):

    def test_user_update_view_status_code(self):
        url = reverse('user:update-user')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_user_update_url_resolves_view(self):
        view = resolve('/user/update-user/')
        self.assertEquals(view.func, UpdateUserView)


class UserDeleteTests(TestCase):

    def test_user_delete_view_status_code(self):
        url = reverse('user:delete-user')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_user_delete_url_resolves_view(self):
        view = resolve('/user/delete-user/')
        self.assertEquals(view.func, DeleteUserView)


class GroupTests(TestCase):

    def test_group_view_status_code(self):
        url = reverse('user:groups')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_group_url_resolves_home_view(self):
        view = resolve('/user/groups')
        self.assertEquals(view.func, UserGroupsView)


class GroupCreationTests(TestCase):

    def test_group_creation_view_status_code(self):
        url = reverse('user:create-user')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_group_creation_url_resolves_home_view(self):
        view = resolve('/user/create-user/')
        self.assertEquals(view.func, UserCreateGroupView)


class GroupChangeTests(TestCase):

    def test_group_update_view_status_code(self):
        url = reverse('user:change-group')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_group_update_url_resolves_view(self):
        view = resolve('/user/change-group/')
        self.assertEquals(view.func, UserChangeGroupView)


class GroupDeleteTests(TestCase):

    def test_group_delete_view_status_code(self):
        url = reverse('user:delete-group')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_group_delete_url_resolves_view(self):
        view = resolve('/user/delete-group/')
        self.assertEquals(view.func, UserDeleteGroupView)
