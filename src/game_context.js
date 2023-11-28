/**
 * @file Arquivo Contendo a classe de contexto do jog, contendo os dados dos jogadores
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda,
 */ 

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
        this.right_paddle_x;
        this.left_paddle_x;
    }

    /**
     * @description Essa função recebe um valor inteiro que é o valor da posição x do paddle da direita
     * @param {int} x valor da posição do x do paddle da direita 
     */
    set_right_paddle_x(x){
        this.right_paddle_x = x;
    }

    /**
     * 
     * @description Essa função retorna um inteiro que é o valor do x do paddle da direita
     * @returns Retorna um inteiro que é o valor do x do paddle da direita
     * 
     */
    get_right_paddle_x(){
        return this.right_paddle_x;
    }

    /**
     * 
     * @description Essa função recebe um valor inteiro que é o valor da posição x do paddle da esquerda
     * @param {int} x valor da posição do x do paddle da esquerda 
     * 
     */
    set_left_paddle_x(x){
        this.left_paddle_x = x;
    }
    
    /**
     * 
     * @description Essa função retorna um inteiro que é o valor do x do paddle da esquerda
     * @returns Retorna um inteiro que é o valor do x do paddle da esquerda
     * 
     */
    get_left_paddle_x(){
        return this.left_paddle_x;
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