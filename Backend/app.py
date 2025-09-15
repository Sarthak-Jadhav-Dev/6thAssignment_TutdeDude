from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow cross-origin requests from frontend

@app.route('/')
def home():
    return "Flask backend is running!"

@app.route('/submit', methods=['POST'])
def submit():
    # Flask can handle both JSON and form data
    data = request.get_json() or request.form
    name = data.get('name')
    email = data.get('email')

    # simple processing (you can expand with DB, ML, etc.)
    response = {
        "status": "success",
        "message": f"Received data for {name}",
        "name": name,
        "email": email
    }
    return jsonify(response)

if __name__ == "__main__":
    # host=0.0.0.0 allows container access, port=5000 is default in Docker
    app.run(host="0.0.0.0", port=5000, debug=True)
