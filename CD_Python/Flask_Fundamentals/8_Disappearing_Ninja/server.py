from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)

app.secret_key = "ShHhHHhhh, it's a Secret!"

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/ninja')
def ninja():
	session['pages'] = {
	'ninja' : {'name' : 'TMNT', 'img' : '../static/images/tmnt.jpg'},
	'purple' : {'name' : 'Donatello', 'img' : '../static/images/donatello.jpg'},
	'orange' : {'name' : 'Michaelangelo', 'img' : '../static/images/michaelangelo.jpg'},
	'red' : {'name' : 'Raphael', 'img' : '../static/images/raphael.jpeg'},
	'blue' : {'name' : 'Leonardo', 'img' : '../static/images/leonard.jpg'},
	'april' : {'name' : "April O'Neil", 'img' : '../static/images/Megan-Fox.jpg'},
	}
	session['name'] = session['pages']['ninja']['name']
	session['pic'] = session['pages']['ninja']['img']
	return render_template('ninja.html')

@app.route('/ninja/<color>')
def indiv(color):
	if color in ('purple', 'orange', 'red', 'blue'):
		session['name'] = session['pages'][color]['name']
		session['pic'] = session['pages'][color]['img']
	else:
		session['name'] = session['pages']['april']['name']
		session['pic'] = session['pages']['april']['img']
	return render_template('ninja.html')

app.run(debug=True)
