// 1. get canvas element
const canvas = document.getElementById('example');
//get context and pass the context i want, in our case 2D
const ctx = canvas.getContext('2d');

//CANVAS grid
//x > origin is 0 0 on the top left
//y ^

//CANVAS shapes
//supports only 2 primitve shapes, rectangles and paths


/* FUNCTIONS for creating rectangle 
fillRect(x, y, width, height); //Draws a filled rectangle.
strokeRect(x, y, width, height); //Draws a rectangular outline.
clearRect(x, y, width, height); //Clears the specified rectangular area, making it fully transparent.
*/

// ****************************
// draw rectangle:
// ****************************

ctx.fillStyle = 'purple';
ctx.fillRect(260, 260, 30, 30);
//create border of rectangle
ctx.strokeRect(100, 100, 30, 30);
//clearing a section from the canvas
ctx.clearRect(270, 270, 30, 30);


//PATH = list of points/line
/*
beginPath(); // Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
closePath(); // Closes the path so that future drawing commands are once again directed to the context.
stroke(); // Draws the shape by stroking its outline.
fill(); // Draws a solid shape by filling the path's content area.
*/

// ****************************
// draw path:
// ****************************

ctx.beginPath()