from django.shortcuts import render
from django.views import View

from .models import Department


class DepartmentsView(View):

    def get(self, request):
        departments = Department.objects.all()
        return render(request, 'department/index.html', {'departments': departments})
