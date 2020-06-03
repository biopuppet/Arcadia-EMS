import json

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from ArcadiaEMS.views import page_error
from asset.forms import *
from asset.models import BaseApp, AssetCreate, AssetScrap
from review.forms import ReviewAssetCreationForm, ReviewAssetAppForm
from asset.serializers import BaseAppSerializer


class ReviewIndexView(LoginRequiredMixin, View):

    def get(self, request):
        return render(request, 'index.html')

    def post(self, request):
        if request.is_ajax():
            apps = BaseApp.objects.all()
            apps_ = BaseAppSerializer(instance=apps, many=True)
            return HttpResponse(json.dumps(apps_.data), content_type='application/json')


class AppDetailView(LoginRequiredMixin, View):
    app = None
    sku = None
    asset = None
    asset_set = None

    def get(self, request, app_id):
        self.app = get_object_or_404(BaseApp, id=app_id)
        self.sku = self.app.sku
        self.asset = self.sku.asset
        self.asset_set = self.app.asset_sets_app.all().first()  # TODO: deal with query set

        if self.app.type == '建账':
            return self.get_review_creation(request)
        elif self.app.type.__contains__('修'):  # TODO: refactor this
            return self.get_review_fix(request)
        elif self.app.type == '报废':
            return self.get_review_scrap(request)
        elif self.app.type == '借出':
            return self.get_review_borrow(request)
        else:
            print('Unknown app type %s' % self.app.type)
            raise page_error(request)

    def post(self, request, app_id):
        app = get_object_or_404(BaseApp, id=app_id)
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
            return render(request, 'review-create-asset.html', ret)
        elif app.type.__contains__('修'):
            return render(request, 'review-fix-asset.html', ret)
        elif app.type == '报废':
            return render(request, 'review-scrap-asset.html', ret)
        elif app.type == '借出':
            return render(request, 'review-borrow-asset.html', ret)
        else:
            raise page_error(request)

    def get_review_creation(self, request):
        asset_form = AssetForm(instance=self.asset, auto_id="form-asset-%s", label_suffix='')
        asset_sku_form = AssetSkuForm(instance=self.sku, auto_id="form-asset-sku-%s", label_suffix='')
        asset_set_form = AssetSetForm(instance=self.asset_set, auto_id="form-asset-set-%s", label_suffix='')
        asset_creation_form = AssetCreationForm(instance=self.app, auto_id="form-asset-create-%s", label_suffix='')
        review_form = ReviewAssetAppForm(instance=self.app, auto_id="form-review-asset-%s", label_suffix='')
        ret = {
            'asset_creation_form': asset_creation_form,
            'asset_form': asset_form,
            'asset_sku_form': asset_sku_form,
            'asset_set_form': asset_set_form,
            'review_form': review_form,
            'app': self.app,
        }
        return render(request, 'review-create-asset.html', ret)

    def get_review_fix(self, request):
        asset_set_child_form = AssetSetForm(instance=self.asset_set, auto_id="form-asset-set-child-%s", label_suffix='')
        fix_form = AssetFixForm(instance=self.app, auto_id="form-fix-%s", label_suffix='')
        review_form = ReviewAssetAppForm(instance=self.app, auto_id="form-review-%s", label_suffix='')

        ret = {
            'asset_set_form': asset_set_child_form,
            'fix_form': fix_form,
            'asset_set': self.asset_set,
            'review_form': review_form,
            'app': self.app,
        }
        return render(request, 'review-fix-asset.html', ret)

    def get_review_scrap(self, request):
        asset_set_child_form = AssetSetForm(instance=self.asset_set, auto_id="form-asset-set-child-%s", label_suffix='')
        scrap_form = AssetScrapForm(instance=self.app, auto_id="form-scrap-%s", label_suffix='')
        review_form = ReviewAssetAppForm(instance=self.app, auto_id="form-review-%s", label_suffix='')

        ret = {
            'asset_set_form': asset_set_child_form,
            'scrap_form': scrap_form,
            'asset_set': self.asset_set,
            'review_form': review_form,
            'app': self.app,
        }
        return render(request, 'review-scrap-asset.html', ret)

    def get_review_borrow(self, request):
        asset_set_child_form = AssetSetForm(instance=self.asset_set, auto_id="form-asset-set-child-%s", label_suffix='')
        borrow_form = AssetBorrowForm(instance=self.app, auto_id="form-borrow-%s", label_suffix='')
        review_form = ReviewAssetAppForm(instance=self.app, auto_id="form-review-%s", label_suffix='')

        ret = {
            'asset_set_form': asset_set_child_form,
            'borrow_form': borrow_form,
            'asset_set': self.asset_set,
            'review_form': review_form,
            'app': self.app,
        }
        return render(request, 'review-borrow-asset.html', ret)
