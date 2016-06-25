//Wrapping your Javascript in a closure is a good habit!

(function(){

var app = angular.module('store',[]);

app.controller('StoreController',function(){

	this.products = gems;

});


var gems = [
	
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: ' . . .',
		canPurchase: false,
		soldOut:false,
		images:[
			{
				full:'img/dodecahedron.png',
				thumb: 'img/dodecahedron.png'

			},

			{

				full:'img/pentagonal.png',
				thumb:'img/pentagonal.png'
			}
		

		],

	},
	
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: ' . . .',
		canPurchase: false,
		soldOut:false,
		images:[ {


				full:'img/pentagonal.png',
				thumb:'img/pentagonal.png'

			},
			
			{

				full:'img/pentagonal.png',
				thumb:'img/pentagonal.png'
			},
		
		],
	},

];

})();