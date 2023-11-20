/**
 * @file Arquivo Contendo a classe de configuração do escaleamento do jogo
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda,
 */ 

/**
 * @author Gustavo Henrique S. S. Miranda
 * @class 
 * @classdesc Essa classe contem os dados referentes a como é feito o escaleamento do jogo e a posição de onde o jogo será renderizado.
 */

class game_scaler {
    /**
 * @constructs
 * Esse construtor define as opções de escaleamento e posicionamento do jogo
 */
    constructor() {
        this.mode = Phaser.Scale.FIT;
        this.autocenter = Phaser.Scale.CENTER_BOTH;
    }

    /**
     * @description Essa Função cria apartir dos atributos da classe um objeto contendo os dados de escala para ser passado para o inicializador do Phaser.js
     * @returns Retorna um objeto contendo os atributos da classe
     */
    make_scale_object() {
        return { mode: this.mode, autoCenter: this.autocenter }
    }
}

export default game_scaler;