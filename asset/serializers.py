from rest_framework import serializers

from asset.models import *


class AssetSkuSerializer(serializers.ModelSerializer):
    acquired_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))
    updated_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))

    class Meta:
        model = AssetSKU
        fields = "__all__"


class AssetSetSerializer(serializers.ModelSerializer):
    sku = serializers.CharField(source='sku.skuid')
    app = serializers.CharField(source='app.type')
    manager = serializers.CharField(source='manager.username')

    class Meta:
        model = AssetSet
        fields = "__all__"


class AssetSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))
    updated_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))

    class Meta:
        model = Asset
        fields = "__all__"


class BaseAppSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))
    updated_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))
    transactor = serializers.CharField(allow_null=True, source='transactor.username')
    reviewer = serializers.CharField(allow_null=True, source='reviewer.username')
    sku = serializers.CharField(source='sku.skuid')

    class Meta:
        model = BaseApp
        fields = "__all__"


class AssetCreateSerializer(BaseAppSerializer):
    # credentials

    class Meta:
        model = AssetCreate
        fields = "__all__"


class AssetScrapSerializer(BaseAppSerializer):

    class Meta:
        model = AssetScrap
        fields = "__all__"


class AssetFixSerializer(BaseAppSerializer):

    class Meta:
        model = AssetFix
        fields = "__all__"


class AssetBorrowReturnSerializer(BaseAppSerializer):

    class Meta:
        model = AssetBorrowReturn
        fields = "__all__"
