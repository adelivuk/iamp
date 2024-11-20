from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AccountViewSet, verify_account

router = DefaultRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('verify/<uuid:token>/', verify_account, name='verify-account'),
]