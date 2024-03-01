#!/usr/bin/env python3
""" Main point of entry to start flask app """
from vestoblog import app, db
from vestoblog.models import User, Post, Comment


@app.shell_context_processor
def make_shell_context():
    """ Function to define names for imported modules to flask shell """
    return {'db': db, 'User': User, 'Post': Post, 'Comment': Comment}


if __name__ == "__main__":
    app.run(debug=True)
