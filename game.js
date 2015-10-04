// game.js
// SimpleShooter game file

var boundsX = 500, boundsY = 300;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game",
                    {preload:preload, update:update, create:create});

//var enemy;
var bullets;

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
        
}

function create() {

    game.physics.enable(Phaser.Physics.ARCADE); // start physics

    // spacey background
    game.add.tileSprite(0, 0, game.width, game.height, 'space');

    // add player
    player = new Player(game, game.world.centerX, game.world.centerY); 
    
    // Make enemy
    enemy = new Enemy(game, game.world.randomX, game.world.randomY);
    /*enemy2 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy3 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy4 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy5 = new Enemy(game, game.world.randomX, game.world.randomY);
    */

    // weapon groups
    bullets = game.add.group();
    rockets = game.add.group();
    lasers = game.add.group();

}

function update() {

}

/*
// kills the rock and adds to your score
function killRock(player, collider) {

    collider.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}

// Lose situations
function losing() {

    //  You Lose!
    gameEnd = game.add.text(300, 250, 'You Lose!', 
                        { fontSize: '100px', fill: '#ffffff' });
}

// Win situations
function win() {
    //  You Win!
    gameEnd = game.add.text(300, 250, 'You Win!', 
                        { fontSize: '100px', fill: '#ffffff' });
}
*/