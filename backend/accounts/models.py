from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail

class Account(models.Model):
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    sponsor_email = models.EmailField(max_length=100, blank=True, null=True)
    is_verified = models.BooleanField(default=False)
    #captcha

    def __str__(self):
        return self.first_name + ' ' + self.last_name

# @receiver(post_save, sender=Account)
# def send_sponsor_email(sender, instance, created, **kwargs):
#     if created:
#         send_mail(
#             'Account Created',
#             f'An account has been created for {instance.first_name} {instance.last_name}.',
#             'from@example.com',  # Replace with your "from" email address
#             [instance.sponsor_email],
#             fail_silently=False,
#         )