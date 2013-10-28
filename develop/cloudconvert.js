/**!
 * @license
 */
(function () {

    var E = "",
        API_URL_PROCESS = "https://api.cloudconvert.org/process",

        events = require('events'),
        request = require('request'),
        querystring = require('querystring'),

        Converter; // class

    /**
     * Converter class
     * @constructor
     *
     * @param {!string} apiKey - API key from cloudconvert.org
     */
    Converter = function (apiKey) {


        apiKey = apiKey + E;
        /**
         * Get the API key set during instantiating the converted.
         * returns {string}
         */
        this.apiKey = function () {
            return apiKey;
        };
    };

    Converter.prototype = /** @lends Converter# */ {
        start: function (processStartCallback, inputFormat, outputFormat) {
            request({
                uri: API_URL_PROCESS,
                qs: {
                    inputformat: inputFormat,
                    outputformat: outputFormat
                },
                headers: {
                    "X-CloudConvert-ApiKey": this.apiKey()
                }
            }, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    if (typeof processStartCallback === "function") {
                        processStartCallback(new Process(JSON.parse(response).url));
                    }
                }
            });
        }
    };
    Converter.prototype.constructor = Converter;



    var apiKey,
    Process = function (url) {
        var processId = url.substr(url.lastIndexOf("/"));
        this.id = function () {
            return processId;
        };


    };
    Process.prototype = /** @lends Process# */ {
        cancel: function () {},
        status: function () {}
    };
    Process.prototype.constructor = Process;

    module && (module.exports = {
        Converter: Converter
    });

}());