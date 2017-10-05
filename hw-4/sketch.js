function setup(){
  //william Wohlman
  //babba yagga's house.
  createCanvas(600,900);
}
function draw(){
  background('rgb(55, 97, 91)');

  push();
  translate(200,0);
  textAlign(CENTER);
  textSize(20);
  text("Babba Yagga's House", 0, 27);
  translate(-200,0);
  pop();
  //legs
  push();
  translate(300,450)

    push();
      translate(-300,-450);
      translate(335,480);
      rotate((23*PI)/12);
      fill('rgb(27, 34, 37)');
      rect(0,0,30,300);
    pop();

    push();
      translate(-300,-450);
      translate(245,480);
      rotate((PI)/12);
      fill('rgb(27, 34, 37)');
      rect(0,0,30,300);
    pop();

    push();
      translate(75,0);
      rotate(PI/16);
      fill('rgb(66, 69, 79)');
      ellipse(0,0,85,160);
    pop();

    push();
      translate(-75,0);
      rotate(100);
      fill('rgb(66, 69, 79)');
      ellipse(0,0,85,160);
    pop();
  pop();

  push();
    fill('rgb(66, 69, 79)');
    triangle(400, 770, 487, 780, 460, 740);
    triangle(200, 780, 113, 780, 140, 740);
  pop();

  //house base
  push();
  fill('rgb(106, 89, 63)');
  rect(112, 299, 375, 145);
  pop();

  //house extras
  push();
  //columns
  fill('rgb(134, 116, 81)');
  rect(120, 299, 27, 150);
  rect(452, 299, 27, 150);
  //roof
  fill('rgb(164, 158, 100)')
  quad(99,309,190,210,410,210,499,309)
  pop();

  //door
  push();
  //door frame
  fill('rgb(134, 116, 81)');
  rect(353, 313, 87, 135);
  //door
  fill('rgb(105, 69, 56)')
  rect(363, 323, 67, 115);
  //doorknob
  fill('rgb(161, 172, 179)');
  ellipse(423,386,10,10);
  pop();

  //windows

  push();

  fill('rgb(134, 116, 81)');
  //window frame 1
  rect(157,313,70,70);
  //window frame 2
  rect(257,313,70,70);

  //windows
    push();
    fill('rgb(233, 215, 54)');
    //window light 1
    rect(164,320,57,57);
    //window light 2
    rect(263,320,57,57);
    pop();


  //window horizontal bar1
  rect(164,339,57,4);
  //window horizontal bar1
  rect(263,339,57,4);
  //window vertical bar1
  rect(191,320,4,57);
  //window vertical bar1
  rect(290,320,4,57);
  pop();

  //Chimney
  push();
  translate(300,372);
  fill('rgb(166, 160, 138)')
  rect(-20,-212,40,50 );
  rect(-25,-212,50,10);
  pop();




}
