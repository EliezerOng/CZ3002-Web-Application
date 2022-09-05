from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Appointment(models.Model):
    aid = models.BigAutoField(primary_key=True)
    date = models.DateField()
    # Define time field
    uid = models.ForeignKey(User, on_delete=models.CASCADE)
    counsellorID = models.ForeignKey("Counsellor", db_column="counelloerID", on_delete=models.CASCADE)
    completed = models.BooleanField()

class Counsellor(models.Model):
    counsellorID = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=300)