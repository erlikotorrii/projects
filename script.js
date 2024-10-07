const images = [
  'img/image1.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image4.jpg',
];

// exercise 1 and 2
let imageIndex = 0;
const imageDisplay = document.getElementById('imageDisplay');
const buttons = document.querySelectorAll('.buttons .btn');

function displayImages(){
  imageDisplay.src = images[imageIndex];
}

displayImages();

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    if (i === 0 && imageIndex > 0) {
      imageIndex--;
      displayImages();
    } else if (i === 1 && imageIndex < images.length - 1) {
      imageIndex++;
      displayImages();
    }
  });
}


// exercise 3
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft' && imageIndex > 0) {
    imageIndex--;
    displayImages();
  } else if (e.key === 'ArrowRight' && imageIndex < images.length - 1) {
    imageIndex++;
    displayImages();
  }
});

