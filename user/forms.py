from django import forms
from django.contrib.admin.widgets import FilteredSelectMultiple
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import Group, Permission
from django.forms import TextInput, Select, EmailInput, SelectMultiple

from user.models import Department

User = get_user_model()


class LoginForm(forms.Form):
    username = forms.CharField(required=True, error_messages={"required": "Please enter your username"})
    password = forms.CharField(required=True, error_messages={"required": "Please enter your password"})


class UserCreateForm(forms.ModelForm):
    """
    A form that creates a user, with no privileges, from the given username and
    password.
    """

    error_messages = {
        'password_mismatch': "The two password fields didn't match.",
        'email_exists': "The email already exists."
    }

    username = forms.CharField(
        label="Username",
        required=True,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Username"}, )
    )
    fullname = forms.CharField(
        label="Full Name",
        required=False,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Full Name"}),
    )
    email = forms.EmailField(
        label="Email",
        required=True,
        widget=EmailInput(attrs={'class': 'form-control', 'placeholder': "Email"})
    )
    phone = forms.CharField(
        label="Phone",
        required=False,
        min_length=11,
        max_length=13,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Phone"}),
        error_messages={
            "min_length": "Invalid Phone number",
        }
    )
    password1 = forms.CharField(
        label="Password",
        strip=False,
        required=True,
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}),
        min_length=6,
        max_length=20,
    )
    password2 = forms.CharField(
        label="Password (again)",
        strip=False,
        required=True,
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password (again)'}),
        min_length=6,
        max_length=20,
        help_text="Enter the same password as before, for verification.",
    )
    groups = forms.ModelMultipleChoiceField(
        label="Role Group",
        required=False,  # @TODO
        queryset=Group.objects.all(),
        widget=SelectMultiple(attrs={'class': 'form-control', })
    )
    department = forms.ModelChoiceField(
        label="Department",
        required=False,
        queryset=Department.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )

    class Meta:
        model = User
        fields = [
            'id', 'username', 'fullname', 'groups', 'department', 'phone', 'email',
        ]
        error_messages = {
            "username": {"required": "Username required"},
            "email": {"required": "Email required"},
        }

    def __init__(self, *args, **kwargs):
        super(UserCreateForm, self).__init__(*args, **kwargs)

    def clean_phone(self):
        phone = self.cleaned_data.get("phone", "")
        if phone and User.objects.filter(phone=phone).count():
            raise forms.ValidationError('Phone:{} already exists'.format(phone))
        # REGEX_MOBILE = r"^1[3578]\-\d{9}$|^147\d{8}$|^176\d{8}$"
        # if not re.match(REGEX_MOBILE, phone):
        #     raise forms.ValidationError("Invalid Phone number.")
        return phone

    def clean_email(self):
        email = self.cleaned_data.get("email")
        if email and User.objects.filter(email=email).count():
            raise forms.ValidationError(
                self.error_messages['email_exists'],
                code='email_exists',
            )
        return email

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError(
                self.error_messages['password_mismatch'],
                code='password_mismatch',
            )
        return password2

    def _post_clean(self):
        super()._post_clean()
        # Validate the password after self.instance is updated with form data
        # by super().
        # password = self.cleaned_data.get('password2')
        # if password:
        #     try:
        #         password_validation.validate_password(password, self.instance)
        #     except forms.ValidationError as error:
        #         self.add_error('password2', error)

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserUpdateForm(forms.ModelForm):
    """
    A form that updates an user's system info, such as group, department, etc.
    """
    # @TODO: How to do it in an elegant way?
    id = forms.CharField(widget=forms.HiddenInput())

    username = forms.CharField(
        label="Username",
        required=True,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Username", }, )
    )
    fullname = forms.CharField(
        label="Full Name",
        required=False,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Full Name"}),
    )
    email = forms.EmailField(
        label="Email",
        required=True,
        widget=EmailInput(attrs={'class': 'form-control', 'placeholder': "Email"})
    )
    phone = forms.CharField(
        label="Phone",
        required=False,
        min_length=11,
        max_length=13,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Phone"}),
    )
    groups = forms.ModelMultipleChoiceField(
        label="Role Group",
        required=False,  # @TODO
        queryset=Group.objects.all(),
        widget=SelectMultiple(attrs={'class': 'form-control', 'style': 'width: 100%;'})
    )
    department = forms.ModelChoiceField(
        label="Department",
        required=False,
        queryset=Department.objects.all(),
        widget=Select(attrs={'class': 'form-control', })
    )

    class Meta:
        model = User
        fields = [
            'id', 'username', 'fullname', 'email', 'phone', 'groups', 'department',
        ]


class UserChangePasswordForm(forms.Form):
    current_password = forms.CharField(
        required=True,
        min_length=6,
        max_length=20,
        error_messages={
            "required": "Current Password required"
        })

    new_password = forms.CharField(
        required=True,
        min_length=6,
        max_length=20,
        error_messages={
            "required": "Password required"
        })

    confirm_password = forms.CharField(
        required=True,
        min_length=6,
        max_length=20,
        error_messages={
            "required": "Confirm Password required"
        })

    def clean(self):
        cleaned_data = super(UserChangePasswordForm, self).clean()
        # @TODO: Add old password validation

        new_password = cleaned_data.get("new_password")
        confirm_password = cleaned_data.get("confirm_password")
        if new_password != confirm_password:
            raise forms.ValidationError("Inconsistent Password")


class GroupCreationForm(forms.ModelForm):
    name = forms.CharField(
        label="Group Name",
        max_length=30,
        required=True,
        widget=TextInput(attrs={'class': 'form-control', 'placeholder': "Group Name"})
    )
    permissions = forms.ModelMultipleChoiceField(
        label="Permissions",
        queryset=Permission.objects.all(),
        required=True,
        widget=SelectMultiple(attrs={'class': 'form-control', 'style': 'width: 100%;'})
    )

    class Meta:
        model = Group
        fields = [
            'id', 'name', 'permissions',
        ]
