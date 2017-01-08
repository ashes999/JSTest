Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },

  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  }
});

Crafty.c('Actor',{
	init: function(){
		this.requires('2D, Canvas, Grid');
	},
});



Crafty.c('Transition',{
	init: function(){
		this.requires('Actor, Color, MoveLocation')
		.color('rgb(0,100,0)');
		
	}
	
})


