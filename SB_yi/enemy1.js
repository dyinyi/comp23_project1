//enemy.js


var enemyID = 0;

var E_type = { health:20, type:1, name:"N/A", speed:0, coin:1};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.gettingHit = gettingHit;

Enemy.prototype.gettingHitByP = gettingHitByP;

Enemy.prototype.dropCoin = dropCoin;

Enemy.prototype.enemyFire = enemyFire;

//Enemy.prototype.deploy = deploy;


function Enemy(game, x, y, E_type) {
	Phaser.Sprite.call(this, game, x, y, E_type.name);
	this.scale.setTo(0.5,0.5);
	this.anchor.setTo(0.5,0.5);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	game.add.existing(this);
	enemyID += 1;
	this.health = E_type.health;
	this.type = E_type.type;
	this.name = E_type.name;
	this.speed = E_type.speed;
	this.coin = E_type.coin;
	this.dmg = E_type.dmg;
	enemyGroup.add(this);
	console.log("enemy" + enemyID + " created");

}

/*
function gettingHit(playerProjectiles){
	this.health -= playerProjectiles.power;
	this.dropCoin();

}
*/

//debugging function
function gettingHitByP(){
	this.destroy();
	this.dropCoin();
}

function setEnemyType(health, type, name, speed, coin, dmg){
	var newE_type= {health:20, type:1, name:"N/A", speed:0, coin:0, dmg: 0};
	newE_type.health = health;
	newE_type.type = type;
	newE_type.name= name;
	newE_type.speed = speed;
	newE_type.coin = coin;
	newE_type.dmg = dmg;

	return newE_type;

}

function enemyFire(type, pattern){
	//todo

}






function dropCoin(){
	new Bitcoin(game, this.position.x, this.position.y, this.coin);
}



Enemy.prototype.update = function(){

	if (this.health <=0) {
		this.destroy();
		this.dropCoin();
	}
	game.physics.arcade.moveToObject(this, player, this.speed);
	game.physics.arcade.overlap(this, player, gettingHitByP, null, this);
	//game.physics.arcade.overlap(this, playerProjectiles, gettingHit, null, this);
	//enemyFire();
}

