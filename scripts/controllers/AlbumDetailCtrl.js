/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumDetailCtrl", ["$scope", "ApiService", "Settings", "$routeParams", function( $scope, ApiService, Settings, $routeParams ){
        ApiService.getExactFilterData(Settings.albumsUrl, {id: parseInt($routeParams.id)}).then(
            function (data) {
                if (Object.prototype.toString.call( data ) === '[object Array]'){
                    data = data[0];
                }
                $scope.album = data;
            },
            function (error) {
                console.log('Ha ocurrido un error');
            });


    }]);