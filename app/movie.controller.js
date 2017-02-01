(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('moviecontroller', moviecontroller);

    moviecontroller.$inject = ['moviefactory', 'toastr'];

    /* @ngInject */
    function moviecontroller(moviefactory, toastr) {
        var vm = this;
        vm.title = 'moviecontroller';


        ////////////////

        vm.getmovies = function(movie) {
            moviefactory.getmoviesTwo(movie).then(
                function(response) {
                    vm.movieresults = response.data.Search;
                    console.log(vm.movieresults);

                    toastr.success('The movies are in.');

                },

                function(error) {
                    if (error.data) {
                        toastr.error('there was an error' + error.data);

                    } else {
                        toastr.info('no data');
                    }
                }
            )
            vm.movie = '';
        };

    }
})();
