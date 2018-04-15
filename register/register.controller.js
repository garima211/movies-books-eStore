(function () {
    'use strict';

    angular
        .module('myapp')
        .controller('RegisterController', RegisterController, function($scope) {
                $scope.address = {
                    name: '',
                    place: '',
                    components: {
                        placeId: '',
                        streetNumber: '', 
                        street: '',
                        city: '',
                        state: '',
                        countryCode: '',
                        country: '',
                        postCode: '',
                        district: '',
                        location: {
                            lat: '',
                            long: ''
                        }
                    }
                };
            });
       
    

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();


/** This was there before google API 
(function () {
    'use strict';

    angular
        .module('myapp')
        .controller('RegisterController', RegisterController, function($scope, $http) {
            $http.get('https://restcountries.eu/rest/v1/all').success(function (data) {
            $scope.countries = data;
            });
        });
    

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
**/