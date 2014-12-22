# user-friendly readability
Forked from [Arrix](https://github.com/arrix/node-readability).

[Readability.js by Arc90](http://lab.arc90.com/experiments/readability/) ported to node.js.


## Why not node-readability
- No url support
- performance is fairly awesome.

## Requirements
* [node.js](http://nodejs.org/)
* [jsdom](https://github.com/tmpvar/jsdom)
* [htmlparser](https://github.com/tautologistics/node-htmlparser)

## Example

    var readability = require('readability');
    //...
    // This is an very early example. The API is subject to change.
    readability.parse(html, url, function(result) {
        console.log(result.title, result.content);
    });

## Limitation
* no fetching next pages
* no support for frames
