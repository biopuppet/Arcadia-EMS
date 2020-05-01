import json

from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from asset.models import BaseAppModel


class ReviewIndexView(LoginRequiredMixin, View):

    def get(self, request):
        return render(request, 'index.html')

    def post(self, request):
        app_list = []
        for app in BaseAppModel.objects.all():
            app_list.append({
                'id': app.id,
                'created_at': app.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                'updated_at': app.updated_at.strftime("%Y-%m-%d %H:%M:%S"),
                'asset': app.asset.aid,
                'transactor': app.transactor.username,
                'status': app.status,
            })
        return HttpResponse(json.dumps(app_list), content_type='application/json')
