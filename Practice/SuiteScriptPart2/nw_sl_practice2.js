/**
 *@NApiVersion 2.0
 *@NScriptType Suitelet
 */
define([], function() {

var LOG_TITLE = "Practice2_";

    function onRequest(context) {
        log.debug(LOG_TITLE, "Message");
    }

    return {
        onRequest: onRequest
    }
});
