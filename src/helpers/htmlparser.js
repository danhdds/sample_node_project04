var HTMLParser = require('node-html-parser');

exports.parseContent = (req, res, callback) => {

    var content = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');

    content = content.toString();

    callback(content);
    

} // end parseContent