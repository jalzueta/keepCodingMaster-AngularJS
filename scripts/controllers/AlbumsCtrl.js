/**
 * Created by javi on 17/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumsCtrl", ["$scope", "Albums", "ApiService", "Settings", "$q", function( $scope, Albums, ApiService, Settings, $q ){

        $scope.albums = Albums.data;

        $scope.$watch(
            // Hacemos un return del valor que queremos observar
            function () {
                return $scope.filtroAlbumValue;
            },
            // Manejador que se dispara cuando hay cambios
            function (newValue, oldValue) {
                window.console.log("Valor antiguo: " + oldValue);
                window.console.log("Valor nuevo: " + newValue);
                if(newValue === "" || newValue === undefined){
                    $scope.albums = Albums.data;
                }else{
                    var filteredData = Array();;
                    ApiService.getFilteredData(Settings.albumsUrl, [{title: newValue}, {band: {name: newValue}}, {year: parseInt(newValue)}]).then(
                        function (data) {
                            filteredData = filteredData.concat(data);
                            var uniqueFilteredData = filteredData.filter(function(item, pos) {
                                return filteredData.indexOf(item) == pos;
                            })
                            $scope.albums = uniqueFilteredData;
                        },
                        function (error) {
                            console.log('Ha ocurrido un error');
                        });
                }
            }
        );

    }]);


