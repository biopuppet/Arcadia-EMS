from django.shortcuts import render, redirect
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from .forms import DepartmentCreationForm
from .models import Department


class DepartmentsView(LoginRequiredMixin, View):

    def get(self, request):
        departments = Department.objects.all()
        return render(request, 'department/index.html', {'departments': departments})


class DepartmentCreationView(LoginRequiredMixin, View):

    def get(self, request):
        dc_form = DepartmentCreationForm()
        return render(request, 'department/create-department.html', {'dc_form': dc_form})

    def post(self, request):
        dc_form = DepartmentCreationForm(request.POST)
        ret = {'dc_form': dc_form}
        if dc_form.is_valid():
            department = dc_form.save()
            ret = {
                'dc_form': dc_form,
                'msg': 'Successfully created department ' + department.name
            }
        else:
            ret = {
                'dc_form': dc_form,
                'error_msg': dc_form.errors.as_text(),
            }
        return render(request, 'department/create-department.html', ret)


class DepartmentDeleteView(LoginRequiredMixin, View):

    def get(self, request, department_id):
        if department_id and department_id > 0:
            Department.objects.filter(id=department_id).delete()
        return redirect('department:index')
