/**
 * Created by javi on 17/6/15.
 */

angular
    .module("jeviteca")
    .controller("GenresCtrl", ["$scope", "Genres", "ApiService", "Settings", function( $scope, Genres, ApiService, Settings ){

        $scope.genres = Genres.data;

        $scope.$watch(
            function () {
                return $scope.filtroGenreValue;
            },
            function (newValue, oldValue) {
                if(newValue === "" || newValue === undefined){
                    $scope.genres = Genres.data;
                }else{
                    ApiService.getFilteredData(Settings.genresUrl, [{name: newValue}]).then(
                        function (filteredData) {
                            var uniqueFilteredData = filteredData.filter(function(item, pos) {
                                return filteredData.indexOf(item) == pos;
                            });
                            $scope.genres = uniqueFilteredData;
                        },
                        function (error) {
                            console.log('Ha ocurrido un error');
                        });
                }
            }
        );
    }]);
