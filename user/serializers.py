from rest_framework import serializers

from .models import *


class UserProfileSerializer(serializers.ModelSerializer):
    groups_id = serializers.SerializerMethodField()

    def get_groups_id(self, row):
        groups = row.groups.all()
        ret = list()
        for item in groups:
            ret.append(
                item.id
            )
        return ret

    class Meta:
        model = UserProfile
        fields = "__all__"
