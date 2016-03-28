# StoryTeller Engine
==============
## Sobre
pequena aplicação em Nodejs + Angular + Mongoose para criação de jogos storyteller para browser.

## Como Utilizar

* criar um arquivo de configuração do banco de dados e passport com nome de dbconfig.js no diretório principal ( junto com servidor.js ), contendo as seguintes informações:
     module.exports = {
        'url' : 'mongodb://<dbuser>:<dbpassword>@ds#####.mlab.com:#####/storyteller'
        , 'secret' : 'escolha_uma_senha'
        , 'name' : 'escolha_um_nome'
    };

* atualizar os pacotes do bower e npm 

* rodar o arquivo gulpfile.js