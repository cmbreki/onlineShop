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

app.controller("WeatherController",function($http){

 var vm = this;
  
  var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  
  var request = {
    method: 'GET',
    url: URL,
    params: {
       q: 'NemeaCity',
      mode: 'json',
      units: 'imperial',
      cnt: '7',
      appid: 'e5656666169da366f01834bcd1d3bdcd'
    }
  };
  
  $http(request)
    .then(function(response) {
     vm.data = response.data;
   
    }).
    catch(function(response) {
     vm.data = response.data;
    
     
   
  });

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
		reviews:[
          
          {
          	stars:5,
          	body: "I love the product!",
          	author: "joe@thomas.gr"

          },
          {
          	stars:1,
          	body: "This product sucks",
          	author:"time@hater.com"

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
		reviews:[

{
          	stars:5,
          	body: "I love the product!",
          	author: "joe@thomas.gr"

          },
          {
          	stars:1,
          	body: "This product sucks",
          	author:"time@hater.com"

          }

		],
		
		
	},
	

];

})();