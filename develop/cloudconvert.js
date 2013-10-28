/**!
 * @license
 */
(function () {

    var E = '',
        API_URL_PROCESS = "https://api.cloudconvert.org/process",
        request = require("request"),
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
            }, function (error, response) {
                if (!error && response.statusCode === 200) {
                    if (typeof processStartCallback === "function") {
                        // do stuffs here
                    }
                }
            });
        }
    };
    Converter.prototype.constructor = Converter;


    module && (module.exports = {
        Converter: Converter
    });

}());