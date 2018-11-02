from wtforms_alchemy import ModelForm

from backend.models import Kid

class KidForm(ModelForm):
    class Meta:
        model = Kid
        only = ['name', 'birth_ts']
