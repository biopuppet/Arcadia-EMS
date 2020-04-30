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
                    'id': asset.id,
                    'aid': asset.aid,
                    'name': asset.name,
                    'spec': asset.spec,
                    'acquired_at': asset.acquired_at.strftime("%Y-%m-%d %H:%M:%S"),
                    'manufacturer': asset.manufacturer,
                    'produced_on': str(asset.produced_on),
                    'expired_on': str(asset.expired_on),
                    'department': asset.department,
                    'status': asset.status,
                    'quantity': asset.quantity,
                    'price': str(asset.price),
                })
            return HttpResponse(json.dumps(asset_list), content_type='application/json')
        else:
            assets = Asset.objects.all()
            return render(request, 'asset.html', {'assets': assets})


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
        asset_form = AssetForm(request.POST, auto_id="form-asset-create-%s", label_suffix='')
        asset_creation_form = AssetCreationForm(request.POST, auto_id="form-asset-%s", label_suffix='')
        ret = {
            'asset_creation_form': asset_creation_form,
            'asset_form': asset_form,
        }
        if asset_form.is_valid() and asset_creation_form.is_valid():
            asset = asset_form.save()
            asset_creation = asset_creation_form.save()
            asset_creation.asset = asset
            # TODO: deal with file input
            asset_creation.save()
            ret.update({'msg': '编号【{}】设备建账申请已提交！'.format(asset.aid)})
        else:
            errors = dict()
            if asset_form.errors:
                errors = asset_form.errors
            if asset_creation_form.errors:
                errors.update(asset_creation_form.errors)
            ret.update({
                'error_msg': errors.as_ul()
            })
        return render(request, 'create-asset.html', ret)
