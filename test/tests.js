"use strict";

var assert = require("assert"),
    handlebars = require("handlebars"),
    fs = require("fs"),

//    testString = "",
    filePath = "./test/jquery-1.10.2.min.js.testdata";

handlebars = require("../index.js").register(handlebars);

it("Default", function () {
    var expect = "<script src='jquery.js' integrity='sha256-C6CB9UYIS9UJeqinPHWTHVqh/E1uhG5Twh+Y5qFQmYg='></script>";
    var result = handlebars.compile("<script src='jquery.js' integrity='{{sri filePath}}'></script>")({ filePath: filePath });
    assert.equal(expect, result);
});

it.skip("Custom subresource instance", function () {
    var expect = true;
    var result = false;
    assert.equal(expect, result);
});
