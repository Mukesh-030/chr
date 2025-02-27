document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('videoElement');

    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Attach the video stream to the video element
                video.srcObject = stream;
            })
            .catch(function(error) {
                console.error("Error accessing the camera: ", error);
            });
    } else {
        alert("getUserMedia is not supported by your browser.");
    }
});
