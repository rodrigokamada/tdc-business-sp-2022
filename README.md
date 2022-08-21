# TDC Business SP 2022

Repositório utilizado no evento TDC Business com o tema _API REST em Node.js: Boas práticas em produção_.



## Pré-requisitos

* [git](https://git-scm.com/)
* [Node.js e npm](https://nodejs.org/)
* IDE (por exemplo [Visual Studio Code](https://code.visualstudio.com/)
* [Docker e Docker Compose](https://www.docker.com/)



## Início

**1.** Clonar o repositório.

```shell
git clone git@github.com:rodrigokamada/tdc-business-sp-2022.git
```

**2.** Instalar as dependências.

```shell
npm install
```

**3.** Executar o lint.

```shell
npm run lint
```

**4.** Executar a aplicação usando o [Nodemon](https://nodemon.io/).

```shell
npm run start:dev
```



## Testes

### Testes automáticos

**1.** Executar os testes.

```shell
npm test
```


### Testes manuais

**1.** Fazer uma requisição na aplicação para listar os livros.

```shell
curl -v "http://localhost:3000/v1/books"
```

**2.** Fazer uma requisição na aplicação para criar um livro.

```shell
curl -v -X POST "http://localhost:3000/v1/books" \
-H "content-type: application/json" \
-d '{
  "title": "Some title",
  "author": "Some author"
}'
```

**3.** Fazer uma requisição na aplicação para alterar um livro.

```shell
curl -v -X PUT "http://localhost:3000/v1/books/ID" \
-H "content-type: application/json" \
-d '{
  "title": "Some title 2",
  "author": "Some author 2"
}'
```

**4.** Fazer uma requisição na aplicação para apagar um livro.

```shell
curl -v -X DELETE "http://localhost:3000/v1/books/ID"
```



## Transpilação

**1.** Compilar/transpilar a aplicação.

```shell
npm run build
```
