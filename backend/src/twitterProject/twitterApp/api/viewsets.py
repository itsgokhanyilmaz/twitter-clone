from rest_framework import viewsets
from ..models import Tweet, User
from twitterApp.api.serializers import TweetSerializer, UserSerializer


class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


