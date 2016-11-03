from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)

app.secret_key = 'ShhhhHhh,ItsaSecret!'

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
	if len(request.form['name']) < 1 or len(request.form['comment']) < 1:
		flash('** Please fill in all fields **')
		return redirect('/')
	elif len(request.form['comment']) > 120:
		flash('** Comment too long, please use less than 120 characters! **')
		return redirect('/')
	else:
		return render_template('result.html', name = request.form['name'], location = request.form['location'], language = request.form['language'], comment = request.form['comment'])

app.run(debug=True)
