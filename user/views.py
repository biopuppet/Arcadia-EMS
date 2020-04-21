import json
import re

from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib.auth.hashers import make_password
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from user.forms import LoginForm, UserCreateForm, UserChangePasswordForm
from user.models import UserProfile

User = get_user_model()


class IndexView(View):

    def get(self, request):
        return render(request, 'index.html')


class LoginView(View):

    def get(self, request):
        if not request.user.is_authenticated:
            return render(request, 'pages-login.html')
        else:
            return HttpResponseRedirect('/')

    def post(self, request):
        redirect_to = request.GET.get('next', '/')
        login_form = LoginForm(request.POST)
        ret = dict(login_form=login_form)
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


class LogoutView(LoginRequiredMixin, View):

    def get(self, request):
        logout(request)
        return HttpResponseRedirect(reverse('login'))


class UserProfileView(LoginRequiredMixin, View):

    def get(self, request):
        return render(request, 'user/profile.html')

    def post(self, request):
        return render(request, 'user/profile.html')


class UserListView(LoginRequiredMixin, View):

    def get(self, request):
        users = UserProfile.objects.all()
        return render(request, 'user/index.html', {'users': users})

    def post(self, request):
        print('in UserListView')
        print(request.POST)
        users = UserProfile.objects.all()
        # return HttpResponseRedirect(reverse('user:create'))
        return render(request, 'user/index.html', {'users': users})


class UserCreateView(LoginRequiredMixin, View):

    def get(self, request):
        users = UserProfile.objects.all()
        return render(request, 'user/index.html', {'users': users})

    def post(self, request):
        print('in UserCreateView')
        print(request.POST)
        user_create_form = UserCreateForm(request.POST)
        if user_create_form.is_valid():
            new_user = user_create_form.save(commit=False)
            new_user.password = make_password(user_create_form.cleaned_data['password'])
            new_user.save()
            user_create_form.save_m2m()
            ret = {'status': 'success'}
            return redirect('user:index')
        else:
            pattern = '<li>.*?<ul class=.*?><li>(.*?)</li>'
            errors = str(user_create_form.errors)
            user_create_form_errors = re.findall(pattern, errors)
            ret = {
                'status': 'fail',
                'user_create_form_errors': user_create_form_errors[0]
            }
        return HttpResponse(json.dumps(ret), content_type='application/json')


class UserChangePasswordView(LoginRequiredMixin, View):

    def get(self, request):
        ret = dict()
        if 'id' in request.GET and request.GET['id']:
            user = get_object_or_404(User, pk=int(request.GET.get('id')))
            ret['user'] = user
        return render(request, 'user/profile.html', ret)

    def post(self, request):
        print('in UserChangePasswordView')
        print(request.POST)
        ret = dict()
        if 'id' in request.POST and request.POST['id']:
            user = get_object_or_404(User, pk=int(request.POST['id']))
            form = UserChangePasswordForm(request.POST)
            if form.is_valid():
                new_password = request.POST['new_password']
                user.set_password(new_password)
                user.save()
                ret = {'status': 'success'}
            else:
                pattern = '<li>.*?<ul class=.*?><li>(.*?)</li>'
                errors = str(form.errors)
                password_change_form_errors = re.findall(pattern, errors)
                ret = {
                    'status': 'fail',
                    'password_change_form_errors': password_change_form_errors[0]
                }
        return HttpResponse(json.dumps(ret), content_type='application/json')


class UserCalendarView(View):

    def get(self, request):
        return render(request, 'apps-calendar.html')
