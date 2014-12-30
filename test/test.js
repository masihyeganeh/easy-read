var read = require('../index');

read('http://wanghuanming.com/2014/12/mesos-deploy/', function(res) {
		console.log(res.title);
		console.log(res.content);
});

read('https://byvoid.com/feed', function(res) {
        console.log(res.title);
        console.log(res.content);
});
