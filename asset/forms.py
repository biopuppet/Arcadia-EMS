import re
from django import forms
from django.forms import TextInput, Select
from django.shortcuts import get_object_or_404

from asset.models import Asset, AssetCreate, AssetCategory, AssetSet, AssetSKU, AssetScrap, AssetBorrowReturn, AssetFix
from department.models import Department
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
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "生产厂商信息", }, )
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
        label="单价(元)",
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
    department = forms.ModelChoiceField(
        label="所在部门",
        required=False,
        queryset=Department.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )
    manager = forms.ModelChoiceField(
        label="负责人",
        required=False,
        queryset=UserProfile.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )
    user = forms.ModelChoiceField(
        label="使用人",
        required=False,
        queryset=UserProfile.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )
    address = forms.CharField(
        label="详细地址",
        required=False,
        widget=forms.widgets.Textarea(attrs={'class': 'form-control',
                                             'placeholder': '具体到仓库，实验室等'})
    )

    class Meta:
        model = AssetSet
        fields = [
            'quantity', 'manager', 'user', 'department', 'address',
        ]

    def clean_quantity(self):
        quantity = self.cleaned_data.get('quantity')
        # TODO: integer check
        if quantity and int(quantity) <= 0:
            raise forms.ValidationError("非法数量")
        return quantity

    def save(self, sku=None, app=None, commit=True):
        asset_set = super().save(commit=False)
        asset_set.sku = sku
        asset_set.app = app
        asset_set.set_status()
        if commit:
            asset_set.save()
        return asset_set


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

    def save(self, sku=None, commit=True):
        asset_creation_app = super().save(commit=False)
        asset_creation_app.sku = sku
        asset_creation_app.type = '建账'
        if commit:
            asset_creation_app.save()
        return asset_creation_app


class AssetFixForm(forms.ModelForm):
    """
    An application form that fixes an asset.
    """
    type = '维修'
    error_messages = {
    }

    transactor = forms.ModelChoiceField(
        label="申请人",
        required=True,
        queryset=UserProfile.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )
    contact = forms.CharField(
        label="维修方联系方式",
        required=False,
        widget=forms.widgets.TextInput(attrs={'class': 'form-control', 'placeholder': '维修方联系方式'})
    )

    class Meta:
        model = AssetFix
        fields = [
            'transactor', 'contact',
        ]

    def save(self, sku=None, commit=True):
        app = super().save(commit=False)
        app.sku = sku
        app.type = self.type

        if commit:
            app.save()
        return app


class AssetScrapForm(forms.ModelForm):
    """
    An application form that scraps an asset.
    """
    error_messages = {
    }

    transactor = forms.ModelChoiceField(
        label="申请人",
        required=True,
        queryset=UserProfile.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )
    reason = forms.CharField(
        label="报废原因",
        required=False,
        widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': '报废原因说明'})
    )

    class Meta:
        model = AssetScrap
        fields = [
            'transactor', 'reason',
        ]

    def save(self, sku=None, commit=True):
        app = super().save(commit=False)
        app.sku = sku
        app.type = '报废'

        if commit:
            app.save()
        return app


class AssetBorrowForm(forms.ModelForm):
    """
    An application form that borrows an asset.
    """
    error_messages = {
    }

    estimate_return_on = forms.DateField(
        label="预计归还日期",
        required=True,
        widget=forms.widgets.DateInput(format='%Y-%m-%d', attrs={'class': 'form-control', 'type': 'date'})
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
        model = AssetBorrowReturn
        fields = [
            'estimate_return_on', 'transactor', 'note',
        ]

    def save(self, sku=None, commit=True):
        app = super().save(commit=False)
        app.sku = sku
        app.type = '借出'

        if commit:
            app.save()
        return app


class AssetReturnForm(forms.ModelForm):
    """
    An application form that returns an asset.
    """
    error_messages = {
    }

    returned_on = forms.DateField(
        label="归还时间",
        required=True,
        widget=forms.widgets.DateInput(format='%Y-%m-%d',
                                       attrs={'class': 'form-control', 'type': 'date'})
    )
    returned_status = forms.CharField(
        label='归还时状态',
        required=True,
        widget=forms.widgets.TextInput(attrs={'class': 'form-control', })
    )

    # Extra fields
    merge_set = forms.ModelChoiceField(
        label='合入设备组',
        required=True,
        queryset=AssetSet.objects.all(),
        widget=forms.widgets.Select(attrs={'class': 'form-control', }),
    )

    class Meta:
        model = AssetBorrowReturn
        fields = [
            'returned_on', 'returned_status',
        ]

    def __init__(self, *args, **kwargs):
        sku_id = kwargs.pop('sku_id', None)
        super(AssetReturnForm, self).__init__(*args, **kwargs)
        if sku_id:
            sku = get_object_or_404(AssetSKU, pk=sku_id)
            # TODO: intersect queryset
            self.fields['merge_set'].queryset = sku.sets.all()
