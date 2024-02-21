""" For explanation and illustration purpose only,
    Do Not Run or Execute """

from vestoblog import db
from datetime import datetime


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(60), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    password_hash = db.Column(db.String(250), nullable=True)
    role = db.Column(db.Enum("Admin", 'Regular'), nullable=True,
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
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), index=True, unique=True, nullable=False)
    content = db.Column(db.Text, nullable=False)
    date_posted = db.Column(db.String(30), nullable=False,
                            default=datetime.utcnow)
    tag = db.Column(db.String(40), nullable=False, index=True)
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
