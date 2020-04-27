import json
import re

from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group
from django.core import serializers
from django.core.exceptions import ObjectDoesNotExist
from django.forms import model_to_dict
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from ArcadiaEMS.views import page_not_found
from user.email import send_email
from user.forms import LoginForm, UserCreateForm, UserChangePasswordForm, UserUpdateForm, GroupCreationForm
from user.models import UserProfile, Department

User = get_user_model()


class IndexView(LoginRequiredMixin, View):

    def get(self, request):
        return render(request, 'dashboard.html')


class LoginView(View):

    def get(self, request):
        if not request.user.is_authenticated:
            return render(request, 'pages-login.html')
        else:
            return HttpResponseRedirect('/')

    def post(self, request):
        redirect_to = request.GET.get('next', '/')
        login_form = LoginForm(request.POST)
        ret = dict()
        if login_form.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponseRedirect(redirect_to)
                else:
                    ret['msg'] = 'This user is inactive, please contact admin.'
            else:
                ret['msg'] = 'Incorrect username or password!'
        else:
            ret['msg'] = 'username or password can\'t be empty!'
        return render(request, 'pages-login.html', ret)


class LogoutView(View):

    def get(self, request):
        logout(request)
        return render(request, 'pages-logout.html')


class UserProfileView(LoginRequiredMixin, View):

    def get(self, request, user_id):
        requested_user = get_object_or_404(User, pk=int(user_id))
        request_user = request.user
        print(request_user)
        # @TODO: Add permission check
        # if request_user != requested_user:
        #     return page_not_found(request, exception="This is not the profile that you should see...")
        # else:
        user_dict = model_to_dict(request_user)
        print(user_dict)
        user_update_form = UserUpdateForm(auto_id="form-update-user-%s", label_suffix='', initial=user_dict)
        ret = {
            'user': requested_user,
            'user_update_form': user_update_form,
        }

        return render(request, 'user/profile.html', ret)


class UserIndexView(LoginRequiredMixin, View):

    def get(self, request):
        users = UserProfile.objects.all()
        user_create_form = UserCreateForm(auto_id="form-create-user-%s", label_suffix='')
        user_update_form = UserUpdateForm(auto_id="form-update-user-%s", label_suffix='')
        ret = {
            'user_create_form': user_create_form,
            'user_update_form': user_update_form,
            'users': users
        }
        return render(request, 'user/index.html', ret)

    def post(self, request):
        users = UserProfile.objects.all()
        return render(request, 'user/index.html', {'users': users})


class UserCreateView(LoginRequiredMixin, View):

    def post(self, request):
        if request.is_ajax():
            user_create_form = UserCreateForm(request.POST)
            users = UserProfile.objects.all()
            if user_create_form.is_valid():
                user_create_form.save()
                ret = {
                    'status': 'success',
                }
                print(ret)
                # return render(request, 'user/index.html', {'form': user_create_form, 'users': users})
            else:
                ret = {
                    'status': 'fail',
                    'errors': user_create_form.errors.as_ul(),
                }
                print(ret)
                # return render(request, 'user/modal-create-user.html', {'form': user_create_form})
            return HttpResponse(json.dumps(ret), content_type='application/json')


class UpdateUserView(LoginRequiredMixin, View):

    def get(self, request):
        if request.is_ajax():
            print(request.GET)
            user_id = request.GET['user_id']
            user = User.objects.get(id=user_id)
            user_data = json.loads(serializers.serialize("json", (user,)))[0]['fields']
            ret = {
                'status': 'success',
                'data': user_data,
            }
            return HttpResponse(json.dumps(ret), content_type='application/json')

    def post(self, request):
        user_id = request.POST.get('id')
        print(request.POST)
        user = get_object_or_404(User, pk=int(user_id))
        user_update_form = UserUpdateForm(request.POST, instance=user)
        if user_update_form.is_valid():
            user_update_form.save()
            print(user)
            print(user.fullname)
            ret = {'status': 'success'}
        else:
            print("failed")
            ret = {
                'status': 'fail',
                'errors': user_update_form.errors.as_ul(),
            }
        return HttpResponse(json.dumps(ret), content_type='application/json')


class UserChangePasswordView(LoginRequiredMixin, View):

    def get(self, request, user_id):
        return HttpResponseRedirect(reverse('user:profile', args=(user_id,)))

    def post(self, request, user_id):
        if 'id' in request.POST and int(request.POST['id']) == user_id:
            user = get_object_or_404(User, pk=int(request.POST['id']))
        else:
            raise page_not_found(request)
        form = UserChangePasswordForm(request.POST)
        if form.is_valid():
            new_password = request.POST['new_password']
            user.set_password(new_password)
            user.save()
            return HttpResponseRedirect(reverse('user:profile', args=[user_id, ]))
        else:
            ret = {
                'status': 'fail',
                'password_change_form_errors': form.errors.as_ul()
            }
            return HttpResponse(json.dumps(ret), content_type='application/json')


class ToggleUserStatusView(LoginRequiredMixin, View):

    def get(self, request, user_id):
        if user_id > 0:
            user = get_object_or_404(User, pk=int(user_id))
            user.is_active = not user.is_active
            user.save()

        return HttpResponseRedirect(reverse('user:index'))


class DeleteUserView(LoginRequiredMixin, View):

    def get(self, request, user_id):
        if user_id > 0:
            User.objects.filter(id=user_id).delete()
        return redirect('user:index')


class UserCalendarView(LoginRequiredMixin, View):

    def get(self, request):
        return render(request, 'apps-calendar.html')


class UserGroupsView(LoginRequiredMixin, View):

    def get(self, request):
        groups = Group.objects.all()
        return render(request, 'user/groups.html', {'groups': groups})


class UserCreateGroupView(LoginRequiredMixin, View):

    def get(self, request):
        return redirect("user:index")

    def post(self, request):
        form = GroupCreationForm(request.POST)
        groups = Group.objects.all()
        ret = dict()
        if form.is_valid:
            form.save()
        return HttpResponseRedirect(reverse('user:groups'))
        # return HttpResponse(json.dumps(ret), content_type='application/json')


class UserRecoverPasswordView(View):

    def get(self, request):
        return render(request, 'user/recover-password.html')

    def post(self, request):
        if 'email' in request.POST and request.POST['email']:
            user_email = request.POST['email']
            token = User.objects.make_random_password()
            """ 
            Do not use the shortcut below, coz user shouldn't know if the email refs an user.
            user = get_object_or_404(User, email=user_email)
            """
            try:
                user = User.objects.get(email=user_email)
                send_email(request, to=user_email, token=token, fullname=user.fullname)
                user.set_password(token)
                user.save()
            except ObjectDoesNotExist:
                pass
            # No user with this email. Just pretend we've sent.
            return render(request, 'user/recover-password.html', {'sent': True})
        else:
            error_msg = 'Please enter your email.'
            return render(request, 'user/recover-password.html', {'error_msg': error_msg})

