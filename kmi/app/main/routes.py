# app/main/routes.py
from flask import render_template
from . import main

@main.route('/')
def home():
    return render_template('home.html')
