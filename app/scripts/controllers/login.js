'use strict';

/**
 * @ngdoc function
 * @name gemsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gemsApp
 */
angular.module('gemsApp')
  .controller('LoginCtrl',['$scope','$location','$state', function ($scope,$location,$state) {
	  	$scope.signIn=function(){
	  		//$location.path('/dashboard');
	  		$state.go('dashboard.home'); 
	  	};
  }]);
