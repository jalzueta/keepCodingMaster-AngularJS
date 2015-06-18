/**
 * Created by javi on 18/6/15.
 */

angular
    .module("jeviteca")
    .directive( "bandTableElement", function () {

        return {
            restrict: "AE",
            templateUrl: "views/BandTableElement.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function (scope){

            }
        };
    });
