document.addEventListener('DOMContentLoaded', async () => {
    const video = document.getElementById('webcam');
    const screenshotButton = document.getElementById('screenshot-button');
    const screenshotResult = document.getElementById('screenshot-result');
    const overlay = document.getElementById('overlay');
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    // Load face-api.js models
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');

    // Access the webcam
    navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => {
            video.srcObject = stream;
            video.play();
        })
        .catch(error => {
            console.error('Error accessing webcam:', error);
        });

    video.addEventListener('play', () => {
        overlay.width = video.width;
        overlay.height = video.height;
        detectFaceLandmarks();
    });

    async function detectFaceLandmarks() {
        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(overlay, displaySize);

        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            overlay.getContext('2d').clearRect(0, 0, overlay.width, overlay.height);
            faceapi.draw.drawFaceLandmarks(overlay, resizedDetections);
        }, 100);
    }

    screenshotButton.addEventListener('click', () => {
        // Create a canvas to draw the video frame
        const captureCanvas = document.createElement('canvas');
        captureCanvas.width = video.videoWidth;
        captureCanvas.height = video.videoHeight;
        const captureContext = captureCanvas.getContext('2d');

        // Draw the video frame to the canvas
        captureContext.drawImage(video, 0, 0, captureCanvas.width, captureCanvas.height);

        // Display the screenshot
        screenshotResult.innerHTML = '';
        screenshotResult.appendChild(captureCanvas);
    });
});
