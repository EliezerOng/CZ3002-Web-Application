from django.urls import path
from .views import PostList, VoteCreate, PostRetrieveDestroy, CommentCreate

app_name = "forum"
# Define URLs for APIs
urlpatterns = [
    path("/posts", PostList.as_view()),
    path("/posts/<int:pk>/likes",VoteCreate.as_view()),
    path("/posts/<int:pk>", PostRetrieveDestroy.as_view()),
    path("/posts/<int:pk>/comments/<int:cid>", CommentCreate.as_view()),
    
]