function draw(x, y) {
  //get canvas
  // use id "example" to get <canvas></canvas> tag
  const theCanvas = document.getElementById("example");

  //get context
  // capture 2d context where everything happens in canvas
  // context has all the methods for drawing things
  const ctx = theCanvas.getContext("2d");

  // clears whole canvas to simulate animation (==movement) 
  //of the rectangle
  ctx.clearRect(0, 0, 300, 300);
 
  // colors rectangle with this color
  ctx.fillStyle = 'green';

  // creates rectangle => ctx.fillRect(x, y, width, height);
  ctx.fillRect(x, 0, 50, 50);

  // changes position of X coordinate each time
  x += 3;
 
  // calls itself every 30ms
  //settimout and callback function is the draw function
  setTimeout(`draw(${x}, ${y})`, 30);

  //simulate an animation from left to right
}

//Image

const img = new Image(); // Create new <img> element
img.src = 'myImage.png'; // Set source path


/* DRAW IMAGE
drawImage(image, x, y)

Draws the CanvasImageSource specified by the 
image parameter at the coordinates (x, y).
*/

/*
SCALE IMAGE 

drawImage(image, x, y, width, height)

This adds the width and height parameters, which indicate the size to which to scale 
the image when drawing it onto the canvas.
*/

// javascripts/index.js

// create new image object
const fireballImg = new Image();

//used another image instead of a fireball
// "src" has to point as the image is used in HTML file
fireballImg.src = './images/image.png';

// set the start position of our image
let fireballX = 0;
let fireballY = 0;

function draw(x, y) {
  // use id "example" to get <canvas></canvas> tag
  const theCanvas = document.getElementById('example');

  // capture 2d context where everything happens in canvas
  // context has all the methods for drawing things
  const ctx = theCanvas.getContext('2d');

  // clears whole canvas to simulate animation (==movement) of the rectangle
  ctx.clearRect(0, 0, 300, 300);

  // ctx.drawImage(whichImage, x, y, width, height);
  ctx.drawImage(fireballImg, fireballX, fireballY, 50, 50);

  // // colors rectangle with this color
  // ctx.fillStyle = "green";

  // // creates rectangle => ctx.fillRect(x, y, width, height);
  // ctx.fillRect(x, 0, 50, 50);

  // changes position of X coordinate
  // x += 3;

  fireballX += 3;

  // calls itself every 30ms
  setTimeout(`draw(${x}, ${y})`, 30);
}
