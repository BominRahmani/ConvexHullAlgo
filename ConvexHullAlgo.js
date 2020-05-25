const pVec = [];
const hull = [];

let left;
let cVertex;
let nVertex;
let nextIndex = -1;
let index = 0;

function setup() {
createCanvas(500,500);
  //create buffer to make pVec stray away from edges of canvas
  let buffer = 15;
  for(let i = 0; i < 100; i++){
    pVec.push(createVector(random(buffer,width-buffer), random(buffer,height-buffer)));
  }
  //sort the pVec out first
  pVec.sort((a,b) => a.x - b.x);
  left = pVec[0];
  cVertex = left;
  hull.push(cVertex);
  nVertex = pVec[1];
  index = 2;

}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(8);
  for(let p of pVec){
   point(p.x,p.y);
  }
  stroke(255,0,0);
  beginShape();
  fill(255,0,0,50);
  for(let p of hull){
    vertex(p.x,p.y);
  }
  endShape(CLOSE);

  //animate left most point
  stroke(0,255,0);
  strokeWeight(12);
  point(left.x,left.y);

  //for cVertex
  stroke(200,255,0);
  strokeWeight(24);
  point(cVertex.x,cVertex.y);

  //to animate check with nVertex
  stroke(255,0,0);
  strokeWeight(4);
  line(cVertex.x,cVertex.y,nVertex.x,nVertex.y);

  //to animate check with checkpoint
  let checking = pVec[index];
  stroke(0,0,255);
  line(cVertex.x,cVertex.y,checking.x,checking.y);

  //find cross product of vectors
  const a = p5.Vector.sub(nVertex,cVertex);
  const b = p5.Vector.sub(checking,cVertex);
  const cross = a.cross(b);
  if(cross.z < 0){
    nVertex = checking;
    nextIndex = index;
  }
  index++;
  if(index == pVec.length){
    if(nVertex == left){
      console.log("done");
      noLoop();
    }
    else{
    //after all pVec searched add finalized next vertex into hull
    hull.push(nVertex);
    cVertex = nVertex;
    index = 0;
    nVertex = left;
  }
  }
}

  function divideConq(){
    //given a set of pVec split it up
    if(pVec.length <= 2){
      return;
    }
  }