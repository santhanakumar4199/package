'use strict';

/**
 * @ngdoc function
 * @name gemsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gemsApp
 */
angular.module('gemsApp')
  .controller('HomeCtrl',['$scope','$state', function ($scope,$state) {
  		$scope.btnName = 'Add';
  		$scope.headertitle ='Dashboard' 
  		$scope.proceedbtn = false;
  		$scope.displayUserDetails = true;
  		$scope.totalAmount ='';
  		var total = 0;
		$scope.siblingList = [
    	{'stuname':'Jack Smith', 'grade':'3rd Grade', 'school':'GEMS Wellington School', 'fee':'26,000 AED','feeAmount':26000,
    	feedetails:[{'feename':'Tuition Fee', 'fee':'13,000 AED'}, 
    	{'feename':'Book Fee', 'fee':'5,000 AED'}, {'feename':'Special Fee', 'fee':'8,000 AED'}] },
    	{'stuname':'Kevin Star', 'grade':'5rd Grade', 'school':'GEMS Wellington School', 'fee':'29,000 AED','feeAmount':29000,
    	feedetails:[{'feename':'Tuition Fee', 'fee':'16,000 AED'}, 
    	{'feename':'Book Fee', 'fee':'5,000 AED'}, {'feename':'Special Fee', 'fee':'8,000 AED'}] },
    	{'stuname':'Kevin Star', 'grade':'5rd Grade', 'school':'GEMS Wellington School', 'fee':'29,000 AED','feeAmount':29000,
    	feedetails:[{'feename':'Tuition Fee', 'fee':'16,000 AED'}, 
    	{'feename':'Book Fee', 'fee':'5,000 AED'}, {'feename':'Special Fee', 'fee':'8,000 AED'}] },
    	{'stuname':'Kevin Star', 'grade':'5rd Grade', 'school':'GEMS Wellington School', 'fee':'29,000 AED','feeAmount':29000,
    	feedetails:[{'feename':'Tuition Fee', 'fee':'16,000 AED'}, 
    	{'feename':'Book Fee', 'fee':'5,000 AED'}, {'feename':'Special Fee', 'fee':'8,000 AED'}] }
    ];
    $scope.addAmount=function(obj){    	
    	$scope.headertitle = 'Fees Payment'
    	$scope.proceedbtn =true;
    	$scope.displayUserDetails = false;
    	$scope.displayAmount = true;
    	total = total + obj.feeAmount;
    	$scope.totalAmount = numberWithCommas(total);
    	obj.selected = true;
    }
    function numberWithCommas(x) {
	    var parts = x.toString().split(".");
	    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	    return parts.join(".");
	}
	$scope.btnClose= function () {
		$scope.headertitle = 'Dashboard'
		$scope.proceedbtn =false;
    	$scope.displayUserDetails = true;
    	$scope.displayAmount = false;
    	$('button').removeAttr('disabled');
    	$('button').removeClass('addbtndis');
    	total = 0;
    	$scope.totalAmount=0;
    	angular.forEach($scope.siblingList, function(value, key) {
    		delete value.selected;
		  });
	 }
   $scope.proceed=function(){
    $state.go('dashboard.cards');
   }
}]);
