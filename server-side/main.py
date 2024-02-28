#!/usr/bin/env python3
from vestoblog import app, db
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from vestoblog.models import User, Post

with app.app_context():
    # Create a new user
    new_user = User(
            firstname='John',
            lastname='Doe',
            email='john@example.com',
            role='Regular'
                        )
    # Hash the password and set it
    new_user.create_password_hash('password123')
    # Add the user to the database session
    db.session.add(new_user)

    # Create a new post
    new_post = Post(
            title='First Post',
            content='This is the content of the first post.',
            category='General',
            author=new_user

            )
    # Add the post to the database session
    db.session.add(new_post)

    # Commit the changes to the database
    db.session.commit()
     # Close the session
    db.session.close()
