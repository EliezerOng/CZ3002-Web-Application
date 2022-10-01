from django.contrib import admin
from . import models
# Register your models here.

class AppointmentAdmin(admin.ModelAdmin):
    readonly_fields = (id,)

class CounsellorAdmin(admin.ModelAdmin):
    readonly_fields = (id,)


admin.site.register(models.Appointment, AppointmentAdmin)
admin.site.register(models.Counsellor, CounsellorAdmin)