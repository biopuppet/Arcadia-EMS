from django import forms
from django.contrib.auth import get_user_model


User = get_user_model()


class LoginForm(forms.Form):
    username = forms.CharField(required=True, error_messages={"required": "Please enter your username"})
    password = forms.CharField(required=True, error_messages={"required": "Please enter your password"})


class UserCreateForm(forms.ModelForm):
    password = forms.CharField(
        required=True,
        min_length=6,
        max_length=20,
        error_messages={
            "required": "密码不能为空",
            "min_length": "密码长度最少6位数",
        }
    )

    password_again = forms.CharField(
        required=True,
        min_length=6,
        max_length=20,
        error_messages={
            "required": "确认密码不能为空",
            "min_length": "密码长度最少6位数",
        }
    )

    class Meta:
        model = User
        fields = [
            'fullname', 'id', 'username', 'groups', 'phone', 'email', 'password'
        ]

        error_messages = {
            "fullname": {"required": "Full name required"},
            "username": {"required": "Username required"},
            "email": {"required": "Email required"},
            "group": {"required": "Group required"},
            "phone": {
                "required": "Phone Number required",
                "max_length": "Invalid Phone Number(Too long)",
                "min_length": "Invalid Phone Number(Too short)"
            }
        }

    def clean(self):
        cleaned_data = super(UserCreateForm, self).clean()
        username = cleaned_data.get("username")
        phone = cleaned_data.get("phone", "")
        email = cleaned_data.get("email")
        password = cleaned_data.get("password")
        password_again = cleaned_data.get("password_again")
        groups = cleaned_data.get("groups")

        # if not Group.objects.exists(groups):
        #     raise forms.ValidationError('Unknown group:{}'.format(groups))

        if User.objects.filter(username=username).count():
            raise forms.ValidationError('Username:{} already exists'.format(username))

        if password != password_again:
            raise forms.ValidationError("Inconsistent password")

        if User.objects.filter(phone=phone).count():
            raise forms.ValidationError('Phone:{} already exists'.format(phone))

        # REGEX_MOBILE = r"^1[3578]\-\d{9}$|^147\d{8}$|^176\d{8}$"
        # if not re.match(REGEX_MOBILE, phone):
        #     raise forms.ValidationError("手机号码非法")

        if User.objects.filter(email=email).count():
            raise forms.ValidationError('Email:{} already exists'.format(email))


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = [
            'fullname', 'id', 'username', 'phone', 'is_active'
        ]

        error_messages = {
            "phone": {
                "max_length": "Invalid Phone Number(Too long)",
                "min_length": "Invalid Phone Number(Too short)"
            }
        }


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
