var read = require('./lib/readability');
var request = require('request');


/**
 * @desc: the first param could be html source code or URL.
 * @callback: will be called in callback(article)
 */
module.exports = function(html, callback) {
	if (html.slice(0, 4) === 'http') {
		var url = html;
		request(url, function(err, res, body) {
			if (!err && res.statusCode == 200) {
				read.parse(body, url, callback);
			}
		});
	} else {
		read.parse(html, null, callback);
	}
}
