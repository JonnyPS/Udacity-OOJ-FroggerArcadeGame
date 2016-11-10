var canvasWidth = 505;
var verticalMove = 83;
var sidewaysMove = 100;
var arr = [];
// var randomYpos = [60, 144, 228, 312, 400];
var randomYpos = [68, 151, 234, 317];
var enemyYpos = [];
// create Enemy class and protype methods
var Enemy = function( name, speed ) {
  var yPos = [68, 151, 234, 317];
  var randomItem = yPos[Math.floor(Math.random()*yPos.length)];
  this.sprite = 'images/enemy-bug.png';
  this.name = name;
  this.x = -100;
  this.y = randomItem;
  this.speed = speed;
  this.trackYpos = function() {
    console.log( 'trackYpos' )
    enemyYpos.push( randomItem )
  }()
};

Enemy.prototype.update = function(dt, speed) {
  this.x = this.x + ( this.speed * dt );
  if ( this.x >= canvasWidth ) {
    this.x =  -sidewaysMove; 
  }
};

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
  // for ( var i = 0; i < allEnemies.length; i++ ) {
  //   var xPos = Math.round( allEnemies[i].x );
  //   // console.log( 'item number ' + i + '   ' + xPos )
  //   if ( xPos > arr[0] - 50 && xPos < arr[0] ) {
  //     console.log('/////////////////////////////////////////////////////////////////////////////')
  //     console.log('WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE')
  //     console.log('/////////////////////////////////////////////////////////////////////////////')    
  //   }
  // }
  // for ( var j = 0; j < allEnemies.length; j++ ) {
  //   console.log( allEnemies[j].y )
  // }
};

// create Player class and protype methods
var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function() {
  // code goes here
};

Player.prototype.render = function( ) {
  var xPos = this.x;
  var yPos = this.y;

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

  //  arr.push( function() {
  //     console.log( xPos, yPos );
  // });
  arr[0] = xPos;
  // console.log('arr = ' + arr[0])
  // console.log(arr[0])

};



Player.prototype.handleInput = function( keyPressed ) {
  switch ( keyPressed ) {
    case 'up':
    if ( this.y < verticalMove ) {
      console.log( 'about to walk off the top of the board' )
    } else {
      this.y = this.y - verticalMove;
    }
    break;
    case 'down': 
    if ( this.y >= 400 ) {
      console.log( 'about to walk off the bottom of the board' )
    } else {
      this.y = this.y + verticalMove;
    }
    break;
    case 'left': 
    if ( this.x <= 0 ) {
      console.log( 'about to walk off the left of the board' )
    } else {
      this.x = this.x - sidewaysMove;
      // console.log( this.x )
    }  
    break;
    case 'right': 
    if ( this.x >= 400 ) {
      console.log( 'about to walk off the right of the board' )
    } else {
      this.x = this.x + sidewaysMove;
    }
    break;
    default: console.log('another key pressed')
  }
  console.log( 'boy yPos = ' + this.y)
};

// Now instantiate your objects.
var bugOne = new Enemy( 'Bob', 40 )
var bugTwo = new Enemy( 'Ted', 20 )
var bugThree = new Enemy( 'Hugh', 50 )

// Place all enemy objects in an array called allEnemies
var allEnemies = [ bugOne, bugTwo, bugThree ];


// console.log( allEnemies )

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

setInterval(myFunc, 250);

function myFunc() {
  for ( var i = 0; i < allEnemies.length; i++ ) {
    var xPos = Math.round( allEnemies[i].x );
    var yPos = Math.round( allEnemies[i].y );
    if ( yPos == player.y ) { 
      console.log(' horizontal match horizontal match horizontal match horizontal match horizontal match horizontal match horizontal match ')
      if ( xPos > arr[0] - 80 && xPos < arr[0] ) {
        console.log('/////////////////////////////////////////////////////////////////////////////')
        console.log('WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE')
        console.log('/////////////////////////////////////////////////////////////////////////////')    
      }
    }
  }
  for ( var j = 0; j < allEnemies.length; j++ ) {
    // console.log( allEnemies[j].y )
  }
}


