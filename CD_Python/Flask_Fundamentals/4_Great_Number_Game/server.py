from flask import Flask, request, redirect, session, render_template
import random
app = Flask(__name__)

app.secret_key = 'ShhhhItsSecret'

@app.route('/')

def index():
    try:
        session['counter'] += 1
    except KeyError:
        session['counter'] = 1
    if session['counter'] == 1:
        session['rando'] = random.randrange(1, 101)
    print(session['rando'])
    return render_template('index.html')

@app.route('/guess', methods=['POST'])

def guess():
    session['guess'] = request.form['guess']
    return redirect('/')

@app.route('/reset')

def restart():
    session['counter'] = 0
    return redirect('/')

app.run(debug=True)
