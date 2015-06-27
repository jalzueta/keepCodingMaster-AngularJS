/**
 * Created by javi on 18/6/15.
 */

angular
    .module("jeviteca")
    .filter("launchedOn", function () {
        return function ( year ) {
            debugger
            if( year ){
                return "Año: " + year;
            }else{
                return "Año: no disponible";
            }

        }
    });