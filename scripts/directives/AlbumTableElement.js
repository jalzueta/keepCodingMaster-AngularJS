/**
 * Created by javi on 18/6/15.
 */

angular
    .module("jeviteca")
    .directive( "albumTableElement", function () {

        return {
            restrict: "AE",
            templateUrl: "views/AlbumTableElement.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function (scope){

            }
        };
    });