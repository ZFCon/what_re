from django.contrib import admin
from django.urls import path, include
from django.shortcuts import render

urlpatterns = [
    path("", lambda request: render(request, "index.html"), name="index"),
    path("admin/", admin.site.urls),
    path("api/store/", include(("store.urls", "store"), namespace="store")),
]