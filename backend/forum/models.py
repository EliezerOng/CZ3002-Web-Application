from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    postID = models.BigAutoField(primary_key=True)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(max_length=500)
    title = models.CharField(max_length=200)
    numLikes = models.IntegerField()
    numComments = models.IntegerField()
    createdAt = models.DateTimeField(auto_now_add=True) # Set dateTime to current dateTime

    class Meta:
        ordering = ["-createdAt"]


class Like(models.Model):
    postID = models.ForeignKey("Post", db_column="postID", on_delete=models.CASCADE)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)

    
class Comment(models.Model):
    commentID = models.BigAutoField(primary_key=True)
    postID = models.ForeignKey("Post", db_column="postID", on_delete=models.CASCADE)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(max_length=300)



