import json

from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views import View

from asset.forms import AssetCreationForm, AssetForm
from asset.models import Asset


class AssetIndexView(View):

    def get(self, request):
        assets = Asset.objects.all()
        return render(request, 'asset.html', {'assets': assets})

    def post(self, request):
        if request.is_ajax():
            asset_list = []
            for asset in Asset.objects.all():
                asset_list.append({
                    'aid': asset.aid,
                    'name': asset.name,
                    'spec': asset.spec,
                    'acquired_on': str(asset.acquired_on),
                    'department': asset.department,
                    'status': asset.status,
                    'quantity': asset.quantity,
                })
            return HttpResponse(json.dumps(asset_list), content_type='application/json')


class AssetProfileView(View):

    def get(self, request, asset_id):
        return render(request, '404.html')


class AssetCreationView(View):

    def get(self, request):
        asset_creation_form = AssetCreationForm(auto_id="form-asset-create-%s", label_suffix='')
        asset_form = AssetForm(auto_id="form-asset-%s", label_suffix='')
        ret = {
            'asset_creation_form': asset_creation_form,
            'asset_form': asset_form,
        }
        return render(request, 'create-asset.html', ret)

    def post(self, request):
        print(request.POST)
        asset_form = AssetForm(request.POST)
        asset_creation_form = AssetCreationForm(request.POST)
        assets = Asset.objects.all()
        asset = None
        if asset_form.is_valid():
            print("asset_form valid")
            asset = asset_form.save()
            print(asset)
            if asset_creation_form.is_valid():
                # form.save()
                asset_creation = asset_creation_form.save()
                asset_creation.asset = asset
                print(asset_creation.asset)
                print('creation form valid')
                ret = {'status': 'success'}
            else:
                ret = {
                    'status': 'fail',
                    'asset_creation_form_errors': asset_creation_form.errors
                }
                print(asset_creation_form.errors)
        else:
            ret = {
                'status': 'fail',
                'asset_form_errors': asset_form.errors
            }
            print(asset_form.errors)
        return redirect('asset:index')
        return HttpResponse(json.dumps(ret), content_type='application/json')
