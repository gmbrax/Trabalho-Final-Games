
/**
 * 
 * @author Gustavo Henrique Santos Souza de Miranda
 * @class
 * @classdesc Essa classe contem as informações do jogo atual, como pontuação de cada jogador
 * 
 */
class game_context {

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @constructs
     * Esse Construtor define as pontuações do jogadores de forma global
     */
    constructor() {
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
    get_player1_score() {
        return this.player1_score;
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função retorna a pontuação atual do player2.
     * @returns Returna um inteiro com o valor da pontuação do player2.
     * 
     */
    get_player2_score() {
        return this.player2_score;
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função recebe um valor inteiro e o define como a pontuação atual do player1.
     * @param {int} value Inteiro a ser usado como o novo valor para a pontuação do player1;
     * 
     */
    set_player1_score(value) {
        this.player1_score = value;
    }

    /**
     * 
     * @author Gustavo Henrique Santos Souza de Miranda
     * @description Essa função recebe um valor inteiro e o define como a pontuação atual do player2.
     * @param {int} value Inteiro a ser usado como o novo valor para a pontuação do player2;
     * 
     */
    set_player2_score(value) {
        this.player2_score = value;
    }
}


export default game_context;