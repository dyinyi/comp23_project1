// game.js
// SimpleShooter game file

var boundsX = 1000, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game",
                    {preload:preload, update:update, create:create});

//var enemy;
var bullets;

function preload () {
    game.load.image('space', 'images/Deep-Space.jpg');
    game.load.image('speedship','ship_sprites/speedship.png');
    game.load.image('player','images/basicCar.png');
    game.load.image('ball','images/pokeball.png'); 
            // http://creepypasta81691.deviantart.com/art/Pokeball-Sprite-295593219
    /*game.load.image('cat', 'spaceship.png');
    game.load.image('enemy', 'goomba.png');
    game.load.image('rock', 'pizza.png');
    */

}

function create() {

    game.physics.enable(Phaser.Physics.ARCADE); // start physics

    // spacey background
    game.add.tileSprite(0, 0, game.width, game.height, 'space');

    // add player
    player = new Player(game, game.world.centerX, game.world.centerY); 
    
    // Make enemies (goombas)
    enemy1 = new Enemy(game, game.world.randomX, game.world.randomY);
    /*enemy2 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy3 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy4 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy5 = new Enemy(game, game.world.randomX, game.world.randomY);
    */

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