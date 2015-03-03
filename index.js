/**
 * handlebars-helper-sri
 *     SRI attribute injector
 */

"use strict";

module.exports.register = function (Handlebars, subresource) {
    subresource = subresource || require("subresource");

    // Varidac function
    Handlebars.registerHelper("sri", function (filePath) {
        var resource = subresource(filePath);

        // Default to integrity.
        // Handlebars will attach an object as the last argument - ignore it!
        if (arguments.length <= 2) {
            return resource.integrity;
        }

        // Grab an array of arguments, after filePath
        var properties = [].slice.call(arguments, 1);
        properties.pop(); // Ignore handlebars' argument

        // Dig down through resource properties
        // e.g. return resource[arg1][arg2][arg3][arg4];
        return properties.reduce(function (child, property) {
            return child[property];
        }, resource);
    });

    return Handlebars;
};
