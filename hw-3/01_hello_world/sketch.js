function setup(){
  //creating new canvas
  createCanvas(800,400);
  //making background and specifying it as green
  background('green')
}

function draw(){
  //testing out what i know from java.
  //want to know how much overlap there is between p5 and my CSCI class.
  //system.out.println("Hello World");

//testing the text() method
textSize(32);
text("Hello World using text()", 20, 30);
//testing how multiple lines work.
//Do I need a break in the line?
//Does normal java shorthand work?
text("Hello World", 20, 60);
text("Hello World \t", 20, 80);
text("Hello World \b", 20, 100);
// conclusion, the shorhand does not work.
// I now realize this is displaying graphically.
// why are my words squishing??

}
