const points = [];
const hull = [];

let left;
let currentVertex;
let nextVertex;
let nextIndex = -1;
let index = 0;

function setup() {
createCanvas(500,500);
  //create buffer to make points stray away from edges of canvas
  let buffer = 15;
  for(let i = 0; i < 100; i++){
    points.push(createVector(random(buffer,width-buffer), random(buffer,height-buffer)));
  }
  //sort the points out first
  points.sort((a,b) => a.x - b.x);
  left = points[0];
  currentVertex = left;
  hull.push(currentVertex);
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
  stroke(255,0,0);
  beginShape();
  fill(255,0,0,50);
  for(let p of hull){
    vertex(p.x,p.y)
  }
  endShape(CLOSE);

  //animate left most point
  stroke(0,255,0);
  strokeWeight(12);
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

  //find cross product of vectors
  const a = p5.Vector.sub(nextVertex,currentVertex);
  const b = p5.Vector.sub(checking,currentVertex);
  const cross = a.cross(b);
  if(cross.z < 0){
    nextVertex = checking;
    nextIndex = index;
  }
  index++;
  if(index == points.length){
    if(nextVertex == left){
      console.log("done");
      noLoop();
    }
    else{
    //after all points searched add finalized next vertex into hull
    hull.push(nextVertex);
    currentVertex = nextVertex;
    index = 0;
    //points.splice(nextIndex,1);
    nextVertex = left;
  }
  }
}

  function divideConq(){
    //given a set of points split it up
    if(points.length <= 2){
      return;
    }
  }
