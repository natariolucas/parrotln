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
	T.post('statuses/update', {status: noRepetir + 'AAAAAAAAAAAAAAAA'});
	console.log("Posteado A");
}

var postearB = function() {
	T.post('statuses/update', {status: noRepetir + 'BBBBBBBBBBBBBBBB'});
	console.log("Posteado B");
}

ontime({
	cycle: ['04:08:00', '04:08:20', '04:08:50']
}, function(ot) {
	postearA();
	postearB();
	ot.done();
	return
})