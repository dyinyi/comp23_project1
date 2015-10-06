var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var player;
var enemy1, enemy2;

var wasd;
var scoreText;
var playerHealth;

var enemyGroup;
var bitcoinGroup;






function preload () {
    game.load.image('tank', 'tank.png');
    game.load.image('sportscar', 'sportscar.png');
    game.load.image('enemy', 'enemy.png');
    game.load.image('bitcoin', 'bitcoin.png');
    game.load.image('turret','turret.png');

}

function create() {
    enemyGroup = game.add.group();
    bitcoinGroup = game.add.group();
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#3B6CCD' });
    playerHealth = game.add.text(500, 16, 'score: 0', { fontSize: '32px', fill: '#3B6CCD' });

    scoreText.text = 'Bitcoin: ' + bitcoincount;


    setSkin(2);

    player = new Player(game, 800, 600, P_skin, P_weapon);
    playerHealth.text = 'Health: ' + player.health;

    //create enemies
    var this_type = setEnemyType(10,1,'enemy',50, 100);

    enemy1 = new Enemy(game, 100, 100, this_type);

    this_type = setEnemyType(20,2,'turret',0, 20);

    enemy2 = new Enemy(game, 400, 100, this_type);

    //temp


    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

}


function update() {
     scoreText.text= 'Bitcoin: ' + bitcoincount;
     playerHealth.text = 'Health: ' + player.health;

}



