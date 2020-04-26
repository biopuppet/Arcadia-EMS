import json

from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from asset.forms import AssetCreationForm
from asset.models import Asset


class AssetIndexView(View):

    def get(self, request):
        return render(request, 'asset/asset.html')


class AssetProfileView(View):

    def get(self, request, asset_id):
        return render(request, '404.html')


class AssetCreationView(View):

    def get(self, request):
        form = AssetCreationForm(request)
        return render(request, 'asset/create-asset.html', {'form': form})

    def post(self, request):
        form = AssetCreationForm(request.POST)
        asset = Asset.objects.all()
        if form.is_valid():
            # form.save()
            print(asset)
            ret = {'status': 'success'}
        else:
            ret = {
                'status': 'fail',
                'user_create_form_errors': form.errors
            }
        return HttpResponse(json.dumps(ret), content_type='application/json')
