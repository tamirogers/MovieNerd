(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('detailcontroller', detailcontroller);

    //$stateParams is injected to this controller to share data on another controller
    detailcontroller.$inject = ['moviefactory', '$stateParams', 'toastr'];

    /* @ngInject */
    function detailcontroller(moviefactory, $stateParams, toastr) {
        var vm = this;
        vm.title = 'detailcontroller';
        // vm2.details = '$stateParams.imdbID';



        function getmovieData() {
            moviefactory.getmovieDataTwo($stateParams.movieDetailId).then(
                function(response) {
                    vm.detailresults = response.data;
                    console.log(vm.detailresults);

                    toastr.success('The movies are here.');
                },
                function(error) {
                    if (error.data) {
                        toastr.error("there was a problem: " + error.data);
                    } else {
                        toastr.info('no data found.');
                    }
                }

            )
        };
        getmovieData();


    }


})();
