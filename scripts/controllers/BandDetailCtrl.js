/**
 * Created by javi on 22/6/15.
 */
angular
    .module("jeviteca")
    .controller("BandDetailCtrl", ["$scope", "ApiService", "Settings", "$routeParams", "UrlUtilsService", "$window", function( $scope, ApiService, Settings, $routeParams, UrlUtilsService, $window ){

        ApiService.getFilteredData(Settings.bandsUrl, {'name': $routeParams.name}).then(
            function (data) {

                if (Object.prototype.toString.call( data ) === '[object Array]'){
                    data = data[0];
                }
                $scope.band = data;
            },
            function (error) {
                console.log('Ha ocurrido un error');
            });

        $scope.openWikiPage = function(){
            var url = UrlUtilsService.getWikipediaLink($scope.band.name);
            $window.open(url, '_blank');
        }

    }]);