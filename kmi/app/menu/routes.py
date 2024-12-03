# app/menu/routes.py
from flask import render_template
from . import menu

@menu.route('/menu')
def menu():
    return render_template('menu.html')
