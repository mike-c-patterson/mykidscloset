def init(app):
    @app.route('/hello')
    def hello_word():
        return 'hi'

