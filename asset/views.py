import json
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from ArcadiaEMS.views import page_not_found
from asset.forms import AssetCreationForm, AssetForm, AssetSkuForm, AssetSetForm, AssetScrapForm, AssetBorrowForm, \
    AssetReturnForm, AssetFixForm
from asset.models import Asset, AssetSet, AssetCreate, AssetScrap, AssetFix, AssetBorrowReturn, AssetSKU, BaseApp
from asset.serializers import AssetSkuSerializer, AssetSerializer, AssetCreateSerializer, AssetScrapSerializer, \
    AssetFixSerializer, AssetBorrowReturnSerializer, BaseAppSerializer, AssetSetSerializer


class AssetIndexView(LoginRequiredMixin, View):

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


class AssetMineView(LoginRequiredMixin, View):

    def get(self, request):
        return render(request, 'mine.html')

    def post(self, request):
        if request.is_ajax():
            apps = BaseApp.objects.filter(transactor=request.user)
            apps_ = BaseAppSerializer(instance=apps, many=True)
            return HttpResponse(json.dumps(apps_.data), content_type='application/json')


class AssetProfileView(LoginRequiredMixin, View):

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


class AssetCreationView(LoginRequiredMixin, View):

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
        if save_ret and save_ret.get('asset'):
            asset = save_ret.get('asset')
            ret.update({'msg': '编号【%s】设备的建账申请已提交！' % asset})
        elif save_ret.get('error_msg'):
            ret.update(save_ret)
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
        if save_ret and save_ret.get('asset') is not None:
            ret.update({'msg': '基于编号【{}】设备的建账申请已提交！'.format(asset.aid)})
        elif save_ret.get('error_msg'):
            ret.update(save_ret)
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


class AssetFixView(LoginRequiredMixin, View):

    def get(self, request, asset_set_id):
        fix_form = AssetFixForm(auto_id="form-fix-%s", label_suffix='')
        asset_set_child_form = AssetSetForm(auto_id='form-asset-set-%s', label_suffix='')
        asset_set = get_object_or_404(AssetSet, pk=asset_set_id)
        ret = {
            'fix_form': fix_form,
            'asset_set': asset_set,
            'asset_set_form': asset_set_child_form,
        }
        return render(request, 'asset-fix.html', ret)

    def post(self, request, asset_set_id):
        asset_set = get_object_or_404(AssetSet, pk=asset_set_id)
        asset_sku = asset_set.sku
        asset = asset_sku.asset

        fix_form = AssetFixForm(request.POST, auto_id="form-fix-%s", label_suffix='')
        asset_set_new_form = AssetSetForm(request.POST, auto_id="form-asset-new-%s", label_suffix='')
        ret = {
            'fix_form': fix_form,
            'asset_set': asset_set,
            'asset_set_form': asset_set_new_form,
        }
        if fix_form.is_valid() and asset_set_new_form.is_valid():
            # if fixing the whole set
            child_quantity = asset_set_new_form.cleaned_data.get('quantity')
            if child_quantity == asset_set.quantity:
                # Abandon the forked asset set form
                asset_set.status = '报修审核中'
                asset_set.save()
                fix_app = fix_form.save(sku=asset_sku)
                ret.update({'msg': '编号【{}】设备报修申请已提交！'.format(fix_app.id)})
            elif child_quantity > asset_set.quantity:
                ret.update({
                    'error_msg': '数量超过了合法范围'
                })
            else:
                asset_set.quantity -= child_quantity
                asset_set.save()

                fix_app = fix_form.save(sku=asset_sku)

                asset_set_new_form.save(sku=asset_sku, app=fix_app)

                ret.update({'msg': '编号【{}】设备报修申请已提交！'.format(fix_app.id)})
        elif fix_form.errors:
            ret.update({
                'error_msg': fix_form.errors.as_ul()
            })
        else:
            ret.update({
                'error_msg': asset_set_new_form.errors.as_ul()
            })
        return render(request, 'asset-fix.html', ret)


class AssetScrapView(LoginRequiredMixin, View):

    def get(self, request, asset_set_id):
        scrap_form = AssetScrapForm(auto_id="form-scrap-%s", label_suffix='')
        asset_set_child_form = AssetSetForm(auto_id='form-asset-set-%s', label_suffix='')
        asset_set = get_object_or_404(AssetSet, pk=asset_set_id)
        ret = {
            'scrap_form': scrap_form,
            'asset_set': asset_set,
            'asset_set_form': asset_set_child_form,
        }
        return render(request, 'asset-scrap.html', ret)

    def post(self, request, asset_set_id):
        asset_set = get_object_or_404(AssetSet, pk=asset_set_id)
        asset_sku = asset_set.sku
        asset = asset_sku.asset

        scrap_form = AssetScrapForm(request.POST, auto_id="form-scrap-%s", label_suffix='')
        asset_set_new_form = AssetSetForm(request.POST, auto_id="form-asset-new-%s", label_suffix='')
        ret = {
            'scrap_form': scrap_form,
            'asset_set': asset_set,
            'asset_set_form': asset_set_new_form,
        }
        if scrap_form.is_valid() and asset_set_new_form.is_valid():
            # if scraping the whole set
            child_quantity = asset_set_new_form.cleaned_data.get('quantity')
            if child_quantity == asset_set.quantity:
                # Abandon the forked asset set form
                asset_set.status = '报废审核中'
                asset_set.save()
                scrap_app = scrap_form.save(sku=asset_sku)
                ret.update({'msg': '编号【{}】设备报废申请已提交！'.format(scrap_app.id)})
            elif child_quantity > asset_set.quantity:
                ret.update({
                    'error_msg': '数量非法'
                })
            else:
                asset_set.quantity -= child_quantity
                asset_set.save()

                scrap_app = scrap_form.save(sku=asset_sku)

                asset_set_new_form.save(sku=asset_sku, app=scrap_app)

                ret.update({'msg': '编号【{}】设备报废申请已提交！'.format(scrap_app.id)})
        elif scrap_form.errors:
            ret.update({
                'error_msg': scrap_form.errors.as_ul()
            })
        else:
            ret.update({
                'error_msg': asset_set_new_form.errors.as_ul()
            })
        return render(request, 'asset-scrap.html', ret)


