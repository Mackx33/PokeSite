(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("BOURGPALETTE1",
{ "height":9,
 "layers":[
        {
         "data":[9, 648, 33, 33, 44, 45, 33, 33, 33, 33, 33, 151, 9, 656, 135, 49, 52, 53, 41, 41, 22, 41, 41, 159, 9, 664, 91, 57, 60, 61, 10, 10, 6, 7, 8, 10, 9, 10, 2, 2, 2, 2, 647, 2, 14, 15, 16, 2, 9, 644, 645, 646, 68, 69, 54, 69, 71, 2, 2, 2, 9, 652, 653, 654, 84, 70, 655, 70, 87, 2, 2, 2, 9, 660, 661, 662, 84, 70, 663, 70, 87, 2, 2, 2, 9, 10, 2, 2, 92, 93, 93, 93, 95, 2, 2, 2, 9, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
         "height":9,
         "name":"Calque de Tile 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
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
         "image":"..\/Tileset12.BMP",
         "imageheight":1328,
         "imagewidth":128,
         "margin":0,
         "name":"Tileset12",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":664,
         "tileheight":16,
         "tilewidth":16
        }],
 "tilewidth":16,
 "version":1,
 "width":12
});