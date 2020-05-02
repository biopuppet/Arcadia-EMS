from rest_framework import serializers

from asset.models import *


class AssetSkuSerializer(serializers.ModelSerializer):
    acquired_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))
    updated_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))

    class Meta:
        model = AssetSKU
        fields = "__all__"


class AssetSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))
    updated_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))

    class Meta:
        model = Asset
        fields = "__all__"
