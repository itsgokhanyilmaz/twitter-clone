from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..models import Tweet, User
from twitterApp.api.serializers import TweetSerializer, UserSerializer


class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

    permission_classes = (IsAuthenticated,)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = (IsAuthenticated,)


class CurrentUserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(username=user.username)

