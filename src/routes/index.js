htmlParserController = require('../controllers/htmlParserController.js')

exports.appRouter = router => {

    // to change to post to receive the content, parse and send back
    router.post('/', htmlParserController.parseHtmlContent);

} // end appRouter