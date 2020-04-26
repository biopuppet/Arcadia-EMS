from django import forms

from asset.models import Asset


class AssetCreationForm(forms.ModelForm):
    """
    A form that creates an asset.
    """
    error_messages = {
    }

    name = forms.CharField(required=True, max_length=30)
    category = forms.ChoiceField(
        choices=((1, 'regular'), (2, 'special')),
        initial=1,
        widget=forms.widgets.Select()
    )

    class Meta:
        model = Asset
        fields = [
            'aid', 'name', 'category', 'spec', 'transactor', 'quantity',
        ]
        error_messages = {

        }

    def clean_aid(self):
        aid = self.cleaned_data.get("aid")
        if aid and Asset.objects.filter(aid=aid).count():
            raise forms.ValidationError('AID already exists.')
        return aid

