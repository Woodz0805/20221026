function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  textSize(40)
  text('x:'+mouseX+' y:'+mouseY,100,100)
  var micLevel=mic.getLevel();
  push()
    translate(width/2,height/2)
    fill('#fae1dd')
    ellipse(0,0,400)
    ellipse(0,0,100,50)
    fill(255)
    fill('#ffb3c1')
    ellipse(-25,0,20)//左鼻孔
    ellipse(25,0,20)//右鼻孔
    fill(255)

    ellipse(-75,-75,75)
    ellipse(+75,-75,75)

    fill(0)
    ellipse(-75+map(mouseX,0,width,-20,20),-75+map(mouseY,0,height,-20,20),20)
    ellipse(+75+map(mouseX,0,width,-20,20),-75+map(mouseY,0,height,-20,20),20)
    // if(mouseIsPressed)
    // {
    //   fill(255,0,0)
    //   arc(0,76,200,100,0,PI)
    // }
    // else
    // {
    //   fill('#fae1dd')
    // arc(0,75,200,50,0,PI)
    // }
    arc(0,75,200,75+micLevel*1000,0,180)
    console.log(micLevel)

    fill(255,0,0)
    arc(0,76,200,100,0,PI)
  
  pop()
}
