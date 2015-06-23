/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .controller("GenreDetailCtrl", ["$scope", "ApiService", "Settings", "$routeParams", function( $scope, ApiService, Settings, $routeParams ){

        ApiService.getFilteredData(Settings.genresUrl, {'name': $routeParams.name}).then(
            function (data) {

                if (Object.prototype.toString.call( data ) === '[object Array]'){
                    data = data[0];
                }
                $scope.genre = data;
            },
            function (error) {
                console.log('Ha ocurrido un error');
            });

    }]);