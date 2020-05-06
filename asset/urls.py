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

    # path('delete-asset/<char:asset_id>', DeleteUserView.as_view(), name='delete-asset'),
    # path('update-asset/<char:asset_id>', UpdateUserView.as_view(), name='update-asset'),
    # path('toggle-asset-status/<char:asset_id>', ToggleUserStatusView().as_view(), name='toggle-asset-status'),

    path('createtable/', AssetCreateTableView.as_view(), name='createtable'),
    path('scraptable/', AssetScrapTableView.as_view(), name='scraptable'),
    path('fixtable/', AssetFixTableView.as_view(), name='fixtable'),
    path('borrowreturntable/', AssetBorrowReturnTableView.as_view(), name='borrowreturntable')
]
