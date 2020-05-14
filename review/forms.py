from django import forms
from asset.models import AssetCreate, BaseAppModel


class ReviewAssetAppForm(forms.ModelForm):
    """
    A form that reviews an asset application.
    """
    error_messages = {
    }

    result = forms.CharField()
    opinion = forms.CharField(
        label="审批意见",
        required=False,
        widget=forms.widgets.Textarea(attrs={'class': 'form-control', 'placeholder': "审批意见", })
    )

    class Meta:
        model = BaseAppModel
        fields = [
            'opinion',
        ]

    def save(self, user=None, commit=True):
        app = super().save(commit=False)
        if user:
            app.reviewer = user
        result = self.cleaned_data.get('result')
        print(result)
        # Broadcast the review result to all asset_sets registered to this app
        app.transit(result)

        if commit:
            app.save()
        return app


class ReviewAssetCreationForm(ReviewAssetAppForm):
    """
    A form that reviews an asset creation.
    Unused for now...
    """

    class Meta:
        model = AssetCreate
        fields = [
            'opinion',
        ]
