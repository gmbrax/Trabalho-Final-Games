/**
 * @file Arquivo Principal do jogo
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda, Igor Fernandes, Matheus Silveira Polesca, Laura Cardoso
 */

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
        this.type = Phaser.AUTO;
        this.width = width;
        this.height = height;
        this.game = null;

    }
    /**
     * @description Essa função inicializa a biblioteca Phaser.js apartir dos atributos da classe.
     */
    initialize(){
        this.game = new Phaser.Game(this.make_config_object());
    }
    /**
     * @description Essa Função cria apartir dos atributos da classe um objeto para ser passado para o inicializador do Phaser.js
     * @returns Retorna um objeto contendo os atributos da classe e as funções necessárias para o Phaser.js
     */
    make_config_object(){
        return {
            type:this.type,
            width:this.width,
            height:this.height,
            scene:{
                preload:this.preload,
                create:this.create,
                update:this.update
            }
        }
    }
    /**
     * @description Função que carrega à memoria todas recursos necessários do jogo.
     * @todo implementar essa função
     */
    preload(){}
      /**
     * @description Função que cria os recursos  do jogo.
     * @todo implementar essa função
     */
    create(){}
      /**
     * @description Função que atualiza os recursos e objetos do jogo dentro do loop do jogo
     * @todo implementar essa função
     */
    update(){}

}

/** Para o jogo funcionar se cria um objeto da classe game_config e logo após se chama
 * a função initialize
 * @member {game_config}
 */
var main_config = new game_config(1024,768);
main_config.initialize();
