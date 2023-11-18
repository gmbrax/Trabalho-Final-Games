/**
 * @file Arquivo Principal do jogo
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda, Igor Fernandes, Matheus Silveira Polesca, Laura Cardoso
 */

/**
 * 
 * @author Gustavo Henrique Santos Souza de Miranda
 * @class
 * @classdesc Essa classe contem as informações do jogo atual, como pontuação de cada jogador
 * 
 */
class game_context{

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @constructs
     * Esse Construtor define as pontuações do jogadores de forma global
     */
    constructor(){
        this.player1_score = 0;
        this.player2_score = 0;
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função retorna a pontuação atual do player1.
     * @returns Returna um inteiro com o valor da pontuação do player1.
     * 
     */
    get_player1_score(){
        return this.player1_score;
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função retorna a pontuação atual do player2.
     * @returns Returna um inteiro com o valor da pontuação do player2.
     * 
     */
    get_player2_score(){
        return this.player2_score;
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função recebe um valor inteiro e o define como a pontuação atual do player1.
     * @param {int} value Inteiro a ser usado como o novo valor para a pontuação do player1;
     * 
     */
    set_player1_score(value){
        this.player1_score = value;
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função recebe um valor inteiro e o define como a pontuação atual do player2.
     * @param {int} value Inteiro a ser usado como o novo valor para a pontuação do player2;
     * 
     */
    set_player2_score(value){
        this.player2_score = value;
    }
}

/**
 * @author Gustavo Henrique S. S. Miranda
 * @class 
 * @classdesc Essa classe contem os dados referentes a como é feito o escaleamento do jogo e a posição de onde o jogo será renderizado.
 */

class game_scaler{
        /**
     * @constructs
     * Esse construtor define as opções de escaleamento e posicionamento do jogo
     */
    constructor(){
        this.mode = Phaser.Scale.FIT;
        this.autocenter = Phaser.Scale.CENTER_BOTH;
    }

    /**
     * @description Essa Função cria apartir dos atributos da classe um objeto contendo os dados de escala para ser passado para o inicializador do Phaser.js
     * @returns Retorna um objeto contendo os atributos da classe
     */
    make_scale_object(){
        return {mode:this.mode,autoCenter:this.autocenter}
    }
}

/**
 * @author Gustavo Henrique S. S. Miranda
 * @class 
 * @classdesc Essa classe contem as configurações de fisica para o jogo.
 */

class game_physics{
        /**
     * @constructs
     * Esse construtor define a configuração básica de fisica para o jogo.
     */
    constructor(){
        this.default = 'arcade';
        this.physicsDebug = true;
    }
    /**
     * @description Essa Função cria apartir dos atributos da classe um objeto contendo as configuraçõe de fisica para ser passado para o inicializador do Phaser.js
     * @returns Retorna um objeto contendo os atributos da classe
     */
    make_physics_object(){
        var returnobject = {}
        returnobject["default"] = this.default;
        returnobject[this.default] = {};
        returnobject[this.default]["debug"] = this.physicsDebug;

        return returnobject;

    }
}


/**
 * @author Gustavo Henrique S. S. Miranda
 * @class 
 * @classdesc Essa classe inicializa as configurações básicas necessárias para poder iniciar o funcionamento do 
 * Phaser.js  
 */

class game_config{
    /**
     * @constructs
     * Esse construtor recebe a dimensões da tela a ser criada pelo Phaser.JS.
     * @param {int} width  - Largura da tela do jogo 
     * @param {int} height Altura da tela do jogo
     */
    constructor(width,height){
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
    initialize(){
        this.game = new Phaser.Game(this.make_config_object());
        this.scene[0].set_parent_class_callback(this)
    }
    /**
     * @description Essa Função cria apartir dos atributos da classe um objeto para ser passado para o inicializador do Phaser.js
     * @returns Retorna um objeto contendo os atributos da classe necessárias para o Phaser.js
     */
    make_config_object(){
        console.log(this.physics.make_physics_object());
        return {
            type:this.type,
            width:this.width,
            height:this.height,
            scene:this.scene,
            physics:this.physics.make_physics_object(),
            scale:this.scale.make_scale_object()
            
        }
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função encapsula a função de mesmo nome do game_context, onde é retornado a pontução do player1.
     * @returns Returna um inteiro com o valor da pontuação do player1.
     * 
     */
    get_player1_score(){
        return this.context.get_player1_score()
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função encapsula a função de mesmo nome do game_context, onde é retornado a pontução do player2.
     * @returns Returna um inteiro com o valor da pontuação do player2.
     * 
     */
    get_player2_score(){
        return this.context.get_player2_score();
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função encapsula a função de mesmo do game_context, aonde se recebe um valor inteiro e o define como a pontuação atual do player1.
     * @param {int} value Inteiro a ser usado como o novo valor para a pontuação do player1;
     * 
     */
    set_player1_score(value){
        this.context.set_player1_score(value);
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função encapsula a função de mesmo do game_context, aonde se recebe um valor inteiro e o define como a pontuação atual do player2.
     * @param {int} value Inteiro a ser usado como o novo valor para a pontuação do player2;
     * 
     */
    set_player2_score(value){
        this.context.set_player2_score(value);
    }


}

/** Para o jogo funcionar se cria um objeto da classe game_config e logo após se chama
 * a função initialize
 * @member {game_config}
 * @todo separar as classes em arquivos individuais
 * 
 */
var main_config = new game_config(1024,768);
main_config.initialize();
