from django import forms
from django.forms import TextInput, Select

from asset.models import Asset, AssetCreate, AssetCategory
from user.models import UserProfile


class AssetForm(forms.ModelForm):
    """
    Asset basic form that assists other forms.
    """
    error_messages = {
    }

    aid = forms.CharField(
        label="设备编号",
        required=True,
        max_length=30,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Asset ID", }, )
    )
    name = forms.CharField(
        label="设备名称",
        required=True,
        max_length=50,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Asset Name", }, )
    )
    category = forms.ModelChoiceField(
        label="设备类别",
        required=False,
        queryset=AssetCategory.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )
    model = forms.CharField(
        label="设备型号",
        required=False,
        max_length=30,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Asset Model", }, )
    )
    spec = forms.CharField(
        label="设备规格",
        required=False,
        max_length=30,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Asset Specification", }, )
    )
    # status = forms.ChoiceField(
    #     label="状态",
    #     required=False,
    #     choices=((1, '审核中'), (2, '完好'), (3, '维修中'), (4, '采购中'), (5, '已报废')),
    #     widget=forms.widgets.Select(attrs={'class': 'form-control', }),
    # )
    produced_on = forms.DateField(
        label="生产日期",
        required=False,
        widget=forms.widgets.DateInput(format='%Y-%m-%d', attrs={'class': 'form-control', 'type': 'date'})
    )
    expired_on = forms.DateField(
        label="保质日期",
        required=False,
        widget=forms.widgets.DateInput(format='%Y-%m-%d', attrs={'class': 'form-control', 'type': 'date'})
    )
    quantity = forms.IntegerField(
        label="数量",
        required=True,
        initial=1,
        widget=forms.widgets.NumberInput(attrs={'class': 'form-control', }),
    )
    price = forms.DecimalField(
        label="单价",
        required=False,
        widget=forms.widgets.TextInput(
            attrs={'class': 'form-control', 'placeholder': '0.00'}),
    )

    class Meta:
        model = Asset
        fields = [
            'aid', 'name', 'category', 'model', 'spec', 'produced_on', 'expired_on',
            'quantity', 'price',
        ]


class AssetCreationForm(forms.ModelForm):
    """
    A form that creates an asset.
    """
    error_messages = {
    }
    credentials = forms.FileField(
        label="建账证明",
        required=False,
        widget=forms.FileInput(attrs={'class': 'form-control', })
    )
    transactor = forms.ModelChoiceField(
        label="经办人",
        required=True,
        queryset=UserProfile.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )
    note = forms.CharField(
        label="备注",
        required=False,
        widget=forms.Textarea(attrs={'class': 'form-control', })
    )

    class Meta:
        model = AssetCreate
        fields = [
            'credentials', 'transactor', 'note',
        ]
        error_messages = {

        }

    # def clean_id(self):
    #     aid = self.cleaned_data.get("id")
    #     if aid and Asset.objects.filter(id=id).count():
    #         raise forms.ValidationError('AID already exists.')
    #     return aid
