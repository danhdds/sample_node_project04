# sample_node_project04
This is a simple api to demonstrate html parse using node.

# To install a local version

1 - Clone this repository
2 - run the commands:
npm install
npm start

# How to post

1 - I suggest the use of postman to test this API

https://www.postman.com/

2 - Post to this url:

https://simple-html-parse-api.herokuapp.com/

3 - Post Example:

`{ "pages": [{ "id": "001", "nome": "geek", "link_original": "http://domain.com", "conteudo": "<html><head><head><body><h1>titulo</h1><p>...<a href='www.pagina_original.com.br/sobre'>sobre nós</a>...</p><p>...<a href='www.pagina_externa.com.br/sobre'>sobre nós</a>...</p></body></html>", "data_criacao": "04/05/2021" }, { "id": "002", "nome": "nerd", "link_original": "http://domain.test.com", "conteudo": "<html><head></head><body><h1>titulo 2</h1><p>...<a href='www.pagina_original2.com.br/sobre'>sobre nós</a>...</p><p>...<a href='www.pagina_externa2.com.br/sobre'>sobre nós</a>...</p></body></html>", "data_criacao": "04/05/2021"}]}`

4 - Response Example:

`{"pages":[{"id":"001","nome":"geek","link_original":"http://domain.com","conteudo":"<html><head></head><body><h1>titulo</h1><p>...<a href=\"https://sobre.quero.com/\">sobre nós</a>...</p><p>...<a href=\"https://sobre.cliente.quero.com/\">sobre nós</a>...</p></body></html>","data_criacao":"04/05/2021"},{"id":"002","nome":"nerd","link_original":"http://domain.test.com","conteudo":"<html><head></head><body><h1>titulo 2</h1><p>...<a href=\"https://sobre.quero.com/\">sobre nós</a>...</p><p>...<a href=\"https://sobre.cliente.quero.com/\">sobre nós</a>...</p></body></html>","data_criacao":"04/05/2021"}]}`
