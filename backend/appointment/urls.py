from django.urls import path
from .views import CounsellorListView, AppointmentListCreateView

app_name = "appointment"
# Define URLs for APIs
urlpatterns = [

    # Display hardcode counsellor without filter
    path("counsellor", CounsellorListView.as_view()),

    # Book appointment
    path("counsellor/<int:pk>/book", AppointmentListCreateView.as_view()),
]