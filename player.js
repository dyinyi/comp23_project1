// player.js
// SimpleShooter player file

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
Player.prototype.force = {x:0.0, y:0.0};

// control stuff
var wasd;
var arsenal;

// Arthur's sample code was instrumental in making
// this function
function Player(game, x, y) {

    Phaser.Sprite.call(this, game, x, y, 'player');
    this.scale.set(0.15, 0.15);
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

    // dictionary for weapons choice
    arsenal = {
    	bullets: game.input.keyboard.addKey(Phaser.Keyboard.Z),
    	rockets: game.input.keyboard.addKey(Phaser.Keyboard.X),
    	laser: game.input.keyboard.addKey(Phaser.Keyboard.C),
    }

    // weapons: 1 = bullets, 2 = rockets, 3 = lasers
    this.weapon = 'bullets';
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

    // if player chooses different weapons
    if (arsenal.bullets.isDown) {
    	player.weapon = 'bullets';
    }
    else if (arsenal.rockets.isDown) {
    	player.weapon = 'rockets';
    }
    else if (arsenal.laser.isDown) {
    	player.weapon = 'laser';
    }

    // checks for user input for weapons fire
    if (game.input.activePointer.isDown) {
    	// weapons: 1 = bullets, 2 = rockets, 3 = lasers
    	if (this.weapon === 'bullets') {
    		prepBulletFire();
    	}

    	else if (this.weapon === 'rockets') {
    		prepRocketFire();
    	}

    	else if (this.weapon === 'laser') {
    		prepLaserFire();
    	}
    }

}
