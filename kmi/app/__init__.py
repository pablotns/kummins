from flask import Flask
from flask_login import LoginManager
from .auth import auth as auth_blueprint
from .tasks import tasks as tasks_blueprint
from .profile import profile as profile_blueprint
from .models import User
from .main import main as main_blueprint
from .menu import menu as menu_blueprint
from .dash import dash as dash_blueprint


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_secret_key'

    # Configuración de Flask-Login
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    # Registrar la función user_loader
    @login_manager.user_loader
    def load_user(user_id):
        return User.get(user_id)

    # Registrar los Blueprints
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    app.register_blueprint(tasks_blueprint, url_prefix='/tasks')
    app.register_blueprint(profile_blueprint, url_prefix='/profile')
    app.register_blueprint(menu_blueprint, url_prefix='/menu')
    app.register_blueprint(dash_blueprint, url_prefix='/dash')
    app.register_blueprint(main_blueprint)

    return app