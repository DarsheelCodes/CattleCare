from flask import Flask, url_for, render_template, request, redirect, jsonify

app = Flask(__name__)
application = app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Products')
def products():
    return render_template('product.html')

@app.route('/form', methods=['POST'])
def form():
    temp = float(request.json['temp'])
    rate = float(request.json['rate'])
    sp = float(request.json['sp'])

    # Define optimal ranges
    temp_optimal = temp <= 39.2 and temp >=38.6
    rate_optimal = rate <= 84 and rate>=48
    sp_optimal = sp <= 100 and sp>=95  # Adjust the range based on what 'sp' represents

    # Create response message based on conditions
    response_message = {
        "temperature": "Optimal Temperature" if temp_optimal else "Not Optimal Temperature",
        "rate": "Optimal Heart Rate" if rate_optimal else "Not Optimal Heart Rate",
        "sp": "Optimal Blood Saturation" if sp_optimal else "Not Optimal Blood Saturation"
    }

    # Return response as JSON
    return jsonify(response_message)

if __name__ == "__main__":
    app.run(debug=True)
