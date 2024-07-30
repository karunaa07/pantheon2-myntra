# app.py
from flask import Flask, request, jsonify
import cv2
import numpy as np

app = Flask(__name__)

@app.route('/process_image', methods=['POST'])
def process_image():
    # Get image from request
    file = request.files['image'].read()
    npimg = np.fromstring(file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    # Process image (example: convert to grayscale)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Encode image back to base64
    _, buffer = cv2.imencode('.jpg', gray)
    processed_image = buffer.tobytes()

    return jsonify({'processed_image': processed_image.decode('latin1')})

if __name__ == '__main__':
    app.run(debug=True)
