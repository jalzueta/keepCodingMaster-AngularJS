/**
 * Created by javi on 18/6/15.
 */

angular
    .module("jeviteca")
    .filter("launchedOn", function () {
        return function ( year ) {
            if( year ){
                return "Año de lanzamiento: " + year;
            }else{
                return "Año de lanzamiento: no disponible";
            }

        }
    });