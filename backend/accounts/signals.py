from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail, EmailMultiAlternatives
from django.urls import reverse
from django.template.loader import render_to_string
from .models import Account
import os
from dotenv import load_dotenv

load_dotenv()

@receiver(post_save, sender=Account)
def send_verification_email(sender, instance, created, **kwargs):
    if created:
        verification_link = f"http://localhost:{os.getenv('BE_HOST_CONTAINER_PORT')}{reverse('verify-account', args=[instance.verification_token])}"

        if instance.sponsor_email:
            context = {
                'first_name': instance.first_name,
                'last_name': instance.last_name,
                'email': instance.email,
                'verification_link': verification_link,
            }
            html_content = render_to_string('emails/sponsor_email.html', context)
            msg = EmailMultiAlternatives(
                'New Account Created',
                '',
                'antoniod@antonio-delivuk.from.hr',
                [instance.sponsor_email]
            )
            msg.attach_alternative(html_content, "text/html")
            msg.send()