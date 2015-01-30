var read = require('../index');

read('https://www.byvoid.com/zhs/blog/trans-siberia-travel-notes', function(res) {
        console.log(res.title);
        console.log(res.content);
});

read('http://wanghuanming.com/2015/01/summary-for-2014/', function(res) {
        console.log(res.title);
        console.log(res.content);
});
