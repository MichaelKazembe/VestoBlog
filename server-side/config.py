#!/usr/bin/env python3
import os
basedir = os.path.abspath(os.path.dirname(__file__))
#from dotenv import load_dotenv


#load_dotenv('.flaskenv')

class Config(object):
    """ Gets or sets values from env variables for flask app configuration"""
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db')
                            # os.environ.get('DATABASE_URL')
