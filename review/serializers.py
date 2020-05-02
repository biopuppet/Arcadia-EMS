from rest_framework import serializers

from asset.models import *


class BaseAppModelSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))
    updated_at = serializers.DateTimeField(format("%Y-%m-%d %H:%M:%S"))

    class Meta:
        model = BaseAppModel
        depth = 1
        fields = "__all__"
