# handlebars-helper-sri [![Build Status](https://travis-ci.org/neftaly/handlebars-helper-sri.svg?branch=master)](https://travis-ci.org/neftaly/handlebars-helper-sri)

Install
-------
```shell
npm install --save handlebars-helper-sri
```

Usage
-----
Attach the helper to `handlebars`:
```js
var handlebars = require("handlebars");

handlebars = require("handlebars-helper-sri").register(handlebars);
```

Then, call the helper from your Handlebars template:
```html
<script src="/script.js" integrity="{{sri "./public/script.js"}}"></script>
<link href="/style.css" integrity="{{sri "./public/style.css"}}" rel="stylesheet">
```

You may also select custom properties from `subresource`:
```html
<!-- select subresource("./public/script.js")["hashes"]["sha256"] -->
<script src="/script.js?{{sri "./public/script.js" "hashes" "sha256"}}"></script>
```

Caching
-------
You may wish to attach a custom [subresource](https://github.com/neftaly/npm-subresource) instance, for pre-load caching:
```js
var handlebars = require("handlebars");
var subresource = require("subresource");

[
    "../public/script.js",
    "../public/style.css"
].forEach(subresource);

handlebars = require("handlebars-helper-sri").register(handlebars, subresource);
```

**Warning:** The first instance attachment will persist as long as node is running (even if you `require("handlebars")` again). `Handlebars.registerHelper` appears to mutate the `require` cache (potential Node bug). As such, you can only ever use one instance of Handlebars.
