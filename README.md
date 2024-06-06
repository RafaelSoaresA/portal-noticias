
## Projeto Portal Novo Notícias
Bem-vindo(a) ao Portal Novo Notícias!

Para rodar a aplicação é necessário:
- Abrir o ZIP do projeto;
- Executar na IDE, de preferência o VSCode;
##
Após isso, utilize o comando:
```
npm install
```
Para instalar as dependências dentro do projeto!
Após isso, é só executar o projeto utilizando o comando:
```
npm run dev
```

Abra o seguinte link: [http://localhost:3000](http://localhost:3000). Neste link é possível utilizar a aplicação.


## Funcionalidades:

A aplicação até o presente momento consome a API do New York Times, utilizando apenas as "Top Stories" que aparecem na Home quando abrimos o site oficial do jornal.

Ao que foi proposto no desafio, ele está completo, mas ainda é um projeto em processo de desenvolvimento, que pretendo atualizar as funcionalidades presentes na Header do projeto (filtro por categorias e login) como um desafio pessoal.

O atual projeto possui em sua tela inicial elementos de imagem, texto, autor e data de publicação para cada uma das matérias.
Ao clicar na imagem ou no texto abstrato da matéria, é aberto um Modal ao invés de uma página nova, o que deixa mais "clean" para utilizar enquanto não possuímos o texto completo de cada matéria.
No modal temos as mesmas informações que na tela principal, porém, existe a opção de clicar em um botão que redireciona para a matéria no site oficial do New York Times, sendo assim uma forma de trazer a informação completa.

