htmlParserController = require('../controllers/htmlParserController.js')

exports.appRouter = router => {

    // to change to post to receive the content, parse and send back
    router.get('/', htmlParserController.parseHtmlContent);

} // end appRouter