from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.contrib.auth.models import AbstractUser

from department.models import Department


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, email, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not username:
            raise ValueError('The given username must be set')
        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, email, password, **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, email, password, **extra_fields)


class UserProfile(AbstractUser):
    fullname = models.CharField(max_length=30, blank=True, verbose_name="Full Name")
    phone = models.CharField(max_length=13, default="", verbose_name="Mobile Number")
    image = models.ImageField(upload_to="image/%Y/%m", default="image/default.jpg",
                              max_length=100, null=True, blank=True)
    department = models.ForeignKey(Department, related_name='users', null=True, blank=True, on_delete=models.SET_NULL,
                                   verbose_name="部门")
    # post = models.CharField(max_length=50, null=True, blank=True, verbose_name="职位")
    # superior = models.ForeignKey("self", null=True, blank=True, on_delete=models.SET_NULL, verbose_name="上级主管")
    # roles = models.ManyToManyField("Role", verbose_name="角色", blank=True)
    objects = UserManager()

    class Meta:
        verbose_name = "User Profile"
        verbose_name_plural = verbose_name
        ordering = ['id']

    def __str__(self):
        return self.username.__str__()


class Faq(models.Model):
    question = models.CharField(max_length=100, verbose_name='Question')
    answer = models.TextField(verbose_name='Answer')
