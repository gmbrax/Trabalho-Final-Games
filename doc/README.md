# Guia de Documentação
A documentação é gerada via JSDoc usando a sintaxe mencionada no README.md principal.
## Sobre documentar
é pedido que o código seja documentado para melhor entedimento.
Para isso deve-se usar a sintaxe do JSDoc para que seja adicionado as informações sobre o que foi adicionado

## Sobre o arquivo de configuração
Não se deve editar o arquivo nomeado ```conf.json``` pois o mesmo contém a configuração de como é feito a geração de documentação.

## Como gerar a documentação
Para gerar a documentação basta seguir os seguintes passos:
- Mude para a pasta docs usando o comando: ```cd doc```
- dentro da pasta execute o comando: ```jsdoc -c conf.json```

## Como Acessar a documentação gerada
Assim como o jogo para acessar utilize:http://localhost:porta_liveserver/doc e automaticamente será exibido a documentação que foi gerada, porém para isso antes deve-se gerar usando as instruções dada acima