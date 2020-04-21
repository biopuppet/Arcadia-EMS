from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    fullname = models.CharField(max_length=30, blank=True, verbose_name="Full Name")
    phone = models.CharField(max_length=13, default="", verbose_name="Mobile Number")
    image = models.ImageField(upload_to="image/%Y/%m", default="image/default.jpg",
                              max_length=100, null=True, blank=True)
    # department = models.ForeignKey("Structure", null=True, blank=True, on_delete=models.SET_NULL, verbose_name="部门")
    # post = models.CharField(max_length=50, null=True, blank=True, verbose_name="职位")
    # superior = models.ForeignKey("self", null=True, blank=True, on_delete=models.SET_NULL, verbose_name="上级主管")
    # roles = models.ManyToManyField("Role", verbose_name="角色", blank=True)

    class Meta:
        verbose_name = "User Profile"
        verbose_name_plural = verbose_name
        ordering = ['id']

    def __str__(self):
        return self.username.__str__()