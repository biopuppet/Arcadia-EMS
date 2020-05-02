import re

from django import forms
from django.forms import TextInput, Select

from asset.models import Asset, AssetCreate, AssetCategory, AssetSet, AssetSKU
from user.models import UserProfile


class ReviewAssetCreationForm(forms.ModelForm):
    """
    A form that reviews an asset creation.
    """
    error_messages = {
    }

    # result = HiddenInput
    result = forms.CharField()
    opinion = forms.CharField(
        label="审批意见",
        required=False,
        widget=forms.widgets.Textarea(attrs={'class': 'form-control', 'placeholder': "审批意见", })
    )

    class Meta:
        model = AssetCreate
        fields = [
            'opinion',
        ]

    def save(self, user=None, commit=True):
        asset_create_app = super().save(commit=False)
        if user:
            asset_create_app.reviewer = user
        result = self.cleaned_data.get('result')
        print(result)
        asset_create_app.transit(result)
        if commit:
            asset_create_app.save()
        return asset_create_app
