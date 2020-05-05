import json

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from asset.forms import *
from asset.models import BaseAppModel, AssetCreate, AssetScrap
from review.forms import ReviewAssetCreationForm
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
        if app.type == '建账':
            print('get creation app')
            sku = app.sku
            asset = sku.asset
            asset_form = AssetForm(instance=asset, auto_id="form-asset-%s", label_suffix='')
            asset_sku_form = AssetSkuForm(instance=sku, auto_id="form-asset-sku-%s", label_suffix='')
            asset_set = app.asset_sets_app.all().first()  # TODO: deal with query set
            asset_set_form = AssetSetForm(instance=asset_set, auto_id="form-asset-set-%s", label_suffix='')
            asset_creation_form = AssetCreationForm(instance=app, auto_id="form-asset-create-%s", label_suffix='')
            rac_form = ReviewAssetCreationForm(instance=app, auto_id="form-review-asset-create-%s", label_suffix='')
            ret = {
                'asset_creation_form': asset_creation_form,
                'asset_form': asset_form,
                'asset_sku_form': asset_sku_form,
                'asset_set_form': asset_set_form,
                'review_form': rac_form,
                'app': app,
            }
            return render(request, 'review-create-asset.html', ret)
        elif app.type == '报废':
            print('scrap app')
        else:
            print('unknown')
        return redirect('review:index')

    def post(self, request, app_id):
        app = get_object_or_404(BaseAppModel, id=app_id)
        if app.type == '建账':
            print('creation app')
            sku = app.sku
            asset = sku.asset
            rac_form = ReviewAssetCreationForm(request.POST, instance=app,
                                               auto_id="form-asset-create-%s",
                                               label_suffix='')
            ret = {
                'review_form': rac_form,
                'app': app,
            }
            if rac_form.is_valid():
                rac_form.save(user=request.user)
                ret.update({
                    'msg': '编号【%s】的设备相关申请已审批' % asset.aid,
                })
            else:
                ret.update({
                    'error_msg': rac_form.errors.as_ul(),
                })

            return render(request, 'review-create-asset.html', ret)
