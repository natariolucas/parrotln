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

var postear = function() {
	T.post('statuses/update', {status: 'Prueba de hashtag #test'});
	console.log('Posteo del: ' + dia + '/' + mes);
}

ontime({
	cycle: ['01:16:30']
}, function(ot) {
	postear();
	ot.done()
	return
})