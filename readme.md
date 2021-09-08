https://lotuswalking.github.io/NewTonpendulum/

this code is for a test for read part of a picture and write to canvas
1. shoot.png is made for 5 16x16 pictures
2. use buffer.drawImage(
        tile_sheet,  //image to be draw
        value * tile_size, 0, //source picture left point
        tile_size, tile_size,  //width,height of the source picture
        tile_x,tile_y,         //localtion of destnation picture to be draw to(leftTop Point)
        tile_size,tile_size    //width,height to be draw, if src and Dest diffrence, it's will be fit the dest size
        );
3. it's also using buffer to write data to new canvas, buffer is a canvas in memroy.
4. array could you shift to remove first value, and push to the end of picture to make move effective
