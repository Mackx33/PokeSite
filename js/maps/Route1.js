(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("Route1",
{ "height":40,
 "layers":[
        {
         "data":[31, 32, 31, 32, 31, 32, 31, 32, 31, 32, 220, 221, 221, 222, 31, 32, 31, 32, 31, 32, 31, 32, 31, 32, 23, 24, 39, 40, 39, 40, 39, 40, 39, 40, 220, 221, 221, 222, 39, 40, 39, 40, 39, 40, 39, 40, 23, 24, 31, 32, 2, 2, 2, 2, 2, 2, 2, 2, 220, 221, 221, 222, 2, 2, 2, 2, 2, 18, 2, 18, 31, 32, 23, 24, 2, 2, 2, 2, 2, 2, 15, 16, 220, 221, 221, 260, 213, 213, 213, 213, 213, 213, 213, 214, 23, 24, 31, 32, 10, 10, 10, 10, 10, 10, 31, 32, 228, 229, 229, 229, 229, 229, 229, 229, 261, 221, 221, 222, 31, 32, 23, 24, 177, 136, 136, 136, 136, 178, 23, 24, 177, 136, 136, 136, 136, 178, 2, 2, 228, 229, 229, 230, 23, 24, 31, 32, 10, 18, 10, 10, 10, 18, 31, 32, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 31, 32, 23, 24, 18, 10, 10, 10, 18, 10, 23, 24, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 23, 24, 31, 32, 10, 18, 10, 10, 10, 18, 31, 32, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 31, 32, 23, 24, 18, 10, 10, 10, 18, 10, 23, 24, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 23, 24, 31, 32, 177, 136, 136, 136, 136, 178, 31, 32, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 31, 32, 23, 24, 10, 18, 10, 10, 10, 10, 39, 40, 9, 9, 9, 212, 213, 213, 213, 213, 213, 213, 213, 214, 23, 24, 31, 32, 18, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 220, 221, 262, 229, 229, 229, 229, 229, 230, 31, 32, 23, 24, 10, 18, 17, 17, 17, 17, 17, 17, 10, 10, 10, 228, 229, 230, 14, 14, 14, 14, 14, 14, 23, 24, 31, 32, 15, 16, 9, 9, 9, 9, 9, 9, 15, 16, 15, 16, 15, 16, 14, 14, 14, 14, 14, 14, 31, 32, 23, 24, 31, 32, 177, 136, 136, 136, 136, 178, 31, 32, 31, 32, 31, 32, 14, 14, 14, 14, 14, 14, 23, 24, 31, 32, 39, 40, 9, 9, 9, 9, 9, 9, 39, 40, 39, 40, 39, 40, 14, 14, 14, 14, 14, 14, 31, 32, 23, 24, 9, 9, 9, 212, 213, 213, 213, 213, 213, 213, 213, 259, 221, 222, 14, 14, 14, 14, 14, 14, 23, 24, 31, 32, 9, 9, 9, 220, 221, 221, 221, 221, 221, 221, 221, 221, 221, 222, 9, 9, 9, 18, 9, 18, 31, 32, 23, 24, 9, 9, 9, 220, 221, 221, 262, 229, 229, 229, 229, 229, 229, 230, 9, 9, 18, 9, 18, 9, 23, 24, 31, 32, 177, 178, 2, 193, 152, 152, 194, 9, 18, 177, 136, 136, 136, 136, 136, 136, 136, 136, 136, 178, 31, 32, 23, 24, 9, 9, 9, 220, 221, 221, 221, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 214, 23, 24, 31, 32, 9, 9, 9, 228, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 261, 221, 221, 222, 31, 32, 23, 24, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 220, 221, 221, 222, 23, 24, 31, 32, 15, 16, 15, 16, 15, 16, 15, 16, 15, 16, 14, 14, 14, 14, 14, 14, 220, 221, 221, 222, 31, 32, 23, 24, 31, 32, 31, 32, 31, 32, 31, 32, 31, 32, 14, 14, 14, 14, 14, 14, 220, 221, 221, 222, 23, 24, 31, 32, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 14, 14, 14, 14, 14, 14, 193, 152, 152, 194, 31, 32, 23, 24, 9, 18, 18, 18, 18, 18, 18, 18, 18, 18, 14, 14, 14, 14, 14, 14, 220, 221, 221, 222, 23, 24, 31, 32, 18, 9, 18, 18, 18, 18, 18, 18, 18, 18, 14, 14, 14, 14, 14, 14, 220, 221, 221, 222, 31, 32, 23, 24, 212, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 213, 259, 221, 221, 222, 23, 24, 31, 32, 228, 229, 229, 229, 229, 229, 229, 229, 229, 261, 221, 221, 262, 229, 229, 229, 229, 229, 229, 230, 31, 32, 23, 24, 177, 136, 136, 178, 10, 9, 9, 3, 177, 201, 152, 152, 202, 136, 136, 136, 136, 136, 136, 178, 23, 24, 31, 32, 9, 10, 14, 14, 14, 14, 14, 14, 14, 220, 221, 221, 222, 9, 10, 14, 14, 14, 14, 14, 31, 32, 23, 24, 17, 2, 14, 14, 14, 14, 14, 14, 14, 220, 221, 221, 222, 9, 18, 14, 14, 14, 14, 14, 23, 24, 31, 32, 14, 14, 14, 14, 14, 14, 14, 10, 18, 228, 229, 229, 230, 14, 14, 14, 14, 14, 18, 9, 31, 32, 23, 24, 14, 14, 14, 14, 14, 14, 14, 18, 9, 10, 14, 14, 9, 14, 14, 14, 14, 14, 10, 18, 23, 24, 31, 32, 232, 232, 232, 232, 232, 232, 232, 232, 232, 238, 14, 14, 237, 232, 232, 232, 232, 232, 232, 232, 31, 32, 23, 24, 15, 16, 15, 16, 15, 16, 15, 16, 15, 684, 14, 14, 683, 16, 15, 16, 15, 16, 15, 16, 23, 24, 31, 32, 31, 32, 31, 32, 31, 32, 31, 32, 31, 32, 14, 14, 31, 32, 31, 32, 31, 32, 31, 32, 31, 32, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 14, 14, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24],
         "height":40,
         "name":"Calque 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":24,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":40,
         "name":"Calque 2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":24,
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
         "image":"..\/BOURGPALETTE.BMP",
         "imageheight":1472,
         "imagewidth":128,
         "margin":0,
         "name":"BOURGPALETTE",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":736,
         "tileheight":16,
         "tilewidth":16
        }, 
        {
         "firstgid":737,
         "image":"..\/3870.png",
         "imageheight":450,
         "imagewidth":300,
         "margin":0,
         "name":"3870",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":504,
         "tileheight":16,
         "tiles":
            {
             "36":
                {
                 "animation":[
                        {
                         "duration":250,
                         "tileid":36
                        }, 
                        {
                         "duration":250,
                         "tileid":37
                        }, 
                        {
                         "duration":250,
                         "tileid":38
                        }, 
                        {
                         "duration":250,
                         "tileid":39
                        }, 
                        {
                         "duration":250,
                         "tileid":40
                        }]
                }
            },
         "tilewidth":16,
         "transparentcolor":"#ffffff"
        }],
 "tilewidth":16,
 "version":1,
 "width":24
});