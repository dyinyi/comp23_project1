// projectile.js
// ShooterBlaser projectile file

// Pokéball = bullet
// bomb = rocket
// blueBall = laser

singleRound.prototype = Object.create(Phaser.Sprite.prototype);
singleRound.prototype.constructor = singleRound;

// generic round/projectile
function singleRound(img,proportion,rate,pwr,speed,homing) {

    this.img = img;
    this.proportion = proportion;
    this.fireRate = rate;
    this.power = pwr;
    this.speed = speed;
    this.homing = homing;

}

// weapon information objects
var bullet = new singleRound('pokeball',0.5,80,1,300,false);
var rocket = new singleRound('bomb',0.5,500,20,350,true);
var laser = new singleRound('blueBall',0.4,1,2,100,false);

// dictionary of weapons
var weaponDamage = {
    pokeball: bullet.power,
    bomb: rocket.power,
    blueBall: laser.power,
}

var nextFire = 0;

// prep firing weapon
// Made based on the very helpful Phaser game: Tanks
//      http://phaser.io/examples/v2/games/tanks
function singleFire(group,single) {

    // establish physics
    group.enableBody = true;
    group.physicsBodyType = Phaser.Physics.ARCADE;

    // create sprite and define boundary properties
    group.createMultiple(1,single.img);
    this.classType = singleRound;
    group.setAll('checkWorldBounds',true);
    group.setAll('outOfBoundsKill',true);

    // fire weapon 
    if (game.time.now > nextFire && group.countDead() > 0) {
        nextFire = game.time.now + single.fireRate;
        var round = group.getFirstDead();
        round.scale.setTo(single.proportion,single.proportion);
        round.reset(player.x, player.y - 20);
        game.physics.arcade.moveToPointer(round,single.speed);
    }
    
}
