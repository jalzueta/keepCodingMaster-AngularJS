/**
 * Created by javi on 17/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumsCtrl", ["$scope", "Albums", "ApiService", "Settings", function( $scope, Albums, ApiService, Settings ){

        $scope.albums = Albums.data;

        $scope.$watch(
            function () {
                return $scope.filtroAlbumValue;
            },
            function (newValue, oldValue) {
                if(newValue === "" || newValue === undefined){
                    $scope.albums = Albums.data;
                }else{
                    ApiService.getFilteredData(Settings.albumsUrl, [{title: newValue}, {band: {name: newValue}}, {year: parseInt(newValue)}]).then(
                        function (filteredData) {
                            var uniqueFilteredData = filteredData.filter(function(item, pos) {
                                return filteredData.indexOf(item) == pos;
                            });
                            $scope.albums = uniqueFilteredData;
                        },
                        function (error) {
                            console.log('Ha ocurrido un error');
                        });
                }
            }
        );

    }]);


