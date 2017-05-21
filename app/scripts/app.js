'use strict';

/**
 * @ngdoc overview
 * @name gemsApp
 * @description
 * # gemsApp
 *
 * Main module of the application.
 */
angular
  .module('gemsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  $stateProvider

      .state('login',{
        url:'/login',
        templateUrl:'views/login.html',
        controller:'LoginCtrl'
      })
      // .state('dashboard',{
      //   url:'/dashboard',
      //   templateUrl:'views/dashboard.html',
      //   controller :'DashboardCtrl'
      // })
      .state('dashboard', {
                        url: '/dashboard',
                        abstract: true,
                        templateUrl: 'views/dashboard.html',
                        controller :'DashboardCtrl'
                        
                    })
      .state('dashboard.home',{
          url: '/home',
          cache: false,
          views: {
              'dashboard-home': {
                  templateUrl: 'views/home.html',
                  controller: 'HomeCtrl'
              }
          }
      }).state('dashboard.history',{
          url: '/history',
          cache: false,
          views: {
              'dashboard-home': {
                  templateUrl: 'views/history.html',
                  controller: 'HistoryCtrl'
              }
          }
      }).state('dashboard.carddetails',{
          url: '/carddetails',
          cache: false,
          views: {
              'dashboard-carddetails': {
                  templateUrl: 'views/carddetails.html',
                  controller: ''
              }
          }
      }).state('dashboard.setting',{
          url: '/setting',
          cache: false,
          views: {
              'dashboard-setting': {
                  templateUrl: 'views/setting.html',
                  controller: 'SettingCtrl'
              }
          }
      }).state('dashboard.cards',{
          url: '/cards',
          cache: false,
          views: {
              'dashboard-cards': {
                  templateUrl: 'views/cards.html',
                  controller: 'CardsCtrl'
              }
          }
      });

  }]);
