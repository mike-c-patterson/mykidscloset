from backend.models import ma
from backend.models.kid import Kid

class KidSchema(ma.ModelSchema):
    class Meta:
        model = Kid
kid_schema = KidSchema()