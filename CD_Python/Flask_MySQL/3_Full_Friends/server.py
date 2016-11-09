from flask import Flask, redirect, render_template, request, session, flash
import re

app = Flask(__name__)
app.secret_key = "ShhhhHhH, it's a secret!"

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/friends', methods=['POST'])
def create():
	pass

@app.route('/friends/<id>/edit')
def edit(id):
	pass

@app.route('/friends/<id>', methods=['POST'])
def update(id):
	pass

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
	pass
