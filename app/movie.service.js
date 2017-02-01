(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('moviefactory', moviefactory);

    moviefactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function moviefactory($http, $q) {
        var service = {
            getmovieDataTwo: getmovieDataTwo,
            getmoviesTwo: getmoviesTwo
        };
        return service;

        //////////////// the gettingMovie needs to be the same as params, it's a placeholder

        function getmoviesTwo(gettingMovie) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: "http://www.omdbapi.com",
                params: {
                    s: gettingMovie
                }


            })

            .then(function(response) {
                    if (typeof response.data === "object") {
                        defer.resolve(response);
                    } else {
                        defer.reject(response);
                    }
                },

                function(error) {
                    console.log(error);
                    defer.reject(error);

                });
            return defer.promise;
        }





        function getmovieDataTwo(id) {
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: "http://www.omdbapi.com",
                    params: {

                        i: id

                    }


                })
                .then(function(response) {
                        if (typeof response.data === "object") {
                            defer.resolve(response);
                        } else {
                            defer.reject(response);
                        }
                    },

                    function(error) {
                        console.log(error);
                        defer.reject(error);

                    });
            return defer.promise;
        }
    }
})();
