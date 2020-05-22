from django.test import TestCase
from django.urls import reverse, resolve

from user.views import *


class UserIndexTests(TestCase):

    def test_user_index_view_status_code(self):
        url = reverse('user:index')
        response = self.client.get(url)
        self.assertRedirects(response, '/login/?next=' + url)

    def test_user_index_url_resolves_view(self):
        view = resolve('/user/')
        self.assertEquals(view.func.__name__, UserIndexView.as_view().__name__)


class UserCreationTests(TestCase):

    def test_user_creation_view_status_code(self):
        url = reverse('user:create-user')
        response = self.client.get(url)
        self.assertRedirects(response, '/login/?next=' + url)

    def test_user_creation_url_resolves_home_view(self):
        view = resolve('/user/create-user/')
        self.assertEquals(view.func.__name__, UserCreateView.as_view().__name__)


class UserUpdateTests(TestCase):

    def test_user_update_view_status_code(self):
        url = reverse('user:update-user')
        response = self.client.get(url)
        self.assertRedirects(response, '/login/?next=' + url)

    def test_user_update_url_resolves_view(self):
        view = resolve('/user/update-user/')
        self.assertEquals(view.func.__name__, UpdateUserView.as_view().__name__)


class UserDeleteTests(TestCase):

    def test_user_delete_view_status_code(self):
        url = reverse('user:delete-user', args=[1, ])
        response = self.client.get(url)
        self.assertRedirects(response, '/login/?next=' + url)

    def test_user_delete_url_resolves_view(self):
        view = resolve('/user/delete-user/1')
        self.assertEquals(view.func.__name__, DeleteUserView.as_view().__name__)


class GroupTests(TestCase):

    def test_group_view_status_code(self):
        url = reverse('user:groups')
        response = self.client.get(url)
        self.assertRedirects(response, '/login/?next=' + url)

    def test_group_url_resolves_home_view(self):
        view = resolve('/user/group/')
        self.assertEquals(view.func.__name__, UserGroupsView.as_view().__name__)


class GroupCreationTests(TestCase):

    def test_group_creation_view_status_code(self):
        url = reverse('user:create-group')
        response = self.client.get(url)
        self.assertRedirects(response, '/login/?next=' + url)

    def test_group_creation_url_resolves_home_view(self):
        view = resolve('/user/group/create')
        self.assertEquals(view.func.__name__, UserCreateGroupView.as_view().__name__)


class GroupChangeTests(TestCase):

    def test_group_update_view_status_code(self):
        url = reverse('user:change-group', args=[1, ])
        response = self.client.get(url)
        self.assertRedirects(response, '/login/?next=' + url)

    def test_group_update_url_resolves_view(self):
        view = resolve('/user/group/1/change')
        self.assertEquals(view.func.__name__, UserChangeGroupView.as_view().__name__)


class GroupDeleteTests(TestCase):

    def test_group_delete_view_status_code(self):
        url = reverse('user:delete-group', args=[1, ])
        response = self.client.get(url)
        self.assertRedirects(response, '/login/?next=' + url)

    def test_group_delete_url_resolves_view(self):
        view = resolve('/user/group/1/delete')
        self.assertEquals(view.func.__name__, UserDeleteGroupView.as_view().__name__)
