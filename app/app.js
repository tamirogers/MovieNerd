(function() {
    'use strict';
    //this is where states are defined
    angular
        .module('myApp', ['ui.router', 'toastr'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/search");


            $stateProvider
            //state params ('main') are used to pass data inbetween controllers
                .state('main', {
                url: "/main",
                templateUrl: "app/partials/main.html",

            })

            //state params ('search') are used to pass data inbetween controllers
            .state('search', {
                url: "/search",
                templateUrl: "app/partials/search.html",
                controller: 'moviecontroller',
                controllerAs: 'vm'
            })



            .state('detail', {
                url: '/details/:movieDetailId', //state param and property name that I'm sending throw router
                templateUrl: 'app/partials/detail.html',
                controller: 'detailcontroller',
                controllerAs: 'vm'

            })
        })

})();



// you can nest a state by adding .  like... detail.list


// $stateProvider
//       //state params ('search') are used to pass data inbetween controllers
//           .state('search', {
//               url: "/search",
//               templateUrl: "app/partials/search.html",
//               controller: 'moviecontroller',
//               controllerAs: 'vm'
//           })
