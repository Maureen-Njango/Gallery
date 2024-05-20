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

  const deletebtn = document.createElement("button")
  deletebtn.textContent = 'Delete';
  deletebtn.classList.add('delete-btn')
  myImages.appendChild(deletebtn)
 
  let myImages = document.querySelector("images")
  myImages.addEventListener("click", function(e){
    if(e.target.className === 'close'|| e.target.id=== 'myImages'){
    myImages.computedStyleMap.display = 'none'
    }
  })







