var HTMLParser = require('node-html-parser');

const queroAboutUsUrl = "https://sobre.quero.com/";
const queroExternalPage = "https://sobre.cliente.quero.com/";
var content, aTags;
var output = [];

exports.parseContent = (req, res, callback) => {

    for (let i = 0; i < (req.body.pages).length; i++) {

        content = HTMLParser.parse((req.body.pages)[i].conteudo);

        aTags = content.querySelectorAll('a');

        aTags[0].setAttribute('href', queroAboutUsUrl);

        aTags[1].setAttribute('href', queroExternalPage);

        output.push({
            id: req.body.pages[i].id,
            nome: req.body.pages[i].nome,
            link_original: req.body.pages[i].link_original,
            conteudo: content.toString(),
            data_criacao: req.body.pages[i].data_criacao
        });

    } // end for

    callback(output);

} // end parseContent