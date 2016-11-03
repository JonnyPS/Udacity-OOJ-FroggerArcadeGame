
var verticalMove = 83;
var sidewaysMove = 100;
// var speed = 20;
var canvasWidth = 505;
var imgSrc = document.getElementsByClassName( 'imgChar' );




// console.log( canvasWidth )
// Enemies our player must avoid
var Enemy = function( name, speed, yPos ) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.name = name;
    this.x = -100;
    this.y = yPos;
    this.speed = speed;
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt, speed) {
  this.x = this.x + ( this.speed * dt );
  // console.log( this.x )
  if ( this.x >= canvasWidth ) {
    this.x =  -sidewaysMove;
  }
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  // console.log( this.x )
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function() {
  // code goes here
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
      console.log( this.x )
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
};

Player.prototype.assignChar = function( src ) {
  console.log( assignChar )
  this.sprite = src;
};

// Now instantiate your objects.
var bugOne = new Enemy( 'Bob', 40, verticalMove*3 )
var bugTwo = new Enemy( 'Ted', 20, 0 )
var bugThree = new Enemy( 'Hugh', 50, 400 )

// Place all enemy objects in an array called allEnemies
// var allEnemies = [bugOne, bugTwo, bugThree];
var allEnemies = [bugOne, bugTwo, bugThree ];
console.log( allEnemies )


var choosePlayer = function( src ) {
  // console.log( 'choosePlayer' )
  // console.log( imgSrc )
  console.log( src )
  // Player.assignChar( src );
  Player.sprite = src;
  console.log( Player.sprite );
  console.log( Player )
}

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




