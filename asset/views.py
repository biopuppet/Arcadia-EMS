import json
from django.db.utils import IntegrityError
from django.forms.utils import ErrorDict

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from ArcadiaEMS.views import page_not_found
from asset.forms import AssetCreationForm, AssetForm, AssetSkuForm, AssetSetForm
from asset.models import Asset, AssetSet
from asset.serializers import AssetSkuSerializer, AssetSerializer


class AssetIndexView(View):

    def get(self, request):
        assets = Asset.objects.all()
        return render(request, 'assets.html', {'assets': assets})

    def post(self, request):
        if request.is_ajax():
            assets = AssetSerializer(instance=Asset.objects.all(), many=True)
            return HttpResponse(json.dumps(assets.data), content_type='application/json')
        else:
            assets = Asset.objects.all()
            return render(request, 'assets.html', {'assets': assets})


class AssetProfileView(View):

    def get(self, request, asset_id):
        asset = get_object_or_404(Asset, pk=asset_id)
        # Sum all stocks under this asset
        stock = 0
        for skus in asset.skus.all():
            for set in skus.sets.all():
                stock += set.quantity
        return render(request, 'profile.html', {'asset': asset, 'stock': stock})

    def post(self, request, asset_id):
        if request.is_ajax():
            asset = get_object_or_404(Asset, pk=asset_id)
            skus = AssetSkuSerializer(instance=asset.skus.all(), many=True)
            return HttpResponse(json.dumps(skus.data), content_type='application/json')
        else:
            raise page_not_found(request)


class AssetCreationView(View):

    def get(self, request):
        if request.is_ajax():
            assets = AssetSerializer(instance=Asset.objects.all(), many=True)
            return HttpResponse(json.dumps(assets.data), content_type='application/json')
        else:
            asset_creation_form = AssetCreationForm(auto_id="form-asset-create-%s", label_suffix='')
            asset_form = AssetForm(auto_id="form-asset-%s", label_suffix='')
            asset_sku_form = AssetSkuForm(auto_id="form-asset-sku-%s", label_suffix='')
            asset_set_form = AssetSetForm(auto_id="form-asset-set-%s", label_suffix='')
            ret = {
                'asset_creation_form': asset_creation_form,
                'asset_form': asset_form,
                'asset_sku_form': asset_sku_form,
                'asset_set_form': asset_set_form,
            }
            return render(request, 'create-asset.html', ret)

    def post(self, request):
        asset_form = AssetForm(request.POST, auto_id="form-asset-%s", label_suffix='')
        asset_sku_form = AssetSkuForm(request.POST, auto_id="form-asset-sku-%s", label_suffix='')
        asset_set_form = AssetSetForm(request.POST, auto_id="form-asset-set-%s", label_suffix='')
        asset_creation_form = AssetCreationForm(request.POST, auto_id="form-asset-create-%s", label_suffix='')
        ret = {
            'asset_creation_form': asset_creation_form,
            'asset_form': asset_form,
            'asset_sku_form': asset_sku_form,
            'asset_set_form': asset_set_form,
        }
        save_ret = save_asset_creation(asset_form, asset_sku_form, asset_set_form,
                                       asset_creation_form)
        asset = save_ret.get('asset')
        if asset is not None:
            ret.update({'msg': '编号【%s】设备的建账申请已提交！' % asset})
        elif save_ret.get('error_msg'):
            ret.update(save_ret['error_msg'])
        return render(request, 'create-asset.html', ret)


