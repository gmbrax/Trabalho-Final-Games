# Trabalho Final de Desenvolvimento de Jogos
## Sobre
Projeto Final para a matéria de Desenvolvimento de Games da Faculdade UniAcademia
## Requerimentos
O único requerimento é para a geração da documentação que é necessário ter a ferramenta Doxygen.
### Phaser.js
A biblioteca necessária do phaser.js está na pasta lib, e está disponivel em duas versões, a normal e a minificado.
para desenvolvimento é melhor utilizar a versão não minificada e so mudar para a minificada quando for feito a versão de entrega.


## Documentação
É requerido que os codigos sejam documentados usando comentários no estilo doxygen para a geração de documentação do codigo feito.
O padrão doxygen segue o seguinte padrão:
```javascript

/**
 * @file Este é um arquivo JavaScript de exemplo para comentários Doxygen.
 */

/**
 * @function
 * @description Esta é uma função de exemplo que soma dois números.
 *
 * @param {number} a - O primeiro número a ser somado.
 * @param {number} b - O segundo número a ser somado.
 * @returns {number} A soma dos dois números.
 */
function somarNumeros(a, b) {
  return a + b;
}

/**
 * @class
 * @classdesc Esta é uma classe de exemplo para comentários Doxygen.
 */
class MinhaClasse {
  /**
   * @constructor
   * @param {string} nome - O nome da instância.
   */
  constructor(nome) {
    this.nome = nome;
  }

  /**
   * @method
   * @description Este método cumprimenta o usuário pelo nome.
   *
   * @param {string} saudacao - A mensagem de saudação.
   * @returns {string} A mensagem de saudação completa.
   */
  cumprimentar(saudacao) {
    return `${saudacao}, ${this.nome}!`;
  }
}

/**
 * @var
 * @description Esta é uma variável de exemplo para armazenar um valor de configuração.
 *
 * @type {object}
 */
const configuracao = {
  apiKey: 'sua-chave-de-api',
  modoDebug: true,
};


```
Para mais informações leia o README.md dentro da pasta doc.


