/**
 * @file Arquivo Principal do jogo
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda, Igor Fernandes, Matheus Silveira Polesca, Laura Cardoso
 */

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
        this.physics = new game_physics();
        this.scale = new game_scaler();

    }
    /**
     * @description Essa função inicializa a biblioteca Phaser.js apartir dos atributos da classe.
     */
    initialize(){
        this.game = new Phaser.Game(this.make_config_object());
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
            scene:[main_game_scene],
            physics:this.physics.make_physics_object(),
            scale:this.scale.make_scale_object()
            
        }
    }


}

/** Para o jogo funcionar se cria um objeto da classe game_config e logo após se chama
 * a função initialize
 * @member {game_config}
 */
var main_config = new game_config(1024,768);
main_config.initialize();
