var myApp = angular.module('myApp',[]);


myApp.controller('MyController', ['$scope', '$http', function ($scope, $http){
	$http.get('data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
}]);
