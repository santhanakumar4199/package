'use strict';

/**
 * @ngdoc function
 * @name gemsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gemsApp
 */
angular.module('gemsApp')
  .controller('DashboardCtrl',['$scope','$state', function ($scope,$state) {

		$scope.ishome =true;

		$scope.tabchange = function(tab){
			console.log('hi');
			$scope.ishome =false;
			$scope.ishistory =false;
			$scope.iscards =false;
			$scope.issettings =false;
			switch(tab) {
			    case 'home':
			    	$scope.ishome =true;
			    	$scope.redirectDash(tab);			       
			        break;
			    case 'history':
			        $scope.ishistory =true;
			        $scope.redirectDash(tab);
			        break;
			    case 'carddetails':
			        $scope.iscards =true;
			        $scope.redirectDash(tab);
			        break;
			    case 'setting':
			    	$scope.redirectDash(tab);
			        $scope.issettings =true;
			        break;
			    default:
			        $scope.ishome =true;

			}
		
		};
		$scope.redirectDash = function(page){
			$state.go('dashboard.'+ page);
		};
  }]);
