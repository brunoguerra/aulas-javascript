Eu utilizo o [VS-Code](https://code.visualstudio.com/Download), é rapido é simples <del>é barato</del> é de graça. Com varios plugins para turbinar ele.  
 
## Vamos lá.... FAZER:
  - (1) Faça uma mensagem de **'Olá Mundo'**.... [Exemplo: 'Olá Mundo'](https://github.com/gabrieldarezzo/helpjs-ravi#exemplos)
  - (2) Faça essa mensagem em um arquivo javascript externo e chame ela... **([Importado](https://github.com/gabrieldarezzo/helpjs-ravi#importado))**
  - (3) Faça uma saída de soma de 2 inteiros, ex: alert(2 + 2) - [Somar dois Inteiros](https://github.com/gabrieldarezzo/helpjs-ravi#exemplo-de-alert--sa%C3%ADda--output-de-uma-soma-de-dois-inteiros-22)
  - (4) No HTML Crie:
```
1 - Campo/Input do tipo text para preencher o nome completo.
1 - Botão com o texto: 'Exibir Nome' e ao clicar neste botão é exibido um alert com o valor do campo nome completo, ex: ' O Nome Completo é: "xxxx". '
```   
  [Monitorando-Click](https://github.com/gabrieldarezzo/helpjs-ravi#monitorando-um-evento-click)  
  [Exibir o nome ao clicar](https://github.com/gabrieldarezzo/helpjs-ravi#exibir-o-nome-ao-clicar)  

  - (5) exiba a quantidade de letras que possuem o texto inserido ao clicar no botão
```
Exemplos de entrada e saida:
'Gabriel' // 7
'Daniel' // 6
'Ronaldo' // 6
'Dennis Ritchie' // 14 (Espaço conta)
```  

  - (6) No seu HTML exiba a imagem de uma lampada, ao clicar em cima da lampada, troque o src dela para a lampada que está acessa.
  ```
  //SRC da Lampada (apagada)  
  https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true  

  //SRC da Lampada (acessa)  
  https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true
  ```  
  ... - [Alterar-Src de Img](https://github.com/gabrieldarezzo/helpjs-ravi#alterar-um-atributo-do-html)   


  - (7) Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover', ao passar o mouse em cima da 'lampada.jpg' altere ela para 'lampada-on.jpg' (Exemplo abaixo).
  - (7a) Faça 2 campos no HTML chamados: 'Nome', 'Sobrenome' e um botão 'Saudação'; ao clicar no botão exibir um alert: 'Olá {NOME} {SOBRENOME}'
  - (8) Crie um campo texto parar preencher um CPF `<input maxlength="11" id="cpf" />`, e exiba ao lado com pontuação conforme preencher 
  - (9) Preencha um CPF com pontuação `<input maxlength="14" id="cpfPoint" />` e no campo ao lado exiba sem pontuação.  
  - (10) No HTML Crie:
```
2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
1 x - Botão (id=btn-soma)
1 x - Campo (id=resultado-soma)

Caso esteja preenchido um valor númerico nos dois campos(id=soma1, id=soma2), 
O resultado da soma devera aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).
```   
  - (12) Faça um comentário de uma linha no JavaScript no exercicio anterior
  - (12.a) Crie dois botões no HTML chamados: 'Verde', ,'Vermelho'. ao clicar neles, o style="background-color: {COR-SELECIONADA}" vai ser alterado dinamicamente [Alterar-Style de uma div](https://github.com/gabrieldarezzo/helpjs-ravi#alterar-style-div)   
  - (13) Faça um comentário de varias linhas no JavaScript no exercicio anterior do CPF.
  - (14) Crie uma div vazia cujo o id dela é 'resultado'
Insira via JavaScript assim que a tela carregar o seguinte texto: 'Esse texto foi inserido pelo JavaScript...' ['Exemplo de "window.onload"'](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onload#Exemplos)  
  - (15) Agora crie um botão que ao ser clicado faça a mesma ação do exercício anterior.
  - (16) Crie uma função que recebe 2 parâmetros e retorna a soma deles. (e utilize no exercicio 10)
  - (17) Crie uma função que recebe 2 parâmetros e retorna a soma deles, porem caso seja passado um parâmetro vazio ela retorne zero.
  - (18) Exiba o 'resto' da seguinte divisão: (5 / 2)
  - (19) Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.
  - (20) Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles. 
  - (21) Crie uma função que calcula 5% de desconto retornando o valor do desconto.
  - (22) Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
  - (23) Dentro da div com o id 'resultado', escreva 1x ('Repetição'). @dica 'innerHTML', ``` el.innerHTML = 'Repetição'; ```
  - (24) Dentro da div com o id 'resultado', escreva 2x ('Repetição').
  - (25) Dentro da div com o id 'resultado', escreva 20x ('Repetição'). (use o 'for' pelo amor de deus)
  - (26) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com forEach)
  - (27) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while)
  - (28) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while) 
  - (29) Dentro da div com o id 'resultado', escreva os números de 0 ~ 10 (escolha uma das opções acima)
  - (30) Dentro da div com o id 'resultado', escreva os números pares até 20... (ex 2,4,6...20)
  - (31) Ok... chega de for(), mentira / #SQN... Exiba a tabuada do 1 até o 10 (for dentro de for?) (caso você escreva de forma manual.. eu vou te bater HSUAHASHUAS)


# Exercício REACT

1) Faça um componente que exiba "Olá Mundo"

2) Faça um componente que use um componente por 10 vezes, esse diga Olá Mundo N, onde n é o indice dele