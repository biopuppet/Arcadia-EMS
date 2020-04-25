import json
import re

from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Group
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from ArcadiaEMS.views import page_not_found
from user.email import send_email
from user.forms import LoginForm, UserCreateForm, UserChangePasswordForm, UserUpdateForm
from user.models import UserProfile

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
        # @TODO: Add permission check
        # if request_user != requested_user:
        #     return page_not_found(request, exception="This is not the profile that you should see...")
        # else:
        return render(request, 'user/profile.html', {'user': requested_user})


class UserListView(LoginRequiredMixin, View):

    def get(self, request):
        users = UserProfile.objects.all()
        return render(request, 'user/index.html', {'users': users})

    def post(self, request):
        users = UserProfile.objects.all()
        return render(request, 'user/index.html', {'users': users})


class UserCreateView(LoginRequiredMixin, View):

    def get(self, request):
        users = UserProfile.objects.all()
        return render(request, 'user/index.html', {'users': users})

    def post(self, request):
        user_create_form = UserCreateForm(request.POST)
        users = UserProfile.objects.all()
        if user_create_form.is_valid():
            user_create_form.save()
            return render(request, 'user/index.html', {'users': users})
        else:
            ret = {
                'status': 'fail',
                'user_create_form_errors': user_create_form.errors
            }
            return render(request, 'user/index.html', {'users': users, 'error_msg': user_create_form.errors})
        return HttpResponse(json.dumps(ret), content_type='application/json')


class UpdateUserView(LoginRequiredMixin, View):

    # def get(self, request):
    #     users = UserProfile.objects.all()
    #     return render(request, 'user/profile.html', {'users': users})

    def post(self, request, user_id):
        user = get_object_or_404(User, pk=int(user_id))
        user_update_form = UserUpdateForm(request.POST, instance=user)
        if user_update_form.is_valid():
            user_update_form.save()
            return HttpResponseRedirect(request.POST.get('next', '/'))
        else:
            ret = {
                'status': 'fail',
                'user_update_form_errors': user_update_form.errors
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
            pattern = '<li>.*?<ul class=.*?><li>(.*?)</li>'
            errors = str(form.errors)
            password_change_form_errors = re.findall(pattern, errors)
            ret = {
                'status': 'fail',
                'password_change_form_errors': password_change_form_errors[0]
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
        return redirect("user:index")


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
