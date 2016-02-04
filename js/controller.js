
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
$scope.rateList = []
$scope.viewRate = []
 	
 	$http.get('data.json')
 	.then(function(res) {
 		$scope.tea = res.data;
 		pages.add($scope.tea)
 		for(var i = 0; i < $scope.tea.length; i++) {
 		    $scope.rating = $scope.tea[i].rating
 			$scope.rateList.push($scope.rating)	
 			}
 			$scope.setRate = function(input) {
 				var name = ''
 				if(input.rating === 1) {
 					name+= 'low'
 				} else if(input.rating === 2){
 					name += 'medium'
 				} else if(input.rating === 3) {
 					name += 'high'
 				} else if(input.rating === 4) {
 					name += 'very high!'
 				}
 					return name
 		}
 })		
	
$scope.category = ['spring','warm','winter','lucid','hot','dry','summer','awesome','cold','dark']
$scope.count = 0
$scope.optionNum = [2,3,4,5,6,7,8,9,10];
$scope.singleBasket = []
$scope.basket = []

$scope.addToCart = function(tea,total) {	
	$scope.listCart = cart.listCart
	$scope.addCart = cart.addCart
	$scope.single = {total:1,tea}
	total = {total,tea}	
		if (total.total === undefined) {
			$scope.basket.push($scope.single)

	  } if (total.total !== undefined) {
			$scope.basket.push(total)
	  }
			$scope.count = $scope.count+1
			cart.addCart($scope.basket)		
}	
		



$scope.rating = ['low','medium','high','very high!']

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

$scope.remove = function(item) {
	for (var i = 0; i < $scope.listCart().length; i++) {
		var cart = $scope.listCart()[i].tea._id
	if(cart === item){
		$scope.listCart().splice(i,1)

		}
	}		
}

})
















