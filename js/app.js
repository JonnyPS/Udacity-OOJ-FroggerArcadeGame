var canvasWidth = 505;
var verticalMove = 83;
var sidewaysMove = 100;
var arr = [];
var collisionCount = 1;
// var randomYpos = [60, 144, 228, 312, 400];
// var randomYpos = [68, 151, 234, 317];
var enemyYpos = [];
var livesNum = 3;
var livesContainer = document.getElementById('lives');
var yPos = [68, 151, 234, 317];


// window.onload = function() {
  document.getElementById('lives').innerHTML = 'Lives = ' + livesNum; 
// }

  // create Enemy class and protype methods
  var Enemy = function( name, speed ) {
    var randomItem = yPos[Math.floor(Math.random()*yPos.length)];
    yPos.splice(randomItem, 1);
    console.log(yPos)
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
    arr[0] = xPos;  
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
  var bugFour = new Enemy( 'Brian', 70 )
  var bugFive = new Enemy( 'Pete', 30 )
  var bugSix = new Enemy( 'Henry', 15 )

  // Place all enemy objects in an array called allEnemies
  var allEnemies = [ bugOne, bugTwo, bugThree, bugFour, bugFive, bugSix ];
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

  var detectCollision = setInterval(myFunc, 250);

  function myFunc() {
    for ( var i = 0; i < allEnemies.length; i++ ) {
      var xPos = Math.round( allEnemies[i].x );
      var yPos = Math.round( allEnemies[i].y );
      if ( yPos == player.y ) { 
        console.log(' horizontal match horizontal match horizontal match horizontal match horizontal match horizontal match horizontal match ')
        if ( xPos > arr[0] - 80 && xPos < arr[0] + 30 ) {
          clearInterval( detectCollision )
          console.log('/////////////////////////////////////////////////////////////////////////////')
          console.log('WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE WITHIN RANGE')
          console.log('/////////////////////////////////////////////////////////////////////////////')   
          Enemy.prototype.update = function() {
            this.x = this.x;
          }
          livesNum--;
          console.log(livesNum)
          document.getElementById('lives').innerHTML = 'Lives = ' + livesNum; 
        }
      }
    }
    for ( var j = 0; j < allEnemies.length; j++ ) {
      // console.log( allEnemies[j].y )
    }
  }