import json
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from ArcadiaEMS.mixin import LoginRequiredMixin
from asset.models import Asset, AssetSet, AssetCreate, AssetScrap, AssetFix, AssetBorrowReturn, AssetSKU, BaseApp
from asset.serializers import AssetSkuSerializer, AssetSerializer, AssetCreateSerializer, AssetScrapSerializer, \
    AssetFixSerializer, AssetBorrowReturnSerializer, BaseAppSerializer


class AssetCreateTableView(LoginRequiredMixin, View):

    def get(self, request):
        createtable = AssetCreate.objects.all()
        return render(request, 'assetcreatetable.html', {'assetscreatetable': createtable})

    def post(self, request):
        asset_creations = AssetCreate.objects.all()
        if request.is_ajax():
            asset_creations_serial = AssetCreateSerializer(instance=asset_creations, many=True)
            return HttpResponse(json.dumps(asset_creations_serial.data), content_type='application/json')
        else:
            return render(request, 'assetcreatetable.html', {'assetscreatetable': asset_creations})


class AssetScrapTableView(LoginRequiredMixin, View):

    def get(self, request):
        scraptable = AssetScrap.objects.all()
        return render(request, 'assetscraptable.html', {'assetsscraptable': scraptable})

    def post(self, request):
        asset_scraps = AssetScrap.objects.all()
        if request.is_ajax():
            asset_scraps_serial = AssetScrapSerializer(instance=asset_scraps, many=True)
            return HttpResponse(json.dumps(asset_scraps_serial.data), content_type='application/json')
        else:
            return render(request, 'assetscraptable.html', {'assetsscraptable': asset_scraps})


class AssetFixTableView(LoginRequiredMixin, View):

    def get(self, request):
        fixtable = AssetFix.objects.all()
        return render(request, 'assetfixtable.html', {'assetfixtable': fixtable})

    def post(self, request):
        asset_fixs = AssetFix.objects.all()
        if request.is_ajax():
            asset_fixs_serial = AssetFixSerializer(instance=asset_fixs, many=True)
            return HttpResponse(json.dumps(asset_fixs_serial.data), content_type='application/json')
        else:
            return render(request, 'assetfixtable.html', {'assetfixtable': asset_fixs})


class AssetBorrowReturnTableView(LoginRequiredMixin, View):

    def get(self, request):
        borrowreturntable = AssetBorrowReturn.objects.all()
        return render(request, 'assetborrowreturntable.html', {'assetborrowreturntable': borrowreturntable})

    def post(self, request):
        asset_borrowreturns = AssetBorrowReturn.objects.all()
        if request.is_ajax():
            asset_borrowreturns_serial = AssetBorrowReturnSerializer(instance=asset_borrowreturns, many=True)
            return HttpResponse(json.dumps(asset_borrowreturns_serial.data), content_type='application/json')
        else:
            return render(request, 'assetborrowreturntable.html', {'assetborrowreturntable': asset_borrowreturns})
