from django.urls import path
from store.views import ProductList

urlpatterns = [
    path('products/', ProductList.as_view(), name='product_list'),
]
