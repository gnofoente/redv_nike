# Red Ventures Front-End Test

## Como executar o projeto
1. Baixar ou clonar o repositório;
2. Abrir index.html.

## Tecnologias utilizadas
* HTML5;
* CSS3;
* Javascript;
* Node.JS para o NPM e o Gulp, a fim de automatizar tarefas de minificação e concatenação de arquivos. **\***

Foi utilizado Javascript puro, com o auxílio de um snippet de terceiro para a formatação dos valores dos produtos em valor monetário. Para o consumo do JSON, foi feita uma requisição **XHR** para a URL fornecida, onde o conteúdo foi então extraído e renderizado na **DOM**.

Para o layout responsivo, me utilizei dos conceitos de _mobile first_ para desenvolvê-lo (criando as regras para _mobile_ e utilizando as _media queries_ para adaptar o layout conforme a largura de tela aumenta), utilizando o .psd fornecido como base.

*\* Estas tecnologias foram utilizadas apenas para auxiliar o processo de desenvolvimento e não são dependências para executar o projeto.*

## Observações
Os _assets_ do projeto (css, javascript) estao minificados na pasta **public**. Para visualizá-los corretamente, acesse-os do diretório **assets**.
