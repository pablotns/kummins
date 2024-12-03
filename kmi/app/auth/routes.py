from flask import render_template, request, redirect, url_for, flash
from flask_login import login_user, logout_user, login_required
from . import auth
from ..models import User

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        # Búsqueda de usuario en el diccionario
        user = next((u for u in User.users.values() if u["username"] == username and u["password"] == password), None)
        
        if user:
            user_obj = User(user["id"], user["username"])
            login_user(user_obj)
            return redirect(url_for('profile.view_profile'))
        else:
            flash('Usuario o contraseña incorrectos')
    
    return render_template('login.html')

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

@auth.route('/register')
def register():
    # Lógica para la vista de registro
    return render_template('register.html')