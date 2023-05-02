from django.urls import path
from store.views import ProductList, SelectProductView

urlpatterns = [
    path('products/', ProductList.as_view(), name='product_list'),
    path('products/<int:pk>/select/', SelectProductView.as_view(), name='select_product'),
]
