
angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"] );

angular
    .module( "jeviteca" )
    .config( ["$routeSegmentProvider", "$routeProvider", function ( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when("/albums", "albums");
        $routeSegmentProvider.when("/bands", "bands");
        $routeSegmentProvider.when("/genres", "genres");

        $routeSegmentProvider.segment("albums", {
            controller: "AlbumsCtrl",
            templateUrl: "views/AlbumsView.html",
            resolve: {
                Albums: ["AlbumsProvider", function( AlbumsProvider ){
                    return AlbumsProvider.getAlbums();
                }]
            }
        });

        $routeSegmentProvider.segment("bands", {
            controller: "BandsCtrl",
            templateUrl: "views/BandsView.html",
            resolve: {
                Bands: ["BandsProvider", function( BandsProvider ){
                    return BandsProvider.getBands();
                }]
            }
        });

        $routeSegmentProvider.segment("genres", {
            controller: "GenresCtrl",
            templateUrl: "views/GenresView.html",
            resolve: {
                Genres: ["GenresProvider", function ( GenresProvider ) {
                    return GenresProvider.getGenres();
                }]
            }
        });

        $routeProvider.otherwise({
            redirectTo: "/albums"
        });
    }] );