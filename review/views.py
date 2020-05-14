import json

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from asset.forms import *
from asset.models import BaseAppModel, AssetCreate, AssetScrap
from review.forms import ReviewAssetCreationForm, ReviewAssetAppForm
from asset.serializers import BaseAppModelSerializer


class ReviewIndexView(LoginRequiredMixin, View):

    def get(self, request):
        return render(request, 'index.html')

    def post(self, request):
        if request.is_ajax():
            apps = BaseAppModel.objects.all()
            apps_ = BaseAppModelSerializer(instance=apps, many=True)
            return HttpResponse(json.dumps(apps_.data), content_type='application/json')


class AppDetailView(LoginRequiredMixin, View):

    def get(self, request, app_id):
        app = get_object_or_404(BaseAppModel, id=app_id)
        print(app)
        sku = app.sku
        asset = sku.asset
        asset_set = app.asset_sets_app.all().first()  # TODO: deal with query set
        print(asset_set)

        if app.type == '建账':
            print('get creation app')
            asset_form = AssetForm(instance=asset, auto_id="form-asset-%s", label_suffix='')
            asset_sku_form = AssetSkuForm(instance=sku, auto_id="form-asset-sku-%s", label_suffix='')
            asset_set_form = AssetSetForm(instance=asset_set, auto_id="form-asset-set-%s", label_suffix='')
            asset_creation_form = AssetCreationForm(instance=app, auto_id="form-asset-create-%s", label_suffix='')
            review_form = ReviewAssetAppForm(instance=app, auto_id="form-review-asset-%s", label_suffix='')
            ret = {
                'asset_creation_form': asset_creation_form,
                'asset_form': asset_form,
                'asset_sku_form': asset_sku_form,
                'asset_set_form': asset_set_form,
                'review_form': review_form,
                'app': app,
            }
            return render(request, 'review-create-asset.html', ret)
        elif app.type == '报废':
            print('scrap app')
        elif app.type == '借出':
            asset_set_child_form = AssetSetForm(instance=asset_set, auto_id="form-asset-set-child-%s", label_suffix='')
            borrow_form = AssetBorrowForm(instance=app, auto_id="form-borrow-%s", label_suffix='')
            review_form = ReviewAssetAppForm(instance=app, auto_id="form-review-%s", label_suffix='')

            ret = {
                'asset_set_child_form': asset_set_child_form,
                'borrow_form': borrow_form,
                'asset_set': asset_set,
                'review_form': review_form,
                'app': app,
            }
            return render(request, 'review-borrow-asset.html', ret)
        else:
            print('unknown')
        return redirect('review:index')

    def post(self, request, app_id):
        app = get_object_or_404(BaseAppModel, id=app_id)
        sku = app.sku
        asset = sku.asset
        review_form = ReviewAssetAppForm(request.POST, instance=app, auto_id="form-review-asset-%s",
                                      label_suffix='')
        ret = {
            'review_form': review_form,
            'app': app,
        }
        if review_form.is_valid():
            review_form.save(user=request.user)
            ret.update({
                'msg': '编号【%s】的设备相关申请已审批' % app.id,
            })
        else:
            ret.update({
                'error_msg': review_form.errors.as_ul(),
            })
        if app.type == '建账':
            print('creation app')
            return render(request, 'review-create-asset.html', ret)
        elif app.type == '借出':
            return render(request, 'review-borrow-asset.html', ret)
