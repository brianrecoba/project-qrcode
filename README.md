

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Gerador de QRCode e Senhas</h1>
  <p align="center">
<img alt="Static Badge" src="https://img.shields.io/badge/node-js?style=plastic&logo=nodedotjs&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/chalk-a?style=plastic&logo=npm">
<img alt="Static Badge" src="https://img.shields.io/badge/prompt-a?style=plastic&logo=npm&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/qrcode_terminal-a?style=plastic&logo=npm&logoColor=white">
</p>
    <p>Este é um sistema simples para gerar QR Codes ou senhas utilizando Node.js. As dependências utilizadas são: <code>chalk</code>, <code>prompt</code>, e <code>qrcode-terminal</code>.</p>

    <h2>Instalação</h2>
    <ol>
        <li>Clone o repositório:
            <pre><code>git clone https://github.com/brianrecoba/project-qrcode.git)
cd seu-repositorio</code></pre>
        </li>
        <li>Instale as dependências:
            <pre><code>npm install</code></pre>
        </li>
    </ol>

    <h2>Uso</h2>
    <ol>
        <li>Execute o script:
            <pre><code>node index.js</code></pre>
        </li>
        <li>O sistema irá perguntar se você deseja criar um QRCode ou uma senha:
            <pre><code>O que você deseja criar?
1. QRCode
2. Senha</code></pre>
        </li>
        <li>Se você selecionar QRCode, o sistema irá perguntar o link que você deseja criar:
            <pre><code>Digite o link para o QRCode:</code></pre>
        </li>
        <li>O QRCode será gerado e exibido no terminal:
            <pre><code>Aqui está o seu QRCode:
[QRCode gerado]</code></pre>
        </li>
    </ol>

    <h2>Dependências</h2>
    <ul>
        <li><a href="https://www.npmjs.com/package/chalk">chalk</a></li>
        <li><a href="https://www.npmjs.com/package/prompt">prompt</a></li>
        <li><a href="https://www.npmjs.com/package/qrcode-terminal">qrcode-terminal</a></li>
    </ul>

    <h2>Licença</h2>
    <p>Este projeto está licenciado sob a Licença MIT. Veja o arquivo <a href="LICENSE">LICENSE</a> para mais detalhes.</p>
</body>
</html>
