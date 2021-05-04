htmlParserHelper = require('../helpers/htmlparser.js');

exports.parseHtmlContent = (req, res) => {

    htmlParserHelper.parseContent(req, res, function(content){
      
       res.send({ content: content });

    });
    

} // end parseContent