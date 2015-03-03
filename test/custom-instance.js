"use strict";

var assert = require("assert"),
    fs = require("fs"),
    handlebars = require("handlebars"),

    filePath = "./test/jquery-1.10.2.min.js.testdata",
    customSubresource;

customSubresource = function () {
    return {
        integrity: "hello world"
    };
};

// Attach custom handler
handlebars = require("../index.js").register(handlebars, customSubresource);

it("Custom subresource instance", function () {
    var expect = "hello world";
    var result = handlebars.compile("{{sri 123}}")();

    assert.equal(expect, result);
});
