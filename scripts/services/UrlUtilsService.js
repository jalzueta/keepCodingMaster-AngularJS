/**
 * Created by javi on 23/6/15.
 */
angular
    .module("jeviteca")
    .service("UrlUtilsService", ["Settings", function (Settings) {

        this.getWikipediaLink = function( bandName ) {
            var query = encodeURIComponent( bandName );
            return Settings.wikiBaseUrl + query;
        },

        this.getYouTubeLink = function ( bandName, trackName ) {
            var query = encodeURIComponent(( bandName + " " + trackName ).toLowerCase());
            return Settings.youtubeBaseUrl + query;
        };
    }]);