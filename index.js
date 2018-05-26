var twit = require('twit');
var ontime = require('ontime')

var T = new twit(
	{
		consumer_key: 'EJeDRXQy1crTvTblYHWDBZAb5',
		consumer_secret: 'g4xcxd91rVfJkMunNLZrSlaiw4F5QeG1wn90DftVvKwlhSVGIR',
		access_token: '260895654-2B5xGJO5KIwrdo8lj3ldtYjvF9kcsFlr6zb3Av25',
		access_token_secret: 'Vkut6POrdzFZLKfIbSfQuqFLFToaTQBtlnBBw9P1O4VRv'
	});

var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth();
var hs  = fecha.getHours();
var mins = fecha.getMinutes();

var noRepetir = Math.random(100);

var postearA = function() {
    noRepetir = Math.random(100);
	T.post('statuses/update', {status: 'AAAAAAAAAAAAAAAA' + noRepetir});
	console.log("Posteado A");
}

var postearB = function() {
	noRepetir = Math.random(100);
	T.post('statuses/update', {status: 'BBBBBBBBBBBBBBBB' + noRepetir});
	console.log("Posteado B");
}

ontime({
	cycle: ['04:14:00', '04:14:10', '04:14:30']
}, function(ot) {
	postearA();
	postearB();
	ot.done();
	return
})