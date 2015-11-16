 var valueA;
 var valueB;



 function setup() {
     var cnv = createCanvas(1000, 1000);
     cnv.parent("Pattern");

     //draw a window
     //drawPattern(0,0,200,0,100,100);

//     valueA = color('black');
     valueA = "black";
//     valueB = color('white');
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


function ClickablePattern(){


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









 //    function drawPattern(startX1,startY1,startX2,startY2,startX3,startY3){
 //
 //    //top triangle
 //    fill('black');
 //    noStroke();
 //    triangle(startX1,startY1,startX2+200,startY2,startX3+100,startY3+100);
 //
 //    fill('white');
 //    noStroke();
 //    triangle(startX1+40,startY1,startX2-40,startY2,startX3,startY3-40);
 //
 //    fill('black');
 //    noStroke();
 //    triangle(startX1+80,startY1,startX2-80,startY2,startX3,startY3-80);
 //
 //    //left triangle
 //   fill('white');
 //   noStroke();
 //    triangle(startX1,startY1,startX2-200,startY2+200,startX3,startY3);
 //
 //    fill('black');
 //    noStroke();
 //    triangle(startX1,startY1+40,startX2-200,startY2+160,startX3-40,startY3);
 //
 //     fill('white');
 //   noStroke();
 //    triangle(startX1,startY1+80,startX2-200,startY2+120,startX3-80,startY3);
 //
 //
 //
 //    //bottom triangle
 //    fill('black');
 //    noStroke();
 //    triangle(startX1,startY1+200,startX2,startY2+200,startX3,startY3);
 //
 //    fill('white');
 //    noStroke();
 //    triangle(startX1+40,startY1+200,startX2-40,startY2+200,startX3,startY3+40);
 //
 //    fill('black');
 //    noStroke();
 //    triangle(startX1+80,startY1+200,startX2-80,startY2+200,startX3,startY3+80);
 //
 //
 //
 //
 //    //right triangle
 //     fill('white');
 //   noStroke();
 //    triangle(startX1+200,startY1,startX2,startY2+200,startX3,startY3);
 //
 //    fill('black');
 //   noStroke();
 //    triangle(startX1+200,startY1+40,startX2,startY2+160,startX3+40,startY3);
 //
 //    fill('white');
 //   noStroke();
 //    triangle(startX1+200,startY1+80,startX2,startY2+120,startX3+80,startY3);
 //
 //
 //}
