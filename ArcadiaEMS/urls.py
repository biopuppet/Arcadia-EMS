"""ArcadiaEMS URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views

from asset.views import AssetIndexView
from .settings import DEBUG
from user import views as user_views
from django.conf import settings
from django.conf.urls.static import static

from .views import page_error, page_not_found

urlpatterns = [
        path('user/', include('user.urls', namespace='user')),
        path('department/', include('department.urls', namespace='department')),
        path('asset/', include('asset.urls', namespace='asset')),
        path('review/', include('review.urls', namespace='review')),

        path('', AssetIndexView.as_view(), name='index'),
        path('login/', user_views.LoginView.as_view(), name='login'),
        path('logout/', user_views.LogoutView.as_view(), name='logout'),
        path('maintained/', auth_views.TemplateView.as_view(template_name='maintenance.html'),
             name='maintained'),

        path('admin/', admin.site.urls),
        # path('ui/', include('system.urls')),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

handler404 = page_not_found
handler500 = page_error

if DEBUG:
    urlpatterns += [
        path('404/', handler404, name='404'),
        path('500/', handler500, name='500'),
    ]
