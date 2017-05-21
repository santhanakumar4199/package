'use strict';

/**
 * @ngdoc function
 * @name gemsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gemsApp
 */
angular.module('gemsApp')
  .controller('CardsCtrl',['$scope','$location','$state', function ($scope,$location,$state) {
	  	$scope.txtCardNo_KeyUp=function(){
	  		$('#txtCardNo').creditcard16();
	  	};
  }]);
