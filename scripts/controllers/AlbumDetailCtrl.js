/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumDetailCtrl", ["$scope", "ApiService", "Settings", "$routeParams", "UrlUtilsService", function( $scope, ApiService, Settings, $routeParams, UrlUtilsService ){
        ApiService.getFilteredData(Settings.albumsUrl, {id: parseInt($routeParams.id)}).then(
            function (data) {
                if (Object.prototype.toString.call( data ) === '[object Array]'){
                    data = data[0];
                }
                $scope.album = data;

                $scope.openVideoClip = function(){
                    debugger
                    var url = UrlUtilsService.getYouTubeLink(data.band.name, "");
                    $window.open(url, '_blank');
                };
            },
            function (error) {
                console.log('Ha ocurrido un error');
            });


    }]);