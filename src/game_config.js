import game_physics from "./game_physics.js";
import game_scaler from "./game_scaler.js";
import game_context from "./game_context.js";

/**
 * @file Arquivo Contendo a classe de configuração do jogo.
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda,
 */ 

/**
 * @author Gustavo Henrique S. S. Miranda
 * @class 
 * @classdesc Essa classe inicializa as configurações básicas necessárias para poder iniciar o funcionamento do 
 * Phaser.js  
 */

class game_config {
    /**
     * @constructs
     * Esse construtor recebe a dimensões da tela a ser criada pelo Phaser.JS.
     * @param {int} width  - Largura da tela do jogo 
     * @param {int} height Altura da tela do jogo
     */
    constructor(width, height) {
        this.type = Phaser.AUTO
        this.width = width;
        this.height = height;
        this.game = null;
        this.scene = [new main_game_scene()] // Isso aqui é quase um crime mas pelo menos funciona talvez isso aqui deveria ser uma função
        this.physics = new game_physics();
        this.scale = new game_scaler();
        this.context = new game_context();

    }
    /**
     * 
     * @description Essa função inicializa a biblioteca Phaser.js apartir dos atributos da classe.
     * @todo adicionar um for loop para caso que tenha mais de uma cena
     */
    initialize() {
        this.game = new Phaser.Game(this.make_config_object());
        this.scene[0].set_parent_class_callback(this)
    }
    /**
     * @description Essa Função cria apartir dos atributos da classe um objeto para ser passado para o inicializador do Phaser.js
     * @returns Retorna um objeto contendo os atributos da classe necessárias para o Phaser.js
     */
    make_config_object() {
        console.log(this.physics.make_physics_object());
        return {
            type: this.type,
            width: this.width,
            height: this.height,
            scene: this.scene,
            physics: this.physics.make_physics_object(),
            scale: this.scale.make_scale_object()

        }
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função encapsula a função de mesmo nome do game_context, onde é retornado a pontução do player1.
     * @returns Returna um inteiro com o valor da pontuação do player1.
     * 
     */
    get_player1_score() {
        return this.context.get_player1_score()
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função encapsula a função de mesmo nome do game_context, onde é retornado a pontução do player2.
     * @returns Returna um inteiro com o valor da pontuação do player2.
     * 
     */
    get_player2_score() {
        return this.context.get_player2_score();
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função encapsula a função de mesmo do game_context, aonde se recebe um valor inteiro e o define como a pontuação atual do player1.
     * @param {int} value Inteiro a ser usado como o novo valor para a pontuação do player1;
     * 
     */
    set_player1_score(value) {
        this.context.set_player1_score(value);
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função encapsula a função de mesmo do game_context, aonde se recebe um valor inteiro e o define como a pontuação atual do player2.
     * @param {int} value Inteiro a ser usado como o novo valor para a pontuação do player2;
     * 
     */
    set_player2_score(value) {
        this.context.set_player2_score(value);
    }

}

export default game_config;