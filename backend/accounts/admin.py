from django.contrib import admin
from .models import Account

class AccountAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'sponsor_email', 'is_verified')

# Register your models here.

admin.site.register(Account, AccountAdmin)

# Register your models here.
