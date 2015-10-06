//Playa.js


var P_skin = { health:0, type:0, name:"N/A", speed:0};
var P_weapon = "temp";

Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

//Player.prototype.enemyVsPlayer = enemyVsPlayer;

//Player.prototype.projectilesVsPlayer = projectilesVsPlayer;

//Player.prototype.deploy = deploy;

//Player.prototype.setWeapon = setWeapon;

Player.prototype.setSkin = setSkin;




function Player(game, x, y, P_skin, P_weapon) {
	Phaser.Sprite.call(this, game, x, y, P_skin.name);
	this.scale.setTo(0.05,0.05);
	this.anchor.setTo(0.5,0.5);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	game.add.existing(this);

	this.health = P_skin.health;

	this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    specials = {
    	special1: game.input.keyboard.addKey(Phaser.Keyboard.Q),
    	special2: game.input.keyboard.addKey(Phaser.Keyboard.E)
    };

}


function setSkin(skinType) {

    if (skinType == 1) {
        P_skin.health = 15;
        P_skin.type = 1;
        P_skin.name = 'sportscar';
        P_skin.speed = 3;
    }

    else {
        P_skin.health = 30;
        P_skin.type = 2;
        P_skin.name = 'tank';
        P_skin.speed = 2;
    }

}

//temp
function setWeapon(P_weapon){
	// todo
    /*temp
    this.bullets = P_weapon.bullets;
    this.fireRate = P_weapon.fireRate;
    temp */

}
//temp


function useSpecial1() {
	if (P_skin.type == 1) {
		cooldown = new Timer(game);
		
		player.x -= 5*P_skin.speed; //no .body for now
		// todo: call drifting/teleport animation function
	}
	if (P_skin.type == 2) {
		player.health += 5;
		// todo: call heal animation function as well
	}

}

function useSpecial2(game) {
	if (P_skin.type == 1) {
		player.x += 5*P_skin.speed; //no .body for now
		// todo: call drifting/teleport animation function
	}
	if (P_skin.type == 2) {
		// todo: use weapon of massive destruction
		
	}


}

/*
function projectilesVsPlayer(enemyProjectiles){
	this.health -= enemyProjectiles.power;
	enemyProjectiles.kill();
}
*/

/*
function enemyVsPlayer(){
    this.health -= 5;
}
*/

//Function updatePlayer(){
Player.prototype.update = function(){

	if (player.health <= 0) {
		player.kill();
		// todo: call end game screen function
	}

	game.camera.follow(player);

	//game.physics.arcade.overlap(enemyProjectiles, Player, damaging, null, this);

	var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    
    player.angle = Math.atan2(player.position.x - mX, player.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        player.body.y -= P_skin.speed;
   	}
    if (wasd.down.isDown) {
        player.body.y += P_skin.speed;
    }
    if (wasd.left.isDown) {
        player.body.x -= P_skin.speed;
    }
    if (wasd.right.isDown) {
        player.body.x += P_skin.speed;
    }

/*
    if (game.input.activePointer.isDown)
    {
        fire();
    }
    */

    if (specials.special1.isDown) {
    	useSpecial1();
    }
    if (specials.special2.isDown) {
    	useSpecial2();
    }

    //game.physics.arcade.overlap(enemyGroup, this, enemyVsPlayer, null, this);
    //game.physics.arcade.overlap(projectilesGroup, this, projectilesVsPlayer, null, this);


}