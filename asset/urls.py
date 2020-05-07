from django.urls import path

from asset.views import *

app_name = 'asset'

urlpatterns = [
    # path('asset/', ),
    path('', AssetIndexView.as_view(), name='index'),
    path('<slug:asset_id>', AssetProfileView.as_view(), name='profile'),

    path('create/', AssetCreationView.as_view(), name='create'),
    path('create/<slug:asset_id>', AssetCreationOnAssetView.as_view(), name='create-on-asset'),
    path('borrow/<slug:asset_id>', AssetIndexView.as_view(), name='borrow'),
    path('scrap/<slug:asset_id>', AssetIndexView.as_view(), name='scrap'),
    path('fix/<slug:asset_id>', AssetIndexView.as_view(), name='fix'),

    path('create-table/', AssetCreateTableView.as_view(), name='create-table'),
    path('scrap-table/', AssetScrapTableView.as_view(), name='scrap-table'),
    path('fix-table/', AssetFixTableView.as_view(), name='fix-table'),
    path('borrow-return-table/', AssetBorrowReturnTableView.as_view(), name='borrow-return-table')
]
