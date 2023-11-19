import game_config from './game_config.js'

/**
 * @file Arquivo Principal do jogo
 * @version 0.0.1
 * @author Gustavo Henrique S. S. de Miranda, Igor Fernandes, Matheus Silveira Polesca, Laura Castro
 */



/** Para o jogo funcionar se cria um objeto da classe game_config e logo após se chama
 * a função initialize
 * @member {game_config}
 * @todo separar as classes em arquivos individuais
 * 
 */
var main_config = new game_config(1024, 768);
main_config.initialize();
