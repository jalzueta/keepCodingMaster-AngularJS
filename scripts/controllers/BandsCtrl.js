/**
 * Created by javi on 17/6/15.
 */

angular
    .module("jeviteca")
    .controller("BandsCtrl", ["$scope", "Bands", "ApiService", "Settings", function( $scope, Bands, ApiService, Settings ){

        $scope.bands = Bands.data;

        $scope.$watch(
            function () {
                return $scope.filtroBandValue;
            },
            function (newValue, oldValue) {
                if(newValue === "" || newValue === undefined){
                    $scope.bands = Bands.data;
                }else{
                    ApiService.getFilteredData(Settings.bandsUrl, [{name: newValue}]).then(
                        function (filteredData) {
                            var uniqueFilteredData = filteredData.filter(function(item, pos) {
                                return filteredData.indexOf(item) == pos;
                            });
                            $scope.bands = uniqueFilteredData;
                        },
                        function (error) {
                            console.log('Ha ocurrido un error');
                        });
                }
            }
        );
    }]);

