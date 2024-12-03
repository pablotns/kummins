from flask_login import UserMixin

class User(UserMixin):
    # Diccionario de usuarios en memoria
    users = {
        "1": {"id": "1", "username": "admin", "password": "admin123"},
        "2": {"id": "2", "username": "user", "password": "user123"},
        "3": {"id": "3", "username": "pablotns", "password": "local1234"},
    }
    
    def __init__(self, id, username):
        self.id = id
        self.username = username

    @classmethod
    def get(cls, user_id):
        user_data = cls.users.get(user_id)
        if user_data:
            return User(user_data["id"], user_data["username"])
        return None
