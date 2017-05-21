'use strict';

/**
 * @ngdoc function
 * @name gemsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the gemsApp
 */
angular.module('gemsApp')
  .controller('HistoryCtrl',['$scope','$state', function ($scope,$state) {

		$scope.transDetails = [ 
      {'trAcName':'Admin Fee', 'amt':'1000AED','status':'Approved'}
      ,{'trAcName':'Tution Fee', 'amt':'10000AED','status':'Approved'}
      ,{'trAcName':'Book Fee', 'amt':'1000AED','status':'Cancelled'}
    ];	

  }]);
