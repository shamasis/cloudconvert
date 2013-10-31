/**!
 * @license Node wrapper for API of cloudconvert.org
 * Copyright (c) 2013 Shamasis Bhattacharya <mail@shamasis.net>
 */

/* global window: true, require: true, escape: true */
(function () {

    var E = "",
        UNDEFINED = "undefined",
        POST = "POST",
        API_URL_PROCESS = "https://api.cloudconvert.org/process",
        API_HEADER_NAME = "X-CloudConvert-ApiKey",
        TEXT_MIME = "text/plain",

        XMLHttpRequest = (typeof window === UNDEFINED ?
            (require && require("xmlhttprequest").XMLHttpRequest) : window.XMLHttpRequest),
        Converter; // class

    /**
     * Converter class
     * @constructor
     *
     * @param {!string} apiKey - API key from cloudconvert.org
     */
    Converter = function (apiKey) {

        apiKey = (apiKey || E) + E;
        /**
         * Get the API key set during instantiating the converted.
         * returns {string}
         */
        this.apiKey = function () {
            return apiKey;
        };

        this.processCount = 0;
    };

    Converter.prototype = /** @lends Converter @instance */ {
        start: function (inputFormat, outputFormat) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (this.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                    /* console.log(this.responseText); */
                    this.processCount++;
                }
            };

            if (xhr.overrideMimeType) {
                xhr.overrideMimeType(TEXT_MIME);
            }

            // Open XHR connection to send POST data.
            xhr.open(POST, API_URL_PROCESS);
            // Set the cloundconvert API key as AJAX header.
            xhr.setRequestHeader(API_HEADER_NAME, this.apiKey());
            xhr.send(["inputformat=", escape(inputFormat), "&outputformat=", escape(outputFormat)].join(E));
        }
    };
    Converter.prototype.constructor = Converter;


    (module || window).exports = {
        Converter: Converter
    };

}());