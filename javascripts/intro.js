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

/*
Moving the pen
One very useful function, which doesn’t actually draw anything but becomes part of the path list described above, is the moveTo() function. You can probably best think of this as lifting a pen
or pencil from one spot on a piece of paper and placing it on the next.
Method:
moveTo(x, y); // Moves the pen to the coordinates specified by x and y.
*/

/*
LINE DRAWING
For drawing straight lines, use the lineTo() method.
lineTo(x, y); // Draws a line from the current drawing position to the position specified by x and y.
*/


// ****************************
// draw path
// ****************************

// start the path
ctx.beginPath();
// starting position is x=50, y=50
ctx.moveTo(50, 50);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50);

// .stroke() executes the drawing
ctx.stroke();

// start a new line from these coordinates: x=250, y=50
ctx.moveTo(250, 50);
// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 100);
// .stroke() executes the drawing
ctx.stroke();

// close the path
ctx.closePath();



/*
// ****************************
// fill()
// ****************************
When you call fill(), any open shapes are closed automatically, so you don’t have to call closePath().
This is not the case when you call stroke().

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
*/



/*ARCS

arc(x, y, radius, startAngle, endAngle, anticlockwise);
// Draws an arc which is centered at (x, y) position with
// radius starting at startAngle and ending at endAngle going
// in the given direction indicated by anticlockwise (defaulting to clockwise).
arcTo(x1, y1, x2, y2, radius);
// Draws an arc with the given control points and radius,
// connected to the previous point by a straight line.

*/

ctx.beginPath();
// Math.PI * 2 = 360 = full circle
ctx.arc(150, 170, 75, 0, Math.PI * 2);
ctx.lineWidth = 20;
ctx.strokeStyle = "green";
ctx.stroke();
ctx.endPath();