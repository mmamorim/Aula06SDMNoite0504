# Aula06 SDM Noite 05/04

Este arquivo readme.md é um arquivo **markdown**

Quem quiser saber mais: [clique aqui](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open)

### Aula06 SDM Noite 05/04

# Criando uma API RESTful com NodeJS e Express

1. Após criar o repositório no gitHub....
    - Abrir terminal (git bash) em uma pasta    
    - Clonar o repositório nesta pasta local por meio do comando: 
     
    `git clone <endereço do seu repositório>`

    exemplo para clonar este repositório:

    `git clone https://github.com/mmamorim/Aula06SDMNoite0504.git`

2. Abrir a pasta com o VSCode

3. Abrir um terminal no VSCode

4. Vamos criar nosso amigo **"package.json"**

    _Ele é responsável por gerenciar diversas coisas do nosso projeto_

    `npm init`

5. Caso queiram usar o **nodemon**

    _Vimos que toda vez que alteraramos os arquivos de código, precisamos derrubar e subir novamente o servidor...caso queiram...pode-se utilizar o nodemon para monitorar os ajustes e restartar o nosso servidor. Para instalar:_

    `npm install -g nodemon@1.19.4`

6. Vamos instalar nosso amigo **express**

    `npm install express`

7. Não esqueçam de criar um arquivo chamado `.gitignore` dizendo para o git ignorar a pasta `node_modules`. Basta adicionar a linha:

    `node_modules`

8. Deixando nosso server profissa com um arquivo de **config.json**

    _Podemos criar variáveis de ambiente em um arquivo separado chamado config.json. O pacote config nos permite organizar a configuração da nossa aplicação e usar no nosso projeto._

    `npm install config`

    _Para usar, crie uma pasta chamada `config` e dentro desta pasta iremos criar um arquivo chamado_

    `default.json`

    _neste arquivo adicionamos um objeto de configuração:_

    ~~~json 
    {
        "server": {
            "port": 4000,
            "path_root": "/api/v1/"
        }
    }
    ~~~

9. Vamos codificar a inicialização do servidor usando o express:

    ~~~javascript 
    const express = require("express"); 

    const app = express();
    let port = config.get("server.port");

    app.listen(port,function() {
        console.log("Servidor iniciado e escutando na porta "+port);
    });
    ~~~