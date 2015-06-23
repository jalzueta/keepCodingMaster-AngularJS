/**
 * Created by javi on 23/6/15.
 */
angular
    .module("jeviteca")
    .directive( "tracklistTableElement", ["$window", "UrlUtilsService", function ( $window, UrlUtilsService ) {
        return {
            restrict: "AE",
            templateUrl: "views/TrackListTableElement.html",
            replace: true,
            scope: {
                bandName: "=",
                trackName: "="
            },
            link: function (scope) {
                scope.openVideoClip = function(){
                    debugger
                    var url = UrlUtilsService.getYouTubeLink(scope.bandName, scope.trackName);
                    $window.open(url, '_blank');
                };
            }
        };
    }]);