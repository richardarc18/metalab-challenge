function setup() {
  createCanvas(1000,800);
  noStroke();
}

function draw() {
  var xPos = [0, 400, 600, 800, 900, 900, 0, 50, 100, 150, 200, 600, 0, 400, 0, 200, 500, 550, 600, 650, 700, 750, 800, 500, 500, 500, 0, 100, 500, 800, 0, 100, 0, 400, 800, 850, 900, 950, 400, 600, 50, 150, 300, 400, 550, 675, 200, 450, 200, 450, 300];
  var yPos = [0, 0, 0, 0, 0, 100, 200, 200, 200, 200, 200, 200, 250, 250, 300, 300, 300, 300, 300, 300, 300, 300, 300, 350, 400, 450, 500, 500, 500, 500, 600, 600, 700, 700, 700, 700, 700, 700, 750, 750, 75, 75, 75, 0, 150, 75, 300, 300, 650, 650, 450];
  
  var fillColor = ["#4B8EE1", "#F7E621", "#D6D6D6", "#CC172A", "#50E2C0", "#4B4B4B", "#CE0820", "#F7E621", "#CE0820", "#F7E621", "#BB17DF", "#8E19FD", "#F4A427", "#42740D", "#4B4B4B", "#CE1430", "#7DD126", "FFFFFF", "#7DD126", "FFFFFF", "#7DD126", "FFFFFF", "#4B4B4B", "#D6D6D6", "#42740D", "#D6D6D6", "#F7E621", "#F4A427", "#50E2C0", "#D6D6D6", "#F4A427", "#D6D6D6", "#8E19FD", "#BB17DF", "#F7E621", "#CE0820", "#F7E621", "#CE0820", "#42740D", "#F4A427", "#4B4B4B", "#4B4B4B", "#4B4B4B", "#4B4B4B", "#4B4B4B", "#4B4B4B", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
  
  var rectLength = [400, 200, 200, 100, 100, 100, 50, 50, 50, 50, 400, 400, 400, 200, 200, 300, 50, 50, 50, 50, 50, 50, 200, 300, 300, 300, 100, 100, 300, 200, 100, 100, 400, 400, 50, 50, 50, 50, 200, 400, 50, 100, 50, 50, 50, 50, 50, 50, 50, 50, 100];
  var rectWidth = [200, 200, 200, 200, 100, 100, 50, 50, 50, 50, 50, 100, 50, 50, 200, 400, 50, 50, 50, 50, 50, 50, 200, 50, 50, 50, 100, 100, 200, 200, 100, 100, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 100];
  
  
  /*console.log(xPos.length);
  console.log(yPos.length);
  console.log(fillColor.length); //Debugger code
  console.log(rectLength.length);
  console.log(rectWidth.length);*/
  
  for(i = 0; i < xPos.length; i++){
    fill(fillColor[i]);
    rect(xPos[i], yPos[i], rectLength[i], rectWidth[i]);
  }
  
  
}