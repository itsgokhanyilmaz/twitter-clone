from django.urls import path, include
from rest_framework.routers import DefaultRouter

from twitterApp.api.viewsets import TweetViewSet, UserViewSet, CurrentUserViewSet

router = DefaultRouter()
router.register('tweets', TweetViewSet, base_name='tweets')
router.register('users', UserViewSet, base_name='users')
router.register('me', CurrentUserViewSet, base_name='me')

urlpatterns = router.urls