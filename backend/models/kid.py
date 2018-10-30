from . import db

class Kid(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    birth_ts = db.Column(db.DateTime)
