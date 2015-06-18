/**
 * Created by javi on 17/6/15.
 */

angular
    .module("jeviteca")
    .controller("BandsCtrl", ["$scope", "Bands", function( $scope, Bands ){

        $scope.bands = Bands.data;

    }]);

