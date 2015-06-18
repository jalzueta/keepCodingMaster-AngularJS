/**
 * Created by javi on 18/6/15.
 */
angular
    .module("jeviteca")
    .directive( "genreTableElement", function () {

        return {
            restrict: "AE",
            templateUrl: "views/GenreTableElement.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function (scope){

            }
        };
    });