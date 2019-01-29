/**
 *@NApiVersion 2.0
 *@NScriptType Suitelet
 */
define([], function() {

    var LOG_TITE = "Practice1_";

    function onRequest(context) {
        log.debug(LOG_TITE, 'Test1'); // Param 1 -> Tag , Param 2 -> Message
    }

    return {
        onRequest: onRequest
    }
});
