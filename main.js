/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

//Palette colors=======
const colorPalette = document.querySelector(".palette");

//Brush element query  ========
const paintBrush = document.querySelector(".current-brush");

//Squares element==============
const canvasSquare = document.querySelector(".canvas");
/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/



colorPalette.addEventListener("click", onClick);
canvasSquare.addEventListener("click", onClick2);
function onClick(event) {
  const colorChange = event.target.classList[1];

  
  if (paintBrush.classList[1] ==="color-2") {
    paintBrush.classList.remove('color-2');
    paintBrush.classList.add(colorChange);
  } else if (paintBrush.classList[1] ==="color-1") {
    paintBrush.classList.remove('color-1');
    paintBrush.classList.add(colorChange);
  } else if (paintBrush.classList[1]==="color-3") {
    paintBrush.classList.remove("color-3");
    paintBrush.classList.add(colorChange);
  } else if (paintBrush.classList[1]==="color-4") {
    paintBrush.classList.remove("color-4");
    paintBrush.classList.add(colorChange);
  } else if (paintBrush.classList[1]==="color-5") {
    paintBrush.classList.remove("color-5");
    paintBrush.classList.add(colorChange);
  }console.log(paintBrush)
}
  function onClick2(event){

const canvasChange = event.target.classList[1]
   // if(canvasChange === "color-5"){
    canvasSquare.classList.remove(canvasChange)
    canvasSquare.classList.add(paintBrush)
    //canvasChange.classList.add(paintBrush)
   // }

console.log(canvasChange)
console.log(paintBrush)
  }

  //paintBrush.push(event.target.classList[1])

//====================================================



  //console.log(event.target.classList[1])
  //console.log(paintBrush)













  //paintBrush.classList.remove('selected');
  //console.log(paintBrush)
  //console.log(colorPalette)










// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
