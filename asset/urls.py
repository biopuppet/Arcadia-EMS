from django.urls import path

from asset.views import *

app_name = 'asset'

urlpatterns = [
    # path('asset/', ),
    path('', AssetIndexView.as_view(), name='index'),
    path('<int:asset_id>', AssetProfileView.as_view(), name='profile'),

    path('create/', AssetCreationView.as_view(), name='create'),
    # path('delete-asset/<char:asset_id>', DeleteUserView.as_view(), name='delete-asset'),
    # path('update-asset/<char:asset_id>', UpdateUserView.as_view(), name='update-asset'),
    # path('toggle-asset-status/<char:asset_id>', ToggleUserStatusView().as_view(), name='toggle-asset-status'),
]
