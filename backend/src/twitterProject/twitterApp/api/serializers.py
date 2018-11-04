from rest_framework import serializers

from twitterApp.models import Tweet, User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class TweetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tweet
        fields = (
            'id', 'user_id', 'content', 'create_date',
        )


