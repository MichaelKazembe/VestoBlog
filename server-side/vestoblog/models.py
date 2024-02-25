#!/usr/bin/env python3
""" Module containing model structre for app's databse information table"""
from vestoblog import db
from datetime import datetime


class User(db.Model):
    """ Model to create table/schema that'll hold a User's information """
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(60), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    role = db.Column(db.Enum("Admin", 'Regular'), nullable=False,
                     default='Regular')
    posts = db.relationship('Post', backref='author', lazy=True)


    def __repr__(self):
        return str({
            "username": f'{self.username}',
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



    def __repr__(self):
        return str({
            "title": f'{self.title}',
            "date posted": f'{self.date_posted}',
            "tag": f'{self.tag}',
            "author": f'{self.author.email}',
            "id": f'{self.id}'
        })
