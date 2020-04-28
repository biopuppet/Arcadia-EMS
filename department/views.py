from django.shortcuts import render, redirect, get_object_or_404
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


class DepartmentChangeView(LoginRequiredMixin, View):

    def get(self, request, department_id):
        department = get_object_or_404(Department, pk=department_id)
        form = DepartmentCreationForm(instance=department)
        ret = {
            'department': department,
            'form': form,
        }
        return render(request, 'department/change-department.html', ret)

    def post(self, request, department_id):
        department = get_object_or_404(Department, pk=department_id)
        form = DepartmentCreationForm(request.POST, instance=department)
        if form.is_valid():
            form.save()
            ret = {
                "msg": "Successfully Changed Department " + department.name,
                'department': department,
                'form': form,
            }
        else:
            ret = {
                'error_msg': form.errors.as_ul(),
                'department': department,
                'form': form,
            }
        return render(request, 'department/change-department.html', ret)


class DepartmentDeleteView(LoginRequiredMixin, View):

    def get(self, request, department_id):
        if department_id and department_id > 0:
            Department.objects.filter(id=department_id).delete()
        return redirect('department:index')
