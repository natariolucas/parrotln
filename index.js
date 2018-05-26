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

var postearA = function() {
	T.post('statuses/update', {status: 'AAAAAAAAAAAAAAAA'});
	console.log("Posteado A");
}

var postearB = function() {
	T.post('statuses/update', {status: 'BBBBBBBBBBBBBBBB'});
	console.log("Posteado B");
}


/*var ultTw = function() {T.get('statuses/user_timeline', {user_id: '260895654', count: 1}, function(err, tweet)
	{
		if(err)
		{
			console.log(err)
		}
		else
		{
			//Aca entra el ult tweet ya conseguido

			if (tweet[0].text == "A"){
			postearC();
			console.log("Posteado C");
			}
			else if (tweet[0].text == "CCCCCCCCCCCCCCCCC")
			{
				postearB();
				console.log("Posteado B");
			}
			else
			{
				postearA();
				console.log("Posteado A");
			}
		}
	});
}*/



ontime({
	cycle: ['03:45:00', '03:46:00', '03:47:00']
}, function(ot) {
	postearA();
	postearB();
	ot.done();
	return
})