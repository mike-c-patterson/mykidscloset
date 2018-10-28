from flask import Flask
import os

from .models import db
from .routes import init_routes


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        SQLALCHEMY_DATABASE_URI='sqlite://instance/test.db'
    )
    db.init_app(app)

    app.config.from_pyfile('config.py', silent=True)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    init_routes(app)
    return app
