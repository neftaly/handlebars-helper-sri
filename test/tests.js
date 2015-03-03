"use strict";

var assert = require("assert"),
    fs = require("fs"),
    handlebars = require("handlebars"),

    filePath = "./test/jquery-1.10.2.min.js.testdata";

// Attach handler
handlebars = require("../index.js").register(handlebars);

describe("Standard subresource instance", function () {

    it("Default", function () {
        var expect = "<script src='jquery.js' integrity='sha256-C6CB9UYIS9UJeqinPHWTHVqh/E1uhG5Twh+Y5qFQmYg='></script>";
        var result = handlebars.compile("<script src='jquery.js' integrity='{{sri filePath}}'></script>")({ filePath: filePath });
        assert.equal(expect, result);
    });

    it("Property", function () {
        var expect = "C6CB9UYIS9UJeqinPHWTHVqh/E1uhG5Twh+Y5qFQmYg=";
        var result = handlebars.compile("{{sri filePath 'hashes' 'sha256'}}")({ filePath: filePath });
        assert.equal(expect, result);
    });

});
