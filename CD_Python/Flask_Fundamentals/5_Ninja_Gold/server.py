from flask import Flask, redirect, request, render_template, session
import random
app = Flask(__name__)

app.secret_key = 'ShhhhItsSecret'

@app.route('/')
def gameView():
    return render_template('index.html')

app.run(debug=True)