class AssetCreationOnAssetView(LoginRequiredMixin, View):

    def get(self, request, asset_id):
        asset = get_object_or_404(Asset, pk=asset_id)
        asset_creation_form = AssetCreationForm(auto_id="form-asset-create-%s", label_suffix='')
        asset_form = AssetForm(instance=asset, auto_id="form-asset-%s", label_suffix='')
        asset_sku_form = AssetSkuForm(auto_id="form-asset-sku-%s", label_suffix='')
        asset_set_form = AssetSetForm(auto_id="form-asset-set-%s", label_suffix='')
        ret = {
            'asset_creation_form': asset_creation_form,
            'asset_form': asset_form,
            'asset_sku_form': asset_sku_form,
            'asset_set_form': asset_set_form,
            'asset': asset,
            'readonly': True,
        }
        return render(request, 'create-asset.html', ret)

    def post(self, request, asset_id):
        asset = get_object_or_404(Asset, pk=asset_id)
        asset_form = AssetForm(auto_id="form-asset-%s", label_suffix='')
        asset_creation_form = AssetCreationForm(request.POST, auto_id="form-create-%s", label_suffix='')
        asset_sku_form = AssetSkuForm(request.POST, auto_id="form-asset-sku-%s", label_suffix='')
        asset_set_form = AssetSetForm(request.POST, auto_id="form-asset-set-%s", label_suffix='')
        ret = {
            'asset_creation_form': asset_creation_form,
            'asset_sku_form': asset_sku_form,
            'asset_set_form': asset_set_form,
            'readonly': True,
            'asset': asset,
            'asset_form': asset_form,
        }
        save_ret = save_asset_creation(asset_form, asset_sku_form, asset_set_form,
                                       asset_creation_form, on_asset=True, asset=asset)
        if save_ret['asset'] is not None:
            ret.update({'msg': '基于编号【{}】设备的建账申请已提交！'.format(asset.aid)})
        elif save_ret.get('error_msg'):
            ret.update(save_ret.get('error_msg'))
        return render(request, 'create-asset.html', ret)


def save_asset_creation(asset_form, asset_sku_form, asset_set_form, asset_creation_form, on_asset=False, asset=None):
    if asset_sku_form.is_valid() and asset_set_form.is_valid() and asset_creation_form.is_valid():
        if not on_asset and asset is None:
            if asset_form.is_valid():
                asset = asset_form.save()
            else:
                return asset_form.errors
        asset_sku = asset_sku_form.save(asset)
        asset_creation = asset_creation_form.save(sku=asset_sku)
        asset_set_form.save(sku=asset_sku, app=asset_creation)
        return {'asset': asset.aid}
    else:
        if not on_asset and asset_form.errors:
            errors = asset_form.errors
        elif asset_creation_form.errors:
            errors = asset_creation_form.errors
        elif asset_sku_form.errors:
            errors = asset_sku_form.errors
        elif asset_set_form.errors:
            errors = asset_set_form.errors
        else:
            return {'error_msg': 'Unknown errors'}
        return {'error_msg': errors.as_ul()}


class AssetCreateTableView(View):

    def get(self, request):
        createtable = AssetCreate.objects.all()
        return render(request, 'assetcreatetable.html', {'assetscreatetable': createtable})

    def post(self, request):
        if request.is_ajax():
            createtable_list = []
            for createtable in AssetCreate.objects.all():
                createtable_list.append({
                    'created_at': str(createtable.created_at),
                    'updated_at': str(createtable.updated_at),
                    'asset': str(createtable.asset.name),
                    'transactor': str(createtable.transactor),
                    'note': str(createtable.note),
                    'status': str(createtable.status),
                    'reviewer': str(createtable.reviewer),
                    'opinion': str(createtable.opinion),
                    'credentials': str(createtable.credentials),
                })
            return HttpResponse(json.dumps(createtable_list), content_type='application/json')
        else:
            createtable = AssetCreate.objects.all()
            return render(request, 'assetcreatetable.html', {'assetscreatetable': createtable})


class AssetScrapTableView(View):

    def get(self, request):
        scraptable = AssetScrap.objects.all()
        return render(request, 'assetscraptable.html', {'assetsscraptable': scraptable})

    def post(self, request):
        if request.is_ajax():
            scraptable_list = []
            for scraptable in AssetScrap.objects.all():
                scraptable_list.append({
                    'created_at': str(scraptable.created_at),
                    'updated_at': str(scraptable.updated_at),
                    'asset': str(scraptable.asset),
                    'transactor': str(scraptable.transactor),
                    'note': str(scraptable.note),
                    'status': str(scraptable.status),
                    'reviewer': str(scraptable.reviewer),
                    'opinion': str(scraptable.opinion),
                    'reason': str(scraptable.reason),
                })
            return HttpResponse(json.dumps(scraptable_list), content_type='application/json')
        else:
            scraptable = AssetScrap.objects.all()
            return render(request, 'assetscraptable.html', {'assetsscraptable': scraptable})
