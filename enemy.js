// enemy.js
// ShooterBlaster enemy file

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.force = {x:0.0, y:0.0};

function Enemy(game,x,y) {

    Phaser.Sprite.call(this, game, x, y, 'speedship');
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

    this.body.setSize(25, 25, 0, -5);

    this.health = 1000;

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
}


// Lowers enemy health based on power of taken weapon fire
Enemy.prototype.enemyTakesDamage = function(enemy,projectile) {
    console.log(projectile);
    // bullet damage
    if (projectile.key === 'pokeball') {
        this.damage(1);
        projectile.destroy();
    }

    // rocket damage
    else if (projectile.key === 'bomb') {
        this.damage(50);
        projectile.destroy();
    }

    // laser damage
    else if (projectile.key === 'blueBall') {
        this.damage(2);
        projectile.destroy;
    }

}

