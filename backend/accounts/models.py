from django.db import models
import uuid

class Account(models.Model):
    first_name = models.CharField(max_length=40, blank=True, null=True)
    last_name = models.CharField(max_length=40,blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    sponsor_email = models.EmailField(blank=True, null=True)
    is_verified = models.BooleanField(default=False)
    verification_token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    # captcha

    def __str__(self):
        return self.first_name + ' ' + self.last_name