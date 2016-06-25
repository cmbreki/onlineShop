//Wrapping your Javascript in a closure is a good habit!

(function(){

var app = angular.module('store',[]);

app.controller('StoreController',function(){

	this.products = gems;

});

app.controller("PanelController",function(){

  this.tab=1;

   //Setting the panels name
  
  this.selectTab = function(setTab){
     this.tab = setTab;
  };

  this.isSelected = function(checkTab){
  
    return this.tab === checkTab;

  };


});

var gems = [
	
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: ' In geometry, a dodecahedron is any polyhedron with twelve flat faces. The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. There are also three regular star dodecahedra, which are constructed as stellations of the convex form. All of these have icosahedral symmetry, order 120.',
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
		description: ' In geometry, a pentagonal hexecontahedron is a Catalan solid, dual of the snub dodecahedron. It has two distinct forms, which are mirror images (or "enantiomorphs") of each other. It is also well-known to be the Catalan solid with the most vertices. Among the Catalan and Archimedean solids, it has the second largest number of vertices, after the truncated icosidodecahedron, which has 120 vertices.',
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