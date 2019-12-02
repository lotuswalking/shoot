// use esversion:6;
var tile_sheet = new Image();
var columns = 16;
var rows = 16;
var tile_size = 16;
var scale = 1;
var map =  [[1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1],
            [0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0],
            [0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1],
            [1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0],
            [0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0],
            [1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0],
            [1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1],
            [0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0],
            [1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
            [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]];
var context = document.querySelector("canvas").getContext("2d");
var buffer = document.createElement("canvas").getContext("2d");
tile_sheet.addEventListener("load", () => {
  loop();
});
tile_sheet.src = "shoot.png";
function loop() {
  window.requestAnimationFrame(loop);

  height = document.documentElement.clientHeight - 16;
  width = document.documentElement.clientWidth - 16;

  var min_size = height < width ? height : width;

  context.canvas.height = min_size;
  context.canvas.width = min_size;
  // Added this after the video was made
  context.imageSmoothingEnabled = true;
  buffer.canvas.width = tile_size*columns;
  buffer.canvas.height = tile_size*rows;
  scale = min_size / buffer.canvas.width;
  map.forEach((row,rowIndex) => {
      row.forEach((value,columnIndex) => {
       
        var tile_x =columnIndex * tile_size;
        var tile_y = rowIndex * tile_size;
        console.log(rowIndex,columnIndex,value);
        buffer.drawImage(
        tile_sheet,
        value * tile_size, 0,
        tile_size, tile_size,
        tile_x,tile_y,
        tile_size,tile_size
        );
    });
  });
  map.forEach((row) => {
      let tmp = row[0];
      row.shift();
      row.push(tmp);
  });
  console.log(buffer.canvas.width,buffer.canvas.height);
    context.drawImage(
        buffer.canvas, 
        0, 0, 
        buffer.canvas.width, buffer.canvas.height, 
        0, 0, 
        context.canvas.width, context.canvas.height);
  
}
