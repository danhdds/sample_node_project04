htmlParserHelper = require('../helpers/htmlparser.js');

exports.parseHtmlContent = (req, res) => {

    htmlParserHelper.parseContent(req, res, function(output){
      
       res.send({ pages: output });

    });
    

} // end parseContent