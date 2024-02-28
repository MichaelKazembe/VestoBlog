#!/usr/bin/env python3
import os
from dotenv import load_dotenv
from datetime import timedelta


basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))

class Config(object):
    """ Gets or sets values from env variables for flask app configuration"""

    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db')
                            # os.environ.get('DATABASE_URL')
    JWT_TOKEN_LOCATION = ['cookies']
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY")
    JWT_COOKIE_SECURE = True
    JWT_CSRF_CHECK_FORM = True
