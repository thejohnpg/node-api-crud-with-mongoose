# node-api-crud
API simples de crud em NodeJs com Operações de Inclusão, Listagem, Atualização e Remoção através dos Verbos GET, POST, PUT e DELETE com gravação de dados no Banco Mongo DB e Paginação com limite de 10 posts

# Instação
Para instalar as dependencias, entre na pasta raiz e digite 
```
"npm install"
```
O npm instalará tudo o que você precisa !!

[express](https://expressjs.com/pt-br/)
[mongoose](https://mongoosejs.com/)
[requireDir](https://www.npmjs.com/package/require-dir)
[cors](https://www.npmjs.com/package/cors)
[dotenv](https://www.npmjs.com/package/dotenv)

- Usando Banco de Dados MongoDB através do Mongoose
- Utilizei o AtlasDB (a URL com usuario e senha vai conseguir facilmente fazendo cadastro, criando uma cluster e lá está, copia e cola a url gerada pela cluster no menu "connect" e cola no arquivo server.js no lugar de process.env.URL_ACESS)
- Utilizei também o Rest Imsominia para as requisições

É algo simples para estudo, mas por incrícel que pareva, funciona 😊
Esse crud foi baseado na Api da [RocketSeat](https://github.com/Rocketseat) 
