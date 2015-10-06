// projectile.js
// ShooterBlaser projectile file

Projectiles.prototype = Object.create(Phaser.Sprite.prototype);
Projectiles.prototype.constructor = Projectiles;
Projectiles.prototype.force = {x:0.0, y:0.0};

// bullet stuff
var bullet;
var fireRate = 1000;
var nextFire = 0;

function Projectiles(game, x, y) {

    Phaser.Sprite.call(this, game, x, y, 'projectiles');
    this.scale.set(0.15, 0.15);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(1,'ball');
    bullets.setAll('checkWorldBounds',true);
    bullets.setAll('outOfBoundsKill',true);

}

Projectiles.prototype.update = function() {


}
/*
// players fires projectile
function fire() {

	if (game.time.now > nextFire && bullets.countDead() > 0) {
		nextFire = game.time.now + fireRate;

		bullet = bullets.getFirstDead();

		bullet.reset(player.x - 0, player.y - 8);

		game.physics.arcade.moveToPointer(bullet, 300);
	}

}
*/