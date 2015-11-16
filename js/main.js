 var valueA;
 var valueB;



 function setup() {
     var cnv = createCanvas(1000, 1000);
     cnv.parent("Pattern");




     valueA = "black";

     valueB = "white";
     myPattern();
 }


function myPattern(){
    var x = 0;
     var y = 0;
     var colWidth = 200;
     var rowHeight = 200;





     for (var i = 0; i < 100; i++) {
         drawPattern(x, y)
         x += 200;
         // width = width of the canvas
         if (x > width) {
             x = 0;
             y += rowHeight;
         }
     }
}





 function drawPattern(x, y) {
     console.log('valuea',valueA);


     //top triangle
     fill(color(valueA));
     noStroke();
     triangle(x, y, x + 200, y, x + 100, y + 100);

     fill(color(valueB));
     noStroke();
     triangle(x + 40, y, x + 160, y, x + 100, y + 60);

     fill(color(valueA));
     noStroke();
     triangle(x + 80, y, x + 120, y, x + 100, y + 20);

     //left triangle
     fill(color(valueB));
     noStroke();
     triangle(x, y, x, y + 200, x + 100, y + 100);

     fill(color(valueA));
     noStroke();
     triangle(x, y + 40, x, y + 160, x + 60, y + 100);

     fill(color(valueB));
     noStroke();
     triangle(x, y + 80, x, y + 120, x + 20, y + 100);



     //bottom triangle
     fill(color(valueA));
     noStroke();
     triangle(x, y + 200, x + 200, y + 200, x + 100, y + 100);

     fill(color(valueB));
     noStroke();
     triangle(x + 40, y + 200, x + 160, y + 200, x + 100, y + 140);

     fill(color(valueA));
     noStroke();
     triangle(x + 80, y + 200, x + 120, y + 200, x + 100, y + 180);




     //right triangle
     fill(color(valueB));
     noStroke();
     triangle(x + 200, y, x + 200, y + 200, x + 100, y + 100);

     fill(color(valueA));
     noStroke();
     triangle(x + 200, y + 40, x + 200, y + 160, x + 140, y + 100);

     fill(color(valueB));
     noStroke();
     triangle(x + 200, y + 80, x + 200, y + 120, x + 180, y + 100);


 }

 function mousePressed() {
// console.log("valueA", valueA);
//     console.log("valueB", valueB);
     if (valueA === 'black') {
//         console.log("black");
         valueA = 'white';

         valueB = 'black';
     } else {
//         console.log("white");
         valueA = 'black';
         valueB = 'white';
     }
//      console.log("valueA", valueA);
//     console.log("valueB", valueB);

     myPattern();
     //    valueA = color('red');
     //    valueB = color('black');

//     console.log("mousePressed");


 }









