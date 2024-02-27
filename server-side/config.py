#!/usr/bin env python3
""" Configurations"""
import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    """ Gets or sets values from env variables for flask app configuration"""
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'database.db')
