import factory
from store.models import Product
from django.test import TestCase


class ProductFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Product

    name = factory.Faker("word")
    description = factory.Faker("paragraph")
    price = factory.Faker("pydecimal", left_digits=5, right_digits=2, positive=True)
    stock = factory.Faker("pyint", min_value=0, max_value=100)


class ProductTestCase(TestCase):
    def setUp(self):
        self.product = Product.objects.create(
            name="Test Product", description="Test Description", price=10.99, stock=100
        )

    def test_product_str(self):
        self.assertEqual(str(self.product), "Test Product")

    def test_product_name(self):
        self.assertEqual(self.product.name, "Test Product")

    def test_product_description(self):
        self.assertEqual(self.product.description, "Test Description")

    def test_product_price(self):
        self.assertEqual(self.product.price, 10.99)

    def test_product_stock(self):
        self.assertEqual(self.product.stock, 100)
