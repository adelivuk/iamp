from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from .models import Account
from .serializers import AccountSerializer

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

def verify_account(request, token):
    account = get_object_or_404(Account, verification_token=token)
    account.is_verified = True
    account.save()
    return HttpResponse('Account verified successfully')