// projectile.js
// ShooterBlaser projectile file

// Pokéball = bullet
// bomb = rocket
// blueBall = laser

var fireRate = 1000;
var nextFire = 0;

// prep firing bullets
function prepBulletFire() {
    
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(1,'pokeball');
    bullets.setAll('checkWorldBounds',true);
    bullets.setAll('outOfBoundsKill',true);

    fireRate = 10;

    fire(bullets);

}

// prep firing rockets
function prepRocketFire() {
    
    rockets.enableBody = true;
    rockets.physicsBodyType = Phaser.Physics.ARCADE;

    rockets.createMultiple(1,'bomb');
    rockets.setAll('checkWorldBounds',true);
    rockets.setAll('outOfBoundsKill',true);

    fireRate = 500;

    fire(rockets);

}

// prep firing lasers
function prepLaserFire() {
    
    lasers.enableBody = true;
    lasers.physicsBodyType = Phaser.Physics.ARCADE;

    lasers.createMultiple(1,'blueBall');
    lasers.setAll('checkWorldBounds',true);
    lasers.setAll('outOfBoundsKill',true);

    fireRate = 10;

    fire(lasers);

}

// fires projectiles
function fire(projectile) {

	if (game.time.now > nextFire && projectile.countDead() > 0) {
		nextFire = game.time.now + fireRate;
		var round = projectile.getFirstDead();
		round.scale.setTo(0.5,0.5);
		round.reset(player.x - 0, player.y - 8);
		game.physics.arcade.moveToPointer(round, 300);
	}

}