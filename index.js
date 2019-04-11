//Requiere twit (API de twitter) y ontime (plugin para usar de temporizador)
var twit = require('twit');
var ontime = require('ontime')

//Tokens de la App creada en la cuenta (privadas)
var T = new twit(
	{
		consumer_key: 'h6YCbrMAmC7SCNpNzOJmRxE4X',
		consumer_secret: 'ipi0wn4wbkEEHwb1wfgF1vUNMXiD4bCZwCwPoxQ7bKVsmJZv1i',
		access_token: '1102712268691853317-wYmvvsq1jTY2d4Uuvd80JY9qAEqbvD',
		access_token_secret: 'usr1j7OWlM34RCIcKGs3HxYQt6cfnEYJS42FxwJEk5XQs'
	});

//Genera el nro random para que no se detecte el spam (tweet repetido)
var noRepetir = Math.random(100);

//Tweets promocionales
//var A = ' UBER promo/gift code May 2018 \n NEW FOR 1ST RIDE!!!!! \n \n👉vj0rbx👈 \n \n \n#UberCode \n#GiftCode \n#Uber \n';
//var B = 'Conseguí tu primer viaje de Uber gratis usando este código!! Ya ya \n 👉vj0rbx👈 \n \n \n #CodigosUber \n #PromoUber \n';
//var C = 'Uber promo code for your 1st ride free or a big discount!!!! Only May 2018 \n \n 👉vj0rbx👈  \n \n \n#Uber \n #GiftCode \n #UberGiftCode \n #UberCodes \n';

var A = '�Dinero GRATIS? Registrate con este link por tiempo limitado y obten� un cupon inicial \n https://invite.mercadopago.com/mp-argentina/mgm/231602276 \n \n #MPCupon #Descuentos #Cupon #Cupones';
var B = 'UBER promo/gift code April 2019 \n NEW FOR 1ST RIDE!!!!! \n \n vj0rbx \n \n \n #UberCode \n #GiftCode \n #Uber \n';
var C = 'Consegui tu primer viaje de Uber gratis usando este codigo!! Ya ya \n vj0rbx \n \n \n #CodigosUber \n #PromoUber \n';
var D = 'Uber promo code for your 1st ride free or big discount!!!! Only April 2019 \n \n vj0rbx \n \n \n #Uber \n #GiftCode \n #UberCodes \n ';
var E = 'GANASTE DINERO! $$ Registrate con este link por tiempo limitado y obten� tu cupon \n https://bit.ly/2Ghla94 \n \n #MercadoPago #Descuentos #Groupon #Cupon';

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

var postearD = function() {
	noRepetir = Math.random(100);
	T.post('statuses/update', {status: D + noRepetir});
	//Avisame
	T.post('direct_messages/new', {screen_name: 'NatarioLucas_', text: 'Posteado D'});
	console.log('Posteado D');
}

var postearE = function() {
	noRepetir = Math.random(100);
	T.post('statuses/update', {status: E + noRepetir});
	//Avisame
	T.post('direct_messages/new', {screen_name: 'NatarioLucas_', text: 'Posteado E'});
	console.log('Posteado E');
}


//Ontime controla a que hora se va a ejecutar
ontime({
	cycle: ['20:55:00']
}, function(ot) {
	postearA();
	postearB();
	postearC();
 postearD();
 postearE();
	ot.done();
	return
})
