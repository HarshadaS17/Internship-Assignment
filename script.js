
// JavaScript to toggle the visibility of the search column
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchColumn = document.querySelector('.search-column');
    searchColumn.style.display = searchColumn.style.display === 'none' || searchColumn.style.display === '' ? 'block' : 'none';
});





    // Play/Pause video functionality
    const playIcon = document.getElementById('playIcon');
    const videoElement = document.getElementById('videoElement');
    const videoPlaceholder = document.getElementById('videoPlaceholder');

    playIcon.addEventListener('click', function() {
        // Hide image and show video
        videoPlaceholder.style.display = 'none';
        videoElement.style.display = 'block';

        // Play the YouTube video (Note: autoplay query parameter added)
        const videoSrc = videoElement.src;
        videoElement.src = videoSrc + "?autoplay=1";

        // Change play icon to pause icon
        playIcon.innerHTML = '<i class="fas fa-pause-circle"></i>';

        // Toggle play/pause on click of the video itself
        videoElement.addEventListener('click', togglePlayPause);
    });

    function togglePlayPause() {
        // YouTube iframe API does not support direct play/pause via JavaScript like native videos
        // You can add the YouTube Player API for more advanced features (if needed)
    }








// Add interactivity for tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to the clicked tab
        tab.classList.add('active');
    });
});
