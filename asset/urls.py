from django.urls import path

from asset.table_views import *
from asset.views import *

app_name = 'asset'

urlpatterns = [
    path('', AssetIndexView.as_view(), name='index'),
    path('mine/', AssetMineView.as_view(), name='mine'),

    path('<slug:asset_id>', AssetProfileView.as_view(), name='profile'),

    path('create/', AssetCreationView.as_view(), name='create'),
    path('create/<slug:asset_id>', AssetCreationOnAssetView.as_view(), name='create-on-asset'),

    path('borrow/<int:asset_set_id>', AssetBorrowView.as_view(), name='borrow'),
    path('return/', AssetReturnIndexView.as_view(), name='return-index'),
    # TODO: Why is this app_id while you actually deal with asset_set?
    path('return/<int:app_id>', AssetReturnView.as_view(), name='return'),

    path('scrap/<int:asset_set_id>', AssetScrapView.as_view(), name='scrap'),
    path('fix/<int:asset_set_id>', AssetFixView.as_view(), name='fix'),

    # 统计报表
    path('create-table/', AssetCreateTableView.as_view(), name='create-table'),
    path('scrap-table/', AssetScrapTableView.as_view(), name='scrap-table'),
    path('fix-table/', AssetFixTableView.as_view(), name='fix-table'),
    path('borrow-return-table/', AssetBorrowReturnTableView.as_view(), name='borrow-return-table')
]
