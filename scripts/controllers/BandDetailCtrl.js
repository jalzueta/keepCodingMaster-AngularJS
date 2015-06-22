/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .controller("BandDetailCtrl", ["$scope", "ApiService", "Settings", function( $scope, ApiService, Settings ){

        ApiService.getFilteredData(Settings.bandsUrl, {'id': parseInt($routeParams.id)}).then(
            function (data) {
                debugger
                if (Object.prototype.toString.call( data ) === '[object Array]'){
                    data = data[0];
                }
                $scope.album = data;
            },
            function (error) {
                console.log('Ha ocurrido un error');
            });

    }]);