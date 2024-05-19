// Get references to the image and delete button elements
const image = document.getElementById('images');
const btn = document.getElementById('btn-close');

// Add an event listener to the delete button
btn-close.addEventListener('click', function() {
    // Remove the image from the DOM
    image.remove();
    // Additional logic for deleting the image data or performing other actions can be added here
});