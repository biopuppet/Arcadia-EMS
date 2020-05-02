import re

from django import forms
from django.forms import TextInput, Select

from asset.models import Asset, AssetCreate, AssetCategory, AssetSet, AssetSKU
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
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "设备编号", }, )
    )
    name = forms.CharField(
        label="设备名称",
        required=True,
        max_length=50,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "设备名称", }, )
    )
    category = forms.ModelChoiceField(
        label="设备类别",
        required=False,
        queryset=AssetCategory.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )
    description = forms.CharField(
        label="设备描述",
        required=False,
        widget=forms.widgets.Textarea(attrs={'class': 'form-control', 'placeholder': "此设备的详细描述信息", })
    )

    class Meta:
        model = Asset
        fields = [
            'aid', 'name', 'category', 'description',
        ]


class AssetSkuForm(forms.ModelForm):
    """
    Asset SKU form.
    """
    error_messages = {
    }
    # skuid = forms.CharField(
    #     label="货格编号",
    #     required=True,
    #     max_length=30,
    #     widget=TextInput(attrs={'class': 'form-control', 'placeholder': "货格编号", }, )
    # )
    model = forms.CharField(
        label="设备型号",
        required=False,
        max_length=30,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "设备型号", }, )
    )
    spec = forms.CharField(
        label="设备规格",
        required=False,
        max_length=30,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "设备规格", }, )
    )
    manufacturer = forms.CharField(
        label="生产厂商",
        required=False,
        max_length=50,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "生产厂商详细信息，如联系方式、地址等", }, )
    )
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
    price = forms.DecimalField(
        label="单价",
        required=False,
        widget=forms.widgets.NumberInput(
            attrs={'class': 'form-control', 'placeholder': '0.00'}),
    )
    note = forms.CharField(
        label="货格备注",
        required=False,
        widget=forms.widgets.Textarea(attrs={'class': 'form-control',
                                             'placeholder': '此货格（指具有该型号、规格、厂商等属性的设备）的备注信息'})
    )

    class Meta:
        model = AssetSKU
        fields = [
            'model', 'spec', 'manufacturer', 'produced_on', 'expired_on', 'price', 'note',
        ]

    def clean_price(self):
        price = self.cleaned_data.get('price')
        regex_price = r"^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$"
        if price and not re.match(regex_price, str(price)):
            raise forms.ValidationError("非法金额格式，合法格式如199, 10.02")
        return price

    def save(self, asset=None, commit=True):
        sku = super().save(commit=False)

        spec = self.cleaned_data.get('spec')
        model = self.cleaned_data.get('model')
        manufacturer = self.cleaned_data.get('manufacturer')
        produced_on = self.cleaned_data.get('produced_on')
        expired_on = self.cleaned_data.get('expired_on')
        price = self.cleaned_data.get('price')

        sku.set_skuid('#%s:%s/%s/%s/%s/%s' % (asset.aid, model, spec, manufacturer, produced_on, price))
        if asset:
            sku.asset = asset
            if commit:
                sku.save()
        return sku


class AssetSetForm(forms.ModelForm):
    quantity = forms.IntegerField(
        label="数量",
        required=True,
        initial=1,
        widget=forms.widgets.NumberInput(attrs={'class': 'form-control', }),
    )

    class Meta:
        model = AssetSet
        fields = [
            'quantity',
        ]

    def clean_quantity(self):
        quantity = self.cleaned_data.get('quantity')
        if quantity and quantity <= 0:
            raise forms.ValidationError("非法数量")
        return quantity


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
        widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': '建账备注信息'})
    )

    class Meta:
        model = AssetCreate
        fields = [
            'credentials', 'transactor', 'note',
        ]

    # def clean_id(self):
    #     aid = self.cleaned_data.get("id")
    #     if aid and Asset.objects.filter(id=id).count():
    #         raise forms.ValidationError('AID already exists.')
    #     return aid
