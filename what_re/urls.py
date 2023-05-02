from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render

urlpatterns = [
    path("", lambda request: render(request, "index.html"), name="index"),
    path("admin/", admin.site.urls),
    path("api/store/", include(("store.urls", "store"), namespace="store")),
]

# serve static
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# serve media
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)