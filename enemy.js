// enemy.js
// ShooterBlaster enemy file

var enemy;

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.force = {x:0.0, y:0.0};

function Enemy(game,x,y) {

    Phaser.Sprite.call(this, game, x, y, 'speedship');
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

    this.body.setSize(20,20);

    this.health = 100;

    //  Show health
    healthText = game.add.text(16, 16, 'health: ' + this.health, 
                        { fontSize: '32px', fill: '#ffffff' });   

}

// Nothing is being called in here
Enemy.prototype.update = function() {

    healthText.text = 'health: ' + this.health; // display enemy health

    // collisions
    game.physics.arcade.overlap(this,bullets,this.enemyTakesDamage,null,this);
    game.physics.arcade.overlap(this,rockets,this.enemyTakesDamage,null,this);
    game.physics.arcade.overlap(this,lasers,this.enemyTakesDamage,null,this);

    while (this.health < 0) {
        this.health = 0;
    }

    x = Math.random();

    if (x < 0.25) {
        enemy.x += 4;
    } else if (x < 0.5 && x > 0.25) {
        enemy.y += 4;
    } else if (x < 0.75 && x > 0.5) {
        enemy.x -= 4;
    } else {
        enemy.y -= 4;
    }

}

// Lowers enemy health based on power of taken weapon fire
Enemy.prototype.enemyTakesDamage = function(enemy,projectile) {

    this.damage(projectile.parent.power);
    
    if (projectile.parent.homing) {
        explode(projectile);
    } else {
        projectile.destroy();
    }

}

