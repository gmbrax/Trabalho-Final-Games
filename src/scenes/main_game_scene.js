/**
 * @file Arquivo  contendo a cena principal do jogo 
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda
 * @todo Corrigir bug no scoreboard em que o numero 1 fica demasiadamente longe dos outros numeros
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

    hitCount = 0;
    beenHit = false;
    cursors;
    directionPleft = 1; // 1 representa movimento de baixo para cima, -1 representa movimento de cima para baixo
    paddleLeftHeight = 100;


    /**
     * @description Essa funcao carrega para a memoria os recursos da cena.
     */
    preload() {
        this.load.image('paddle_white', 'assets/images/Paddle_White.png');
        this.load.image('divider_black', 'assets/images/Divider_Black.png');
        this.load.image('ball_white', 'assets/images/Ball_White.png');
        this.load.spritesheet("Number_Font_White", "assets/images/Number_Font_White.png", { frameWidth: 40, frameHeight: 80, spacing: 21 });

    }


    /**
    * @description Essa funcao cria os recursos usados na cena
    * @author Gustavo Henrique Miranda, Laura Castro
    */
    create() {
        //BALL
        const ball = this.add.sprite(390, 390, 'ball_white');
        ball.speedX = 3;
        ball.speedY = 3;
        ball.setName('ball');

        // PADDLES
        const paddleLeft = this.add.sprite(45, 390, 'paddle_white').setOrigin(0.5, 0.5);
        const paddleRight = this.add.sprite(975, 390, 'paddle_white').setOrigin(0.5, 0.5);

        paddleLeft.setName('paddleL');
        paddleRight.setName('paddleR');

        this.physics.add.existing(paddleLeft, true);
        this.physics.add.existing(paddleRight, true);

        const frameHeight = this.sys.game.config.height;

        paddleLeft.y = this.randomNumber(0, frameHeight - this.paddleLeftHeight);
        paddleLeft.speed = this.randomNumber(1, 5);

        // OTHERS
        this.add.sprite(510, 390, 'divider_black');
        let group_default = { key: 'Number_Font_White', frame: 9, repeat: 2, setXY: { x: 174, y: 160, stepX: 60 } };
        let p1_score_board = this.add.group(group_default);
        group_default['setXY']['x'] = 690;
        let p2_score_board = this.add.group(group_default);
        this.set_cache_p1_score_board(p1_score_board);
        this.set_cache_p2_score_board(p2_score_board);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    firstHit = false;
    shouldWin = this.randomNumber(0, 10);


    randomNumber(min, max) {
        // Math.random() gera um número entre 0 (inclusive) e 1 (exclusivo)
        // Multiplicamos pela amplitude do intervalo e arredondamos para baixo usando Math.floor()
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * @description essa funcao é chamada a cada iteracao do loop do jogo.
     * @author Laura Castro
     * @todo alterar o controle dos paddles para ser controlado individualmente.
     * @todo adicionar o reset da bola e o sistema de pontuacao
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
        //TODO: Ambos os paddles estao funcionando com as mesmas teclas do teclado (up e down)
        const paddleLeft = this.children.getByName('paddleL');
        const paddleRight = this.children.getByName('paddleR');

        const speed = 5;
        //left


        if (ball.x < 61) {
            this.firstHit = true;
        }
        if (this.firstHit) {
            paddleLeft.y += this.directionPleft * paddleLeft.speed;
            // Verifica se atingiu limite superior ou inferior
            if (paddleLeft.y <= 0) {
                // Se atingiu o limite superior, inverte a direcao para baixo
                this.directionPleft = 1;
                // Define uma nova velocidade aleatoria
                paddleLeft.speed = this.randomNumber(1, 5);
            } else if (paddleLeft.y >= this.sys.game.config.height - this.paddleLeftHeight) {
                // Se atingiu o limite inferior, inverte a direcao para cima
                this.directionPleft = -1;
                // Define uma nova velocidade aleatoria
                paddleLeft.speed = this.randomNumber(1, 5);
            }
            if (this.shouldWin < 8) { //quanto mais perto de 10 o numero, mais "vezes" o paddleLeft vai estar no mesmo Y da bola
                this.firstHit = false;
                this.shouldWin = this.randomNumber(0, 10); //faz com que, randomicamente, a barra volte a ter a posicao da bolinha
            }
        } else {
            paddleLeft.y = ball.y;
        }

        // right
        if (this.cursors.up.isDown && paddleRight.y > 0) {
            paddleRight.y -= speed;
        } else if (this.cursors.down.isDown && paddleRight.y < this.sys.game.config.height) {
            paddleRight.y += speed;
        }


    }

    /**
     * @description Essa funcao define um callback para classe game_config
     * @author Gustavo  Henrique Miranda
     * @param {game_config} callback_class referencia da classe game_config
     */
    set_parent_class_callback(callback_class) {
        this.parent_class = callback_class;
    }

    /**
     * 
     * @description Essa funcao guarda uma copia dos valores do scoreboard do player1
     * @author Gustavo Henrique Miranda
     * @param {group} p1_score_board grupo de sprites do scoreboard do player1
     * 
     */
    set_cache_p1_score_board(p1_score_board) {
        p1_score_board.children.iterate(function (child, index) {
            this.p1_score_board_cached.push(child.frame.name);
        }, this);
    }

    /**
     * 
     * @description Essa funcao guarda uma copia dos valores do scoreboard do player1
     * @author Gustavo Henrique Miranda
     * @param {group} p2_score_board grupo de sprites do scoreboard do player2
     */
    set_cache_p2_score_board(p2_score_board) {
        p2_score_board.children.iterate(function (child, index) {
            this.p2_score_board_cached.push(child.frame.name);
        }, this);
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa funcao retorna um array com os valores do frame do score board do player1
     * @returns retorna o array contendo os valores dos frames do score board do player1
     */
    get_cache_p1_score_board() {
        return this.p1_score_board_cached;
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa funcao retorna um array com os valores do frame do score board do player2
     * @returns retorna o array contendo os valores dos frames do score board do player2
     */
    get_cache_p2_score_board() {
        return this.p2_score_board_cached;
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa funcao atualiza o scoreboard do player1 
     * @param {group} p1_score_board grupo de sprites do score board do 
     * @param {Array} update_array Array contendo os valores do frames equivalentes ao numero a ser atualizado
     * 
     */
    update_p1_score_board(p1_score_board, update_array) {
        p1_score_board.children.iterate(function (child, index) {
            child.setFrame(update_array[index]);
        })
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa funcao atualiza o scoreboard do player2 
     * @param {group} p2_score_board grupo de sprites do score board do 
     * @param {Array} update_array Array contendo os valores do frames equivalentes ao numero a ser atualizado
     * 
     */
    update_p2_score_board(p2_score_board, update_array) {
        p2_score_board.children.iterate(function (child, index) {
            child.setFrame(update_array[index]);
        })
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa funcao converte um array de digitos em um array de numeros de frame.
     * @param {Array} digit_array Array contendo os digitos à serem convertidos.
     * @returns retorna um array com os valores de digito convertido para o seus repectivos valores de frame. 
     * 
     */
    convert_to_frame_number(digit_array) {
        const lut = { 0: 9, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8 };
        let result = [];
        for (let digit of digit_array) {
            result.push(lut[digit])
        }
        return result;
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Funcao que converte um numero em um array contendo esses numeros
     * @param {Integer} number valor à ser convertido para um array
     * @returns retorna um array com os numeros
     * 
     */
    convert_integer_to_array(number) {
        let result = []
        if (number <= 999) {

            result.push(Math.floor(number / 100));
            result.push(Math.floor(number / 10) % 10);
            result.push(Math.floor(number % 10));
            return result;
        }
        else return null;
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa funcao retorna o score atual do player1
     * @returns retorna um inteiro com o score atual do player1
     */
    get_p1_current_score() {

        return this.parent_class.get_player1_score();
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa funcao retorna o score atual do player2
     * @returns  retorna um inteiro com o score atual do player2
     */
    get_p2_current_score() {
        return this.parent_class.get_player2_score();
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa Funcao recebe um inteiro para o current score e um array contendo os valores do frame de um scoreboard,
     * converte o current score para um array de com valores de frame correspondentes e compara os dois arrays e retorna o boolean dessa 
     * comparacao
     * @param {int} current_score Inteiro correspondendo ao score atual
     * @param {Array} scoreboard  Array contendo os numeros do frame que estao sendo exibidos
     * @returns Essa funcao retorna um boolean true caso os valores seja iguais e retorna false caso contrario, e null caso haja diferenca de tamanho entre os arrays 
     * 
     */
    compare_current_score_to_scoreboard(current_score, scoreboard) {
        let current_score_array = this.convert_to_frame_number(this.convert_integer_to_array(current_score));
        if (!current_score_array.length === scoreboard.length) {
            return null;
        }
        let equal_items = scoreboard.every((element, index) => element === current_score_array[index]);
        return (equal_items)
    }

    /**
     * 
     * @author Gustavo Henrique Miranda
     * @description Essa funcao checa se o valor armazenado em cache dos arrays de frame os scoreboards estao iguais as pontuacões do player1 e player2,
     *  e caso nao atualiza os scoresboard e armazena o valor no cache correspondente ao score board
     * @param {group} p1_score_board referencia do scoreboard do player1
     * @param {Array} p1_chached_score_board Valor em cache do array dos frames do scoreboard do player1
     * @param {group} p2_score_board Referencia do scoreboard do player2
     * @param {Array} p2_cached_score_board Valor em cache do array de frames do scoreboard do player2
     * @param {int} p1_current_score Pontuacao atual do player1
     * @param {int} p2_current_score Pontuacao atual do player2
     * 
     */
    update_both_score_boards(p1_score_board, p1_chached_score_board, p2_score_board, p2_cached_score_board, p1_current_score, p2_current_score) {
        if (!this.compare_current_score_to_scoreboard(p1_current_score, p1_chached_score_board)) {
            let p1_current_score_frames = this.convert_to_frame_number(this.convert_integer_to_array(p1_current_score));
            this.update_p1_score_board(p1_score_board, p1_current_score_frames);
            this.set_cache_p1_score_board(p1_score_board);
        }
        if (!this.compare_current_score_to_scoreboard(p2_current_score, p2_cached_score_board)) {
            let p2_current_score_frames = this.convert_to_frame_number(this.convert_integer_to_array(p2_current_score));
            this.update_p2_score_board(p2_score_board, p2_current_score_frames);
            this.set_cache_p2_score_board(p2_score_board);
        }
    }
}