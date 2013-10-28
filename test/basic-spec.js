
/**
 * The cloudconvert module directly loaded from development script
 * @type {object}
 */
var cc = require("../develop/cloudconvert.js");

describe("The `cloudconvert` module", function () {
    it ("should expose the `Converter` class", function () {
        expect(cc.Converter).toBeDefined();
    });
});