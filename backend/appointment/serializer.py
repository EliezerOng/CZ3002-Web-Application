from rest_framework import serializers
from .models import Counsellor, Appointment, User

# Create serializer for counsellor model class
class CounsellorSerializer(serializers.ModelSerializer):

    
 

    def create(self, validated_data):
        postalCode = validated_data.pop("postalCode", None)
        return super().create(validated_data)

    class Meta:
        model = Counsellor
        fields = ["counsellorID", "name", "languages", "description", "images", "address"] # Choose fields to display on restAPI

# Create serializer for appointment model class
class AppointmentSerializer(serializers.ModelSerializer):

    booked_by = serializers.ReadOnlyField(source="user.username") 
    booked_by_id = serializers.ReadOnlyField(source="user.id")

    class Meta:
        model = Appointment
        read_only_fields = ['counsellorID',]
        fields = ["appointmentID", "date", "time", "booked_by", "booked_by_id" ,"counsellorID", "completed"] # Choose fields to display on restAPI


# Create serializer for completed appointments
class CompletedAppointmentSerializer(serializers.ModelSerializer):

    # This is how to access another model's attribute based on the foreign key
    counsellorName = serializers.CharField(source='counsellorID.name')

    class Meta:
        model = Appointment
        fields = ["appointmentID", "counsellorName", "date", "time",]

# Create serializer for upcoming appointments
class UpcomingAppointmentSerializer(serializers.ModelSerializer):
    # This is how to access another model's attribute based on the foreign key
    counsellorName = serializers.CharField(source='counsellorID.name')

    class Meta:
        model = Appointment
        fields = ["appointmentID", "counsellorName", "date", "time",]