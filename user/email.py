from __future__ import unicode_literals

from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render

from ArcadiaEMS import settings


def send_email(request, to, subject, **kwargs):
    html = render(request, 'user/email-recoverpwd.html', {'token': kwargs['token'], 'fullname': kwargs['fullname']})
    text = render(request, 'user/email.txt', {'token': kwargs['token'], 'fullname': kwargs['fullname']})

    msg = EmailMultiAlternatives(subject, html.content.decode('utf-8'), from_email=settings.DEFAULT_FROM_EMAIL, to=[to])
    msg.attach_alternative(text.content.decode('utf-8'), "text/html")

    msg.send()

