#!/usr/bin/env python3
""" Module containing model structre for app's databse information table"""
from vestoblog import db
from datetime import datetime
from werkzeug.security import generate_password_hash as gph
from werkzeug.security import check_password_hash as cph


class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)

    def __repr__(self):
        return str({
            "user_id": f'{self.user_id}',
            "post_id": f'{self.post_id}'
            })

    def is_favorited(self, user_id, post_id):
        """ checks if a post is favorited """
        return Favorite.query.filter_by(user_id, post_id).exists()


class User(db.Model):
    """ Model to create table/schema that'll hold a User's information """
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(65), index=True, nullable=False)
    lastname = db.Column(db.String(65), index=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    password = db.Column(db.String(250))
    role = db.Column(db.Enum("Admin", 'Regular'), nullable=False,
                     default='Regular')
    posts = db.relationship('Post', backref='author', lazy=True)
    comments = db.relationship('Comment', backref='commenter', lazy=True)
    #favorites = db.relationship('Post', secondary=Favorite,
    #                            backref=db.backref('favorited_by',
    #                                               lazy='dynamic'))

    def create_password_hash(self, password):
        """ Create a hash for the user's password """
        self.password = gph(password)

    def check_password_hash(self, password):
        """ Check to confirm password is same as hashed password """
        return cph(self.password, password)

    def __repr__(self):
        return str({
            "firstname": f'{self.firstname}',
            "email": f'{self.email}',
            "role": f'{self.role}',
            "id": f'{self.id}'
        })


class Post(db.Model):
    """ Model to create table/schema that'll hold a Posts information """
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), index=True, unique=True, nullable=False)
    content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.String(30), nullable=False,
                            default=datetime.utcnow)
    category = db.Column(db.String(60), nullable=False, index=True)
    admin_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                         nullable=False, index=True)
    comments = db.relationship('Comment', backref='post', lazy=True)
    #favorites = db.relationship('User', secondary=Favorite,
    #                            backref=db.backref('favorited_posts',
    #                                               lazy='dynamic'))

    def __repr__(self):
        return str({
            "title": f'{self.title}',
            "date posted": f'{self.date_posted}',
            "category": f'{self.category}',
            "author": f'{self.author.email}',
            "id": f'{self.id}'
        })


class Comment(db.Model):
    """ Model that defines a comment table """

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                        nullable=False, index=True)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'),
                        nullable=False, index=True)
    date_posted = db.Column(db.String(30), nullable=False,
                            default=datetime.utcnow)

    def __repr__(self):
        return str ({
            "content": f'{self.content}',
            "commenter id": f'{self.user_id}',
            "post id": f'{self.post_id}',
            "date-time": f'{self.date_posted}'
        })
