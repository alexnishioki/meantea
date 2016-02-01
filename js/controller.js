//store JSON tea data
app.factory('pages',function() {
	var pages = []
	var pagesServiceInstance = {}

	pagesServiceInstance.add = function(page) {
		pages=page
	}
	pagesServiceInstance.list = function() {
		return pages
	}

	return pagesServiceInstance
})

//store cart content data
app.factory('cart',function() {
	var cart = []
	var cartServiceInstance = {}

	cartServiceInstance.addCart = function(item) {
		cart=item
		
	}

	cartServiceInstance.listCart = function() {
		return cart
	}

	return cartServiceInstance
})


app.filter('currencyFormat',function() {
	return function(val) {
		val = val.toString().replace('.','').split('');
 		var removed = val.splice(2,0,'.').join('');
			return '$' + val.join('');
	}
})

app.filter('falseFormat',function() {
 return function() {
 	if(true) {
 	return 'Yes'
 }
 return 'No'
}

})


app.controller('ControllerOne',function($scope,$http,$window,pages,cart) {
	$scope.list = pages.list
	$scope.add = pages.add
 $http.get('data.json')
 	.then(function(res) {
 		$scope.tea = res.data;

 		pages.add($scope.tea)
 		//console.log(pages);
 		//console.log($scope.list())
 })
 	
$scope.count = 0
$scope.optionNum = [2,3,4,5,6,7,8,9,10];
$scope.basket = []
$scope.addToCart = function(tea,total) {
	$scope.listCart = cart.listCart
	$scope.addCart = cart.addCart
	total = {total,tea}
	$scope.basket.push(total)
			$scope.count = $scope.count+1
			cart.addCart($scope.basket)
			//console.log($scope.listCart())
	}


 $scope.checkout = function() {
 	$window.location = '#/checkout'
  }

})



app.controller('ControllerTwo',function($scope,$http,$window,pages,cart) {
	$scope.listCart = cart.listCart
	$scope.addCart = cart.addCart
	$scope.list = pages.list
	$scope.add = pages.add
	
	$scope.allTotal = function() {
		var totalCount = 0
		for(var i = 0; i < $scope.listCart().length; i++) {
		totalCount += (($scope.listCart()[i].tea.price * $scope.listCart()[i].total)/100)
		}
		return totalCount
	}	

})





