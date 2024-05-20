function addImage() {
    const imageUrl = document.getElementById('imageURL').value;
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        document.getElementById('gallery').appendChild(img);
        document.getElementById('imageURL').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid image URL.');
    }
  }






