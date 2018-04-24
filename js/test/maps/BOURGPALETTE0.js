(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("BOURGPALETTE0",
{ "height":10,
 "layers":[
        {
         "data":[745, 769, 769, 783, 784, 769, 782, 770, 771, 769, 769, 769, 769, 745, 786, 787, 791, 792, 777, 790, 778, 779, 777, 777, 759, 760, 745, 794, 795, 799, 800, 746, 798, 746, 746, 746, 766, 767, 768, 745, 746, 738, 738, 804, 805, 805, 805, 805, 807, 774, 775, 776, 745, 746, 738, 738, 820, 812, 813, 814, 815, 823, 738, 738, 738, 745, 746, 738, 738, 820, 812, 821, 822, 815, 823, 738, 738, 738, 745, 824, 738, 738, 828, 829, 829, 829, 829, 831, 738, 738, 808, 745, 832, 738, 738, 738, 738, 738, 738, 738, 738, 738, 738, 816, 745, 746, 738, 755, 756, 757, 738, 738, 738, 738, 738, 738, 738, 745, 745, 745, 881, 882, 883, 745, 745, 745, 745, 745, 745, 745],
         "height":10,
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
         "image":".\/Tileset\/BOURGPALETTE.BMP",
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
         "image":".\/Tileset\/Tileset12.BMP",
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
 "width":13
});
