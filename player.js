// player.js
// SimpleShooter player file

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
Player.prototype.force = {x:0.0, y:0.0};

// control stuff
var wasd;

// bullet stuff
var bullet;
var fireRate = 1000;
var nextFire = 0;

// Arthur's sample code was instrumental in making
// this function
function Player(game, x, y) {

    Phaser.Sprite.call(this, game, x, y, 'p');
    this.scale.set(1, 1);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

    this.cursors = game.input.keyboard.createCursorKeys();

    // dictionary for game input
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    }

}

Player.prototype.update = function() {

    // from Arthur's example code
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    
    // look at the mouse
    player.angle = Math.atan2(player.position.x - mX, player.position.y - mY)  * -57.2957795;

    // move player sprite around
    if (wasd.up.isDown) {
        player.y -= 4;
    }
    if (wasd.down.isDown) {
        player.y += 4;
    }
    if (wasd.left.isDown) {
        player.x -= 4;
    }
    if (wasd.right.isDown) {
        player.x += 4;
    }

    /* BULLET STUFF */
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(1,'ball');
    bullets.setAll('checkWorldBounds',true);
    bullets.setAll('outOfBoundsKill',true);

    if (game.input.activePointer.isDown) {
    	fire();
    }

}

function fire() {

	if (game.time.now > nextFire && bullets.countDead() > 0) {
		nextFire = game.time.now + fireRate;

		bullet = bullets.getFirstDead();

		bullet.reset(player.x - 0, player.y - 8);

		game.physics.arcade.moveToPointer(bullet, 300);
	}

}

