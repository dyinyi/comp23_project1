// enemy.js
// SimpleShooter enemy file

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.force = {x:0.0, y:0.0};

var zxc; // testing health control

function Enemy(game,x,y) {

    Phaser.Sprite.call(this, game, x, y, 'speedship');
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

    this.health = 5;

    //  Show health
    healthText = game.add.text(16, 16, 'health: ' + this.health, 
                        { fontSize: '32px', fill: '#ffffff' });

    // FOR TESTING:
    // dict for health control
    zxc = {
        moreHealth: game.input.keyboard.addKey(Phaser.Keyboard.Z),
        lessHealth: game.input.keyboard.addKey(Phaser.Keyboard.X),
        multHealth: game.input.keyboard.addKey(Phaser.Keyboard.C),
    }    

}

// Nothing is being called in here
Enemy.prototype.update = function() {
    
    // FOR TESTING:
    // change enemy health
    if (zxc.moreHealth.isDown) {
        this.health += 1;
    }
    if (zxc.lessHealth.isDown) {
        this.health -= 1;
    }
    if (zxc.multHealth.isDown) {
        this.health = this.health*1.1;
    }

    healthText.text = 'health: ' + this.health;

    /*
    if (this.x > )
        this.x -= 1;
        this.y -= 1;
    */
    // enemies follow player
    //moveEnemy(this);

    // collisions
    game.physics.arcade.overlap(this,bullet,this.enemyTakesDamage,null,this);
}


// Kills player and starts losing sequence
Enemy.prototype.enemyTakesDamage = function() {

    this.damage(1);
    bullet.destroy();

}

/*
// moves objects toward an enemy
// http://phaser.io/examples/v2/p2-physics/accelerate-to-object
function moveEnemy (enemy) { 
    //start accelerateToObject on every enemy
    accelerateToObject(enemy,player,1.2);
}

// move toward object
// Uses trigonometry to get objects to follow
function accelerateToObject(obj1, obj2, speed) {
    
    if (typeof speed === 'undefined') { 
        speed = 1; 
    }

    var angle = Math.atan2(obj2.position.y - obj1.position.y,
                             obj2.position.x - obj1.position.x);
    
    // correct angle of angry enemies
    obj1.rotation = angle + game.math.degToRad(90);
    obj1.x += Math.cos(angle) * speed;    // accelerateToObject 
    obj1.y += Math.sin(angle) * speed;
}
*/


