from django.shortcuts import render
from rest_framework import serializers, permissions, generics,mixins,status
from .serializer import CounsellorSerializer, AppointmentSerializer
from .models import Counsellor, Appointment
from rest_framework.exceptions import ValidationError
from django.http import HttpResponse

# Create your views here.
class CounsellorListView(generics.ListAPIView):
    serializer_class = CounsellorSerializer

     # Override this method to filter data from DB to display on API
    # Display all counsellor objects
    def get_queryset(self):
        queryset = Counsellor.objects.all() # Order the results
        return queryset


# Class to create appointments under specific counsellors
# api/appointment/<int:pk>/book
class AppointmentListCreateView(generics.ListCreateAPIView):
    serializer_class = AppointmentSerializer

    # Override this method to filter data from DB to display on API
    # Display all booked appointments under corresponding counsellor
    def get_queryset(self):
        counsellor = Counsellor.objects.get(pk=self.kwargs['pk']) # Get counsellor based on primary key (PID) in query parameter
        # return Like.objects.filter(liker=user, post=post)
        return Appointment.objects.filter(counsellorID=counsellor)

    # Override this smethod to handle the object before saving into DB (POST)
    # Default behaviour of this method is to call serializer.save()
    # serializer contains the JSON data of the serializer
    def perform_create(self, serializer):
        bookings_list = []
        counsellor = Counsellor.objects.get(pk=self.kwargs['pk'])
        bookings = Appointment.objects.filter(counsellorID = counsellor)
        # Get all currently booked dates for corresponding counsellor
        for i in bookings:
            bookings_list.append(str(i.date)+str(i.time))
        #check if the counsellor is alr booked for a particular day
        booking = str(self.request.POST.get('date'))+str(self.request.POST.get('time'))
        print(booking)
        print(bookings_list)
        if booking in bookings_list:
            raise ValidationError('This timing has already been booked, please select a different timing')
        # Define the user to be the current user in POST
        serializer.save(user=self.request.user, counsellorID = counsellor)
