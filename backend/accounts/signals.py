import sys
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.urls import reverse
from .models import Account

@receiver(post_save, sender=Account)
def send_verification_email(sender, instance, created, **kwargs):
    if created:
        verification_link = f"http://localhost:8000{reverse('verify-account', args=[instance.verification_token])}"
        print(verification_link, file=sys.stderr)

        sponsor_message = (
            f"A new account has been created for {instance.email}.\n"
            f"First Name: {instance.first_name}\n"
            f"Last Name: {instance.last_name}\n"
            f"Email: {instance.email}\n"
            f"Click the link to verify the account: {verification_link}"
        )
        send_mail(
            'New Account Created',
            sponsor_message,
            'antoniod@antonio-delivuk.from.hr',
            [instance.sponsor_email],
            fail_silently=False,
        )
