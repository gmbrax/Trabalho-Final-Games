/**
 * @file Arquivo  contendo a cena principal do jogo 
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda
*/

/**
 * 
 * @class 
 * @classdesc Essa classe é a cena principal do jogo
 * @author Gustavo Henrique S. S. Miranda
 */
class main_game_scene extends Phaser.Scene {

    /**
    * @constructs main_game_scene
    * Esse construtor inicia a cena principal do jogo 
    */
    constructor() {
        super({ key: 'main' });
        this.parent_class = null;
        this.p1_score_board_cached = []
        this.p2_score_board_cached = []

    }

    /**
     * @description Essa função carrega para a memoria os recursos da cena.
     */
    preload() {
        this.load.image('paddle_white', '../../assets/images/Paddle_White.png');
        this.load.image('divider_black', '../../assets/images/Divider_Black.png');
        this.load.image('ball_white', '../../assets/images/Ball_White.png');
        this.load.spritesheet("Number_Font_White", "../../assets/images/Number_Font_White.png", { frameWidth: 40, frameHeight: 80, spacing: 21 });

    }

    cursors;

    /**
    * @description Essa função cria os recursos usados na cena
    * @author Gustavo Henrique Miranda, Laura Cardoso
    */
    create() {
        //BALL
        const ball = this.add.sprite(390, 390, 'ball_white');
        ball.speedX = 1;
        ball.speedY = 1;
        ball.setName('ball');

        // PADDLES
        const paddleLeft = this.add.sprite(45, 390, 'paddle_white').setOrigin(0.5, 0.5);
        const paddleRight = this.add.sprite(975, 390, 'paddle_white').setOrigin(0.5, 0.5);

        paddleLeft.setName('paddleL');
        paddleRight.setName('paddleR');

        this.physics.add.existing(paddleLeft, true);
        this.physics.add.existing(paddleRight, true);

        // OTHERS
        this.add.sprite(510, 390, 'divider_black');
        let p1_score_board = this.add.group({key:'Number_Font_White',frame:9,repeat:2,setXY:{x:174,y:160,stepX:60}})
        let p2_score_board = this.add.group({key:'Number_Font_White',frame:9,repeat:2,setXY:{x:690,y:160,stepX:60}})
        this.set_cache_p1_score_board(p1_score_board);
        this.set_cache_p2_score_board(p2_score_board);
     
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    /**
     * @description essa função é chamada a cada iteração do loop do jogo.
     * @author Laura Cardoso
     * @todo alterar o controle dos paddles para ser controlado individualmente.
     * @todo adicionar o reset da bola e o sistema de pontuação
     * 
     */

    update() {
        //BALL
        const ball = this.children.getByName('ball');

        ball.x += ball.speedX;
        ball.y += ball.speedY;

        if (ball.y <= 0 || ball.y >= this.sys.game.config.height) {
            ball.speedY *= -1;
        }

        const paddles = this.children.getChildren().filter(child => child.name === 'paddleL' || child.name === 'paddleR');
        paddles.forEach(paddle => {
            if (Phaser.Geom.Intersects.RectangleToRectangle(ball.getBounds(), paddle.getBounds())) {
                ball.speedX *= -1;
            }
        });


        //PADDLES
        //TODO: Ambos os paddles estão funcionando com as mesmas teclas do teclado (up e down)
        const paddleLeft = this.children.getByName('paddleL');
        const paddleRight = this.children.getByName('paddleR');

        const speed = 5;
        // left
        if (this.cursors.up.isDown && paddleLeft.y > 0) {
            paddleLeft.y -= speed;
        } else if (this.cursors.down.isDown && paddleLeft.y < this.sys.game.config.height) {
            paddleLeft.y += speed;
        }

        // right
        if (this.cursors.up.isDown && paddleRight.y > 0) {
            paddleRight.y -= speed;
        } else if (this.cursors.down.isDown && paddleRight.y < this.sys.game.config.height) {
            paddleRight.y += speed;
        }

    }

    /**
     * @description Essa função define um callback para classe game_config
     * @author Gustavo  Henrique Miranda
     * @param {game_config} callback_class referencia da classe game_config
     */
    set_parent_class_callback(callback_class){
        this.parent_class = callback_class;
    }

    /**
     * 
     * @description Essa função guarda uma cópia dos valores do scoreboard do player1
     * @author Gustavo Henrique Miranda
     * @param {group} p1_score_board grupo de sprites do scoreboard do player1
     * 
     */
    set_cache_p1_score_board(p1_score_board){
        p1_score_board.children.iterate(function (child, index) {
            this.p1_score_board_cached.push(child.frame.name);
        }, this);
    }

    /**
     * 
     * @description Essa função guarda uma cópia dos valores do scoreboard do player1
     * @author Gustavo Henrique Miranda
     * @param {group} p2_score_board grupo de sprites do scoreboard do player2
     */
    set_cache_p2_score_board(p2_score_board){
        p2_score_board.children.iterate(function (child, index) {
            this.p2_score_board_cached.push(child.frame.name);
        }, this);
    }
}