from rest_framework import serializers
from store.models import Product


class ProductSerializer(serializers.ModelSerializer):
    is_selected = serializers.SerializerMethodField()

    def get_is_selected(self, object):
        name = self.context['request'].query_params.get('name')

        return name in object.selectors
    class Meta:
        model = Product
        fields = "__all__"


class SelectProductSerializer(serializers.Serializer):
    name = serializers.CharField(required=True, write_only=True)

    def toggle_selectors(self, instance, selector: str) -> list:
        selectors: list = instance.selectors

        if selector in selectors:
            selectors.remove(selector)
        else:
            selectors.append(selector)
        
        return selectors

    def update(self, instance, validated_data):
        instance.selectors = self.toggle_selectors(instance, validated_data['name'])
        instance.save()
        return instance
