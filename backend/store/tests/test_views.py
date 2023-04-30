from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from store.models import Product


class ProductListViewTestCase(APITestCase):
    def setUp(self):
        self.url = reverse("store:product_list")
        self.product1 = Product.objects.create(
            name="Product 1", description="Product 1 description", price=9.99, stock=100
        )
        self.product2 = Product.objects.create(
            name="Product 2", description="Product 2 description", price=19.99, stock=50
        )

    def test_product_list_view(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]["name"], self.product1.name)
        self.assertEqual(response.data[1]["name"], self.product2.name)
