# Trabalho Final de Desenvolvimento de Jogos

[Jogue aqui](https://gmbrax.github.io/Trabalho-Final-Games/)

## Sobre
Projeto Final para a matéria de Desenvolvimento de Games da Faculdade UniAcademia
## Requerimentos
O único requerimento é para a geração da documentação que é necessário ter a ferramenta JSDoc.
### Phaser.js
A biblioteca necessária do phaser.js está na pasta lib, e está disponivel em duas versões, a normal e a minificado.
para desenvolvimento é melhor utilizar a versão não minificada e so mudar para a minificada quando for feito a versão de entrega.


## Documentação
É requerido que os codigos sejam documentados usando comentários no estilo JSDocs para a geração de documentação do codigo feito.
Os comentários seguem o seguinte padrão:
```javascript
/**
 * 
 * @author Nome do Candango que fez o código
 * @class
 * @classdesc Descrição da Classe
 * 
 */
class classe{
    /**
     * 
     * @constructs
     * Descrição do construtor da classe
     * @param {type} nome_parametro - Descreva aqui aqui o que o parametro é
     * 
     */
    constructor(nome_parametro){
        this.atributo = nome_parametro; 
    }
    /**
     * @description Descreva o que o metodo faz
     * @returns Descreva o que a função retorna (omita essa opção caso não retorne)
     * @todo Adicione uma tarefa caso seja necessário que algo seja concertado ou modiificado
     */
    method_name(){}

}

```
Para todos os comando disponiveis por favor visite: https://jsdoc.app/
Para mais informações leia o README.md dentro da pasta doc.


