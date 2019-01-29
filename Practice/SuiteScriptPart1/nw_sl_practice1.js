/**
 *@NApiVersion 2.0
 *@NScriptType Suitelet
 */
define([], function() {

    var LOG_TITE = "Practice1_";

    function onRequest(context) {
        log.debug(LOG_TITE, 'Test1'); // ParamTag 1 -> Tag , ParamMessage 2 -> Message
    }

    return {
        onRequest: onRequest
    }
});
