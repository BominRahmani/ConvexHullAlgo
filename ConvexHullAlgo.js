const points = [];
const hull = [];

let left;
let currentVertex;
let nextVertex;
let index = 0;

function setup() {
createCanvas(500,500);
  for(let i = 0; i < 10; i++){
    points.push(createVector(random(width), random(height)));
  }
  //sort the points out first
  points.sort((a,b) => a.x - b.x);
  left = points[0];
  currentVertex = left;
  nextVertex = points[1];
  index = 2;

}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(8);
  for(let p of points){
   point(p.x,p.y);
  }
  stroke(0,255,0);
  strokeWeight(24);
  point(left.x,left.y);
  //for currentVertex
  stroke(200,255,0);
  strokeWeight(24);
  point(currentVertex.x,currentVertex.y)

  //to animate check with nextVertex
  stroke(255,0,0);
  strokeWeight(4);
  line(currentVertex.x,currentVertex.y,nextVertex.x,nextVertex.y);

  //to animate check with checkpoint
  let checking = points[index];
  stroke(0,0,255);
  line(currentVertex.x,currentVertex.y,checking.x,checking.y);

}
