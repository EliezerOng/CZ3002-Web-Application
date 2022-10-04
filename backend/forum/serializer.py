from rest_framework import serializers
from django.core.serializers import serialize
from .models import Post, Like, Comment
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
import jsonpickle
import json
# Create a serializer for the Post Model Class
class PostSerializer(serializers.ModelSerializer):
    # We can define additional fields to display on serializer here

    # This is how to return username and userid
    # Since we did ReadOnlyField, we need to define the User in views (See view)
    poster = serializers.ReadOnlyField(source="poster.username") 
    poster_id = serializers.ReadOnlyField(source="poster.id")

    # https://www.django-rest-framework.org/api-guide/fields/#serializermethodfield
    # SerilizerMethodField() enables us to define a method to get values from another serializer
    # I.e. likes will get its value from the method get_likes
    # likes will be a read-only field
    likes = serializers.SerializerMethodField()
    def get_likes(self, post):
        return Like.objects.filter(post=post).count()

    comments = serializers.SerializerMethodField()
    def get_comments(self,post):
        comments = Comment.objects.filter(post=post)
        if comments.exists():
            comment_list = []
            for i in range(len(comments)):
                comment_list.append(comments[i].content)

            print(len(comment_list))
            return comment_list
        else:
            return []

    class Meta:
        model = Post
        fields = ["pid", "title", "content", "poster", "poster_id", "createdAt", 'likes', 'comments'] # Choose fields to display on restAPI


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id']

class CommentSerializer(serializers.ModelSerializer):
    commenter = serializers.ReadOnlyField(source="commenter.username") 
    commenter_id = serializers.ReadOnlyField(source="commenter.id")

    class Meta:
        model = Comment
        fields = ['cid','content', 'commenter', 'commenter_id']

