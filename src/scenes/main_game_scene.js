/**
 * @file Arquivo  contendo a cena principal do jogo 
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda
/**
 * 
 * @class 
 * @classdesc Essa classe é a cena principal do jogo
 * @author Gustavo Henrique S. S. Miranda
 */
class main_game_scene extends Phaser.Scene{
    
     /**
     * @constructs main_game_scene
     * Esse construtor inicia a cena principal do jogo 
     */
    constructor(){
        super({key:'main'});

    }
    /**
     * @description Essa função carrega para a memoria os recursos da cena.
     */
    preload(){
        this.load.image('paddle_white','../../assets/images/Paddle_White.png');
        this.load.image('divider_black','../../assets/images/Divider_Black.png');
        this.load.image('ball_white',   '../../assets/images/Ball_White.png');
        this.load.spritesheet("Number_Font_White","../../assets/images/Number_Font_White.png",{frameWidth:40,frameHeight:80,spacing:21});

    }
        /**
     * @description Essa função cria os recursos usados na cena
     */
    create(){
        this.add.sprite(45,390,'paddle_white');
        this.add.sprite(975,390, 'paddle_white');
        this.add.sprite(510,390, 'divider_black');
        this.add.sprite(390,390, 'ball_white');
        this.add.sprite(174,160,'Number_Font_White',9);
        this.add.sprite(234,160,'Number_Font_White',9);
        this.add.sprite(294,160,'Number_Font_White',9);
        this.add.sprite(690,160,'Number_Font_White',9);
        this.add.sprite(750,160,'Number_Font_White',9);
        this.add.sprite(810,160,'Number_Font_White',9);
        
    }
}