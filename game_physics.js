
/**
 * @author Gustavo Henrique S. S. Miranda
 * @class 
 * @classdesc Essa classe contem as configurações de fisica para o jogo.
 */

class game_physics {
    /**
 * @constructs
 * Esse construtor define a configuração básica de fisica para o jogo.
 */
    constructor() {
        this.default = 'arcade';
        this.physicsDebug = true;
    }
    /**
     * @description Essa Função cria apartir dos atributos da classe um objeto contendo as configuraçõe de fisica para ser passado para o inicializador do Phaser.js
     * @returns Retorna um objeto contendo os atributos da classe
     */
    make_physics_object() {
        var returnobject = {}
        returnobject["default"] = this.default;
        returnobject[this.default] = {};
        returnobject[this.default]["debug"] = this.physicsDebug;

        return returnobject;

    }
}

export default game_physics;