class AssetBorrowView(LoginRequiredMixin, View):

    def get(self, request, asset_set_id):
        if request.is_ajax():
            assets = AssetSerializer(instance=Asset.objects.all(), many=True)
            return HttpResponse(json.dumps(assets.data), content_type='application/json')
        else:
            asset_set = get_object_or_404(AssetSet, pk=asset_set_id)
            asset_sku = asset_set.sku
            asset = asset_sku.asset

            asset_form = AssetForm(instance=asset, auto_id="form-asset-%s", label_suffix='')
            asset_sku_form = AssetSkuForm(instance=asset_sku, auto_id="form-asset-sku-%s", label_suffix='')
            asset_set_form = AssetSetForm(instance=asset_set, auto_id="form-asset-set-%s", label_suffix='')

            asset_set_child_form = AssetSetForm(auto_id="form-asset-set-child-%s", label_suffix='')
            borrow_form = AssetBorrowForm(auto_id="form-borrow-%s", label_suffix='')

            ret = {
                'asset_form': asset_form,
                'asset_sku_form': asset_sku_form,
                'asset_set_form': asset_set_form,
                'asset_set_child_form': asset_set_child_form,
                'borrow_form': borrow_form,
                'asset_set': asset_set,
            }
            return render(request, 'asset-borrow.html', ret)

    def post(self, request, asset_set_id):
        asset_set = get_object_or_404(AssetSet, pk=asset_set_id)
        asset_sku = asset_set.sku
        asset = asset_sku.asset

        borrow_form = AssetBorrowForm(request.POST, auto_id="form-borrow-%s", label_suffix='')
        asset_form = AssetForm(instance=asset, auto_id="form-asset-%s", label_suffix='')
        asset_sku_form = AssetSkuForm(instance=asset_sku, auto_id="form-asset-sku-%s", label_suffix='')
        asset_set_form = AssetSetForm(instance=asset_set, auto_id="form-asset-set-%s", label_suffix='')
        asset_set_child_form = AssetSetForm(request.POST, auto_id="form-asset-set-child-%s", label_suffix='')
        ret = {
            'asset_form': asset_form,
            'asset_sku_form': asset_sku_form,
            'asset_set_form': asset_set_form,
            'asset_set_child_form': asset_set_child_form,
            'borrow_form': borrow_form,
            'asset_set': asset_set,
        }

        if borrow_form.is_valid() and asset_set_child_form.is_valid():
            if asset_set_child_form.cleaned_data.get('quantity') <= asset_set.quantity:
                borrow_app = borrow_form.save(sku=asset_sku)
                asset_set_child = asset_set_child_form.save(sku=asset_sku, app=borrow_app)
                # TODO: Move this to review.view
                asset_set.quantity -= asset_set_child.quantity
                asset_set.save()
                ret.update({
                    'msg': '借出申请【#%s】已创建' % borrow_app.id,
                })
            else:
                ret.update({
                    'error_msg': 'Stock is not enough for the requested quantity!',
                })
        else:
            ret.update({
                'error_msg': borrow_form.errors.as_ul(),
            })
        return render(request, 'asset-borrow.html', ret)


class AssetReturnIndexView(LoginRequiredMixin, View):

    def get(self, request):
        return render(request, 'return-index.html')

    def post(self, request):
        if request.is_ajax():
            sets = AssetSet.objects.filter(app__type='借出')
            sets_data = AssetSetSerializer(instance=sets, many=True).data
            return HttpResponse(json.dumps(sets_data), content_type='application/json')


class AssetReturnView(LoginRequiredMixin, View):

    def get(self, request, app_id):
        app = get_object_or_404(BaseApp, pk=app_id)
        sku = app.sku
        merging_set = app.asset_sets_app.first()
        asset = sku.asset
        asset_sets = sku.sets.all()
        return_form = AssetReturnForm(instance=app, sku_id=sku.id, auto_id="form-return-%s", label_suffix='')
        ret = {
            'asset_sets': asset_sets,
            'merging_set': merging_set,
            'return_form': return_form,
        }
        return render(request, 'return.html', ret)

    def post(self, request, app_id):
        app = get_object_or_404(AssetBorrowReturn, pk=app_id)
        sku = app.sku
        asset = sku.asset
        asset_sets = sku.sets.all()
        asset_set = app.asset_sets_app.first()
        return_form = AssetReturnForm(request.POST, instance=app, sku_id=sku.id, auto_id="form-return-%s", label_suffix='')
        ret = {
            'asset_sets': asset_sets,
            'return_form': return_form,
            'merging_set': asset_set,
        }
        if return_form.is_valid():
            asset_return = return_form.save()
            merge_set = return_form.cleaned_data.get('merge_set')
            if merge_set.sku == asset_set.sku and merge_set.status == app.returned_status:
                merge_set.quantity += asset_set.quantity
                ret.update({
                    'msg': '成功合入【%d】,设备组【%d】已删除' % (merge_set.id, asset_set.id)
                })
                merge_set.save()
                asset_set.delete()
            else:
                ret.update({
                    'error_msg': '无法合并到设备组【%d】，状态不一致' % merge_set.id,
                })
        else:
            ret.update({
                'error_msg': return_form.errors.as_ul(),
            })
        return render(request, 'return.html', ret)