
angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"] );

angular
    .module( "jeviteca" )
    .config( ["$routeSegmentProvider", "$routeProvider", function ( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when("/albumes", "albumes");
        $routeSegmentProvider.when("/bandas", "bandas");
        $routeSegmentProvider.when("/generos", "generos");

        $routeSegmentProvider.segment("albumes", {
            controller: "AlbumesCtrl",
            templateUrl: "views/AlbumesView.html"
        });

        $routeSegmentProvider.segment("bandas", {
            controller: "BandasCtrl",
            templateUrl: "views/BandasView.html"
        });

        $routeSegmentProvider.segment("generos", {
            controller: "GenerosCtrl",
            templateUrl: "views/GenerosView.html"
        });

        $routeProvider.otherwise({
            redirectTo: "/albumes"
        });
    }] );