#!/usr/bin/env python

import sys
import json
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def log_data():
	try:
		data = request.json
		print(json.dumps(data, indent=4))
		if 'bot' in data:
			return "console.log('hello');"
		return json.dumps(
			data,
			indent=4
		), 200, {'Content-Type': 'application/json'}
	except Exception as e:
		return json.dumps(
			{
				'error': 'invalid request'
			},
			indent=4
		), 500, {'Content-Type': 'text/html'}

if __name__ == "__main__":
	app.run(debug=True, port=80)
