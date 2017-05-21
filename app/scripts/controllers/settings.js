'use strict';

/**
 * @ngdoc function
 * @name gemsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gemsApp
 */
angular.module('gemsApp')
  .controller('SettingCtrl',['$scope','$state', function ($scope,$state) {

		$scope.logout = function(){
			$state.go('login');			
		};
		$scope.theme = function(color){
			console.log(color);		
		};
  }]);
