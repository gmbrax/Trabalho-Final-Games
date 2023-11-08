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
        this.load.image('divider_black','../../assets/images/Divider_Black.png')

    }
        /**
     * @description Essa função cria os recursos usados na cena
     */
    create(){
        this.add.sprite(510,390, 'divider_black');

    }
}