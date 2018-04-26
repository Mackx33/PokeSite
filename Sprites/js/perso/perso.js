class keybinding
{

constructor(right, left, up, down)
  {
  this.right	=	right;
  this.left	=	left;
  this.up 	=	up;
  this.down	=	down;
  this.keys 	= 	[];
  }

keyListener(perso, jeu)
  {
  var right 	= this.right;
  var left 	= this.left;
  var up 	=	this.up;
  var down 	=	this.down;

  var keyboard = 	this.keys;
  var Character = perso;

document.addEventListener	("keydown", function(e)
		{
			keyboard[e.keyCode] = true;
			if (keyboard[up])
			{
				Character.up();
			}
			if (keyboard[down])
			{
				Character.down();
			}
			if(keyboard[right])
			{
				Character.right();
			}
			if(keyboard[left])
			{
				Character.left();
			}
		}
);

document.addEventListener	("keyup",	function(e)
		{
			keyboard[e.keyCode] = false;
			if(keyboard[right]==false)
			{
				Character.stopR();
			}
			if ( keyboard[left]==false)
			{
				Character.stopL();
			}
			if (keyboard[down]==false)
			{
				Character.lever();
			}
			if(keyboard[pause]==false)
			{

			}

		}
);
}
}
