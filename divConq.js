const points = [];
const hull = [];
let median;
function setup(){
createCanvas(500,500);
//populate vector with points
let buffer = 10;
for(let i = 0; i < 100; i++){
  points.push(createVector(random(buffer,width-buffer), random(buffer,height-buffer)));
  }
  //sort points first nlogn by x coordinate
  points.sort((i,j) => i.x - j.x);
  //point with median x coordinate (use median of median algorithm to make this O(N) time)
  if(points.length % 2 == 0){
     median = (points[(points.length/2 + points.length/2 - 1)/2]);
  }
  else {
    median = points[points.length/2];
  }
}

function draw(){
background(0);
stroke(255);
strokeWeight(3);
for(let i of points){
  point(i.x,i.y);
  }
  stroke(255,0,0);
  strokeWeight(5);
  point(median.x,median.y);

}

function divConq(){
  //sort points

}
