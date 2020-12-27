//variables
var ground;
var divisionHeight = 300;

//arrays
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  ground = new Ground(240,780,240,20);

  division1 = new Division(60,600,10,200);
  division2 = new Division(120,600,10,200);
  division3 = new Division(180,600,10,200);
  division4 = new Division(240,600,10,200);
  division5 = new Division(300,600,10,200);
  division6 = new Division(480,600,10,200);
    
}

function draw() {
  background(0); 

  for (var k = 0; k = k + 80){

    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

  }

  for (var j = 40; j <= width; j = j+50){

    plinkos.push(new Plinko(j,75));

  }

  for (var j = 15; j <= width-10; j = j+50){

    plinkos.push(new Plinko(j,175));

  }

  if(frameCount % 60 === 0){

    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));

  }



  ground.display();

  particles.display();

  plinkos.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  
  drawSprites();
}