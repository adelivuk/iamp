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
        # send_mail(
        #     'Verify your account',
        #     f'Click the link to verify your account: {verification_link}',
        #     'from@example.com',
        #     [instance.email],
        #     fail_silently=False,
        # )