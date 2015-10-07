// game.js
// SimpleShooter game file

var boundsX = 800, boundsY = 400;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game",
                    {preload:preload, update:update, create:create});


function preload () {
    game.load.image('space', 'images/Deep-Space.jpg');
    game.load.image('speedship','ship_sprites/speedship.png');
    game.load.image('player','images/basicCar.png');
    game.load.image('pokeball','images/pokeball.png'); 
        // http://creepypasta81691.deviantart.com/art/Pokeball-Sprite-295593219
    game.load.image('blueBall','images/blueBall.png'); 
        // http://www.zeldadungeon.net/wiki/images/a/a9/Ball-1.png
    game.load.image('bomb','images/bomb.png'); 
        // http://www.zeldaelements.net/images/games/the_minish_cap/items_and_equipment/bombs.png
    game.load.spritesheet('explosion','images/explosion.png',60,60);
        // korzonrocknet.deviantart.com
        
}

function create() {

    game.physics.enable(Phaser.Physics.ARCADE); // start physics

    // spacey background
    game.add.tileSprite(0, 0, game.width, game.height, 'space');

    // add player
    player = new Player(game, game.world.randomX, game.world.randomY); 
    
    // Make enemy
    //enemy = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy = new Enemy(game, game.world.centerX, game.world.centerY);

    // weapon groups
    projectiles = new Projectile(game);

}

function update() {

    // homing weapons
    rockets.forEachAlive(startHoming,enemy);  //make bullets accelerate to ship

}