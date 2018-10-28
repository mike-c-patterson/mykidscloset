from mykidscloset.models import Kid

def init(app):
    @app.route('/hello')
    def hello_word():
        raise ValueError(Kid.query.all())
        return 'hi'

