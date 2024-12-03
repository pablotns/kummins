from flask import render_template
from . import profile

@profile.route('/profile')
def view_profile():
    return render_template('profile.html')