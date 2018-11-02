from flask import jsonify, request

from backend import db
from backend.models import Kid

from .schema import kid_schema
from .forms import KidForm

def init(app):
    @app.route('/kids-add', methods=['PUT'])
    def put_kids():
        kid = Kid()
        form = KidForm.from_json(request.get_json())
        if form.validate():
            form.populate_obj(kid)
        else:
            raise ValueError(form.errors)
        db.session.add(kid)
        db.session.commit()
        return jsonify(kid_schema.dump(kid).data), 201

    @app.route('/kids')
    def get_kids():
        kids = Kid.query.all()
        return jsonify(kid_schema.dump(kids, many=True).data)

    @app.route('/kids/<int:id>')
    def get_kid(id):
        kid = Kid.query.get_or_404(id)
        return jsonify(kid_schema.dump(kid).data)

