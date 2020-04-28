from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.forms import TextInput, Select, EmailInput, SelectMultiple

from .models import Department


class DepartmentCreationForm(forms.ModelForm):
    name = forms.CharField(
        label="Department Name",
        required=True,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Department Name"}, )
    )

    class Meta:
        model = Department
        fields = ['name']
