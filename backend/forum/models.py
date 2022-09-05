from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Post(models.Model):
    pid = models.BigAutoField(primary_key=True)
    uid = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(max_length=500)
    title = models.CharField(max_length=200)
    numLikes = models.IntegerField()
    numComments = models.IntegerField()
    createdAt = models.DateTimeField()

    class Meta:
        ordering = ["-createdAt"]

    def __str__(self):
        return f"Post: {self.pid}"

class Like(models.Model):
    pid = models.ForeignKey("Post", db_column="pid", on_delete=models.CASCADE)
    uid = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("pid", "uid")
    
class Comment(models.Model):
    pid = models.ForeignKey("Post", db_column="pid", on_delete=models.CASCADE)
    uid = models.ForeignKey(User, on_delete=models.CASCADE)
    cid = models.BigAutoField(primary_key=True)
    content = models.TextField(max_length=300)



