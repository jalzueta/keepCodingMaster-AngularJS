/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumDetailCtrl", ["$scope", "ApiService", "Settings", function( $scope, ApiService, Settings ){

        ApiService.getFilteredData(Settings.albumsUrl, {"id": 1}).then(
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