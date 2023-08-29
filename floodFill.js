function setup() {
  createCanvas(7000, 1000);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(10);
}
  for (var i = 0; i < value.length; i++) {
  value[i] = new Array(10);
}
  clearGrid()
}
function clearGrid(){
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      grid[i][j]=0;
    value[i][j]=255;
    fill(value[i][j])
    rect((i+scaleX)* w, w * (j+scaleY), w,w);
  }
}
}
var isStartNode = false;
var isObstacle = false;
function ifRed(){
  var red=0;
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if(value[i][j] == "red"){
      red++;
      return 1;
    }
      }
}
return 0;
}
function startNode(){
  if(ifRed() === 0){
  isObstacle = false;
  isStartNode = true;
  }
}
function addObstacle(){
  if(ifRed() === 0){
  isObstacle = true;
  isStartNode = false;
  }
}
var floodNow = false;
var value = new Array(10);
  let w = 50;
  let scaleX= 8;
  let scaleY = 2;
  var grid = new Array(10);
  var x=-1;
  var y=-1;
function draw() {
}
function performFloodFill(image, i, j){
  isStartNode = false;
  isObstacle = false;
  if(x!==-1){
  floodFill(image,i,j);
}
}
function mouseClicked() {
    if(isStartNode === true || isObstacle === true){
     for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let xx = (i+scaleX) * w;
          let yy = w*(j+scaleY);
          if(mouseX >= xx && mouseX <= xx+w && mouseY >= yy 
           && mouseY <= yy+w){
            if(isStartNode === true){
              if(x!==-1 ){
                fill(255)
                rect((x+scaleX)*w, (y+scaleY)*w, w, w);
              }
              if(value[i][j]!==100){
                x=i;
                y=j;
                fill("blue")
                rect(xx, yy, w, w);
              }
            }else if(isObstacle === true){
            value[i][j]=100;
            grid[i][j]=-1;
            fill(value[i][j])
            rect(xx, yy, w, w);
            }
          }
      }
    }
    }
}
function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}
function floodFill(image, i, j){
  sleep(50).then(function() {

    if (i < 0 || j < 0 || i >= image.length || j >= image[i].length || image[i][j] === 1 ||image[i][j] === -1 )   {
      return;
    }
        let xx = (i+scaleX) * w;
        let yy = w*(j+scaleY);
        value[i][j] ="red"
        grid[i][j]=1
        fill(value[i][j])
        rect(xx, yy, w, w);
    floodFill(image, i + 1, j);
    floodFill(image, i - 1, j);
    floodFill(image, i, j + 1);
    floodFill(image, i, j - 1);
        })

}
