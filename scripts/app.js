
angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"] );

angular
    .module( "jeviteca" )
    .config( ["$routeSegmentProvider", "$routeProvider", function ( $routeSegmentProvider, $routeProvider ) {

        $routeSegmentProvider.when("/albums", "albums");
        $routeSegmentProvider.when("/bands", "bands");
        $routeSegmentProvider.when("/genres", "genres");
        $routeSegmentProvider.when("/albums/:id/detail", "album_detail");
        $routeSegmentProvider.when("/bands/:name/detail", "band_detail");
        $routeSegmentProvider.when("/genres/:name/detail", "genre_detail");

        $routeSegmentProvider.segment("albums", {
            controller: "AlbumsCtrl",
            templateUrl: "views/AlbumsView.html",
            resolve: {
                Albums: ["ApiService", "Settings", function( ApiService, Settings ){
                    return ApiService.getData(Settings.albumsUrl);
                }]
            }
        });

        $routeSegmentProvider.segment("bands", {
            controller: "BandsCtrl",
            templateUrl: "views/BandsView.html",
            resolve: {
                Bands: ["ApiService", "Settings", function( ApiService, Settings ){
                    return ApiService.getData(Settings.bandsUrl);
                }]
            }
        });

        $routeSegmentProvider.segment("genres", {
            controller: "GenresCtrl",
            templateUrl: "views/GenresView.html",
            resolve: {
                Genres: ["ApiService", "Settings", function( ApiService, Settings ){
                    return ApiService.getData(Settings.genresUrl);
                }]
            }
        });

        $routeSegmentProvider.segment("album_detail", {
            controller: "AlbumDetailCtrl",
            templateUrl: "views/AlbumDetailView.html"
        });

        $routeSegmentProvider.segment("band_detail", {
            controller: "BandDetailCtrl",
            templateUrl: "views/BandDetailView.html"
        });

        $routeSegmentProvider.segment("genre_detail", {
            controller: "GenreDetailCtrl",
            templateUrl: "views/GenreDetailView.html"
        });

        $routeProvider.otherwise({
            redirectTo: "/albums"
        });
    }] );