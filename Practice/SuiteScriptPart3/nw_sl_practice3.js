/**
 *@NApiVersion 2.0
 *@NScriptType Suitelet
 */
define(['N/file'], function(file) {

    function onRequest(context) {

        var LOG_TITLE = "Practice 3_";

        var content = "Testing content goes in here";
        
        var fileObj = file.create({
            name: 'outputFile.txt', // Output file name
            fileType: file.Type.PLAINTEXT,
            contents: content, // File content
            description: 'file description', // File description
            encoding: file.Encoding.UTF8,
            folder: 11042, // Folder internel ID
            isOnline: true
        });
        
        var idCsv = fileObj.save();

        log.debug(LOG_TITLE, idCsv);

    }

    return {
        onRequest: onRequest
    }
});
