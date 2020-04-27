from django.db import models


class Department(models.Model):
    name = models.CharField(max_length=30, blank=True, null=True, verbose_name='部门')

    class Meta:
        verbose_name = "Department"
        verbose_name_plural = "Departments"
        ordering = ['id']

    def __str__(self):
        return self.name.__str__()
