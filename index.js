/**
 * handlebars-helper-sri
 *     SRI attribute injector
 */

"use strict";

module.exports.register = function (Handlebars, subresource) {
    subresource = subresource || require("subresource");

    Handlebars.registerHelper("sri", function (filePath, property) {
        var resource = subresource(filePath);

        // Default to integrity attribute
        if (typeof property !== "string") {
            property = "integrity";
        }

        // Static property
        return resource[property];
    });

    return Handlebars;
};
