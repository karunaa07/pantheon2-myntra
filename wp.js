document.addEventListener("DOMContentLoaded", function() {
    const imageLink = 'https://drive.google.com/file/d/1x7oJmj5cT6JMKWrdMZzZS0F_i8FhzBZ1/view?usp=sharing';
    const messageText = encodeURIComponent(`Hello, how can I help you? Here's an image: ${imageLink}`);
    const whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.href = `https://wa.me/919326492515?text=${messageText}`;
  
    const cameraCapture = document.getElementById('camera-capture');
    
    // Function to start the webcam stream and display it in the #camera-capture div
    function startCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          const video = document.createElement('video');
          video.srcObject = stream;
          video.play();
          video.style.width = '100%';
          video.style.height = '100%';
          cameraCapture.appendChild(video);
        });
      }
    }
  
    startCamera();
  });
  