#!/usr/bin/env python3
""" Main point of entry to start flask app """
from vestoblog import app, db
from vestoblog.models import User, Post


@app.shell_context_processor
def make_shell_context():
    """ Function to define names for imported modules to flask shell """
    return {'db': db, 'User': User, 'Post': Post}


""" @app.app_context
def test_user():
    db.create_all
    db.session.add(new_user)
    db.session.commit() """


if __name__=="__main__":
    app.run(debug=True)
