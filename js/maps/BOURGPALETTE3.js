(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("BOURGPALETTE3",
{ "height":14,
 "layers":[
        {
         "data":[670, 110, 110, 111, 110, 110, 654, 654, 153, 108, 109, 108, 109, 686, 679, 118, 119, 655, 656, 662, 662, 161, 116, 117, 116, 117, 694, 695, 646, 647, 646, 647, 642, 642, 642, 644, 645, 644, 645, 672, 676, 677, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 672, 684, 685, 650, 650, 650, 650, 650, 681, 682, 683, 650, 650, 649, 692, 693, 650, 650, 650, 650, 650, 689, 690, 691, 650, 650, 649, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 699, 652, 653, 652, 653, 650, 650, 650, 652, 653, 652, 653, 653, 116, 116, 117, 116, 117, 650, 650, 650, 116, 117, 116, 117, 117, 648, 644, 645, 644, 645, 650, 650, 650, 644, 645, 644, 645, 645, 649, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 660, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 650, 661, 668, 650, 650, 650, 650, 657, 658, 659, 650, 650, 650, 650, 669, 9, 9, 9, 9, 9, 145, 146, 147, 9, 9, 9, 9, 9],
         "height":14,
         "name":"Calque de Tile 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":13,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "image":"..\/Tileset11.BMP",
         "imageheight":1632,
         "imagewidth":128,
         "margin":0,
         "name":"Tileset11",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":816,
         "tileheight":16,
         "tilewidth":16
        }],
 "tilewidth":16,
 "version":1,
 "width":13
});