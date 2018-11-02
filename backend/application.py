from flask import Flask
from flask_cors import CORS
import wtforms_json
wtforms_json.init()

import os

from .models import db, migrate, ma
from .routes import init_routes


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        SQLALCHEMY_DATABASE_URI='sqlite:///mykidscloset.db',
        ALEMBIC_DATABASE_URI='sqlite:///mykidscloset/mykidscloset.db',
    )
    CORS(app)
    db.init_app(app)
    ma.init_app(app)
    app.config.from_pyfile('config.py', silent=True)
    migrate.init_app(app)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    init_routes(app)
    return app
