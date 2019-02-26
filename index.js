//Requiere twit (API de twitter) y ontime (plugin para usar de temporizador)
var twit = require('twit');
var ontime = require('ontime')

//Tokens de la App creada en la cuenta (privadas)
var T = new twit(
	{
		consumer_key: 'EJeDRXQy1crTvTblYHWDBZAb5',
		consumer_secret: 'g4xcxd91rVfJkMunNLZrSlaiw4F5QeG1wn90DftVvKwlhSVGIR',
		access_token: '260895654-2B5xGJO5KIwrdo8lj3ldtYjvF9kcsFlr6zb3Av25',
		access_token_secret: 'Vkut6POrdzFZLKfIbSfQuqFLFToaTQBtlnBBw9P1O4VRv'
	});

//Genera el nro random para que no se detecte el spam (tweet repetido)
var noRepetir = Math.random(100);

//Tweets promocionales
//var A = ' UBER promo/gift code May 2018 \n NEW FOR 1ST RIDE!!!!! \n \n👉vj0rbx👈 \n \n \n#UberCode \n#GiftCode \n#Uber \n';
//var B = 'Conseguí tu primer viaje de Uber gratis usando este código!! Ya ya \n 👉vj0rbx👈 \n \n \n #CodigosUber \n #PromoUber \n';
//var C = 'Uber promo code for your 1st ride free or a big discount!!!! Only May 2018 \n \n 👉vj0rbx👈  \n \n \n#Uber \n #GiftCode \n #UberGiftCode \n #UberCodes \n';

var A = '�Dinero GRATIS? Registrate con este link por tiempo limitado y obten� un cupon inicial \n https://invite.mercadopago.com/mp-argentina/mgm/231602276 \n \n #MPCupon #Descuentos #Cupon #Cupones';
var B = ' ';
var C = ' ';


//Funciones que twittean
var postearA = function() {
    noRepetir = Math.random(100);
	T.post('statuses/update', {status: A + noRepetir});
	//Avisame
	T.post('direct_messages/new', {screen_name: 'NatarioLucas_', text: 'Posteado A'});
	console.log('Posteado A');
}

var postearB = function() {
	noRepetir = Math.random(100);
	T.post('statuses/update', {status: B + noRepetir});
	//Avisame
	T.post('direct_messages/new', {screen_name: 'NatarioLucas_', text: 'Posteado B'});
	console.log('Posteado B');
}

var postearC = function() {
	noRepetir = Math.random(100);
	T.post('statuses/update', {status: C + noRepetir});
	//Avisame
	T.post('direct_messages/new', {screen_name: 'NatarioLucas_', text: 'Posteado C'});
	console.log('Posteado C');
}
//Ontime controla a que hora se va a ejecutar
ontime({
	cycle: ['20:55:00']
}, function(ot) {
	postearA();
	postearB();
	postearC();
	ot.done();
	return
})
