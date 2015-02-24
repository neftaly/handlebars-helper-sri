# handlebars-helper-sri

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
