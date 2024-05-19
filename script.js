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
  var closebtn = document.createElement("span");
closebtn.innerHTML = "&#215";

closebtn.style.position ="absolute";
closebtn.style.top ="10px";
closebtn.style.right ="10px";

var image =document.getElementById('img1')
image.appendChild(closebtn)
closebtn.addEventListener("click",function(){
    image.style.display = "none"
})