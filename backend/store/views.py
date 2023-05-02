from rest_framework import generics
from store.models import Product
from store.serializers import ProductSerializer, SelectProductSerializer
from rest_framework.response import Response
from rest_framework import status


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    search_fields = ["name"]


class SelectProductView(generics.GenericAPIView):
    serializer_class = SelectProductSerializer
    queryset = Product.objects.all()

    def post(self, request, *args, **kwargs):
        instance: Product = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.update(instance, serializer.validated_data)

        return Response(ProductSerializer(instance, context={'request': request}).data, status=status.HTTP_200_OK)