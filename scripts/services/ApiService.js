/**
 * Created by javi on 18/6/15.
 */
angular
    .module("jeviteca")
    .service("ApiService", ["$http", "$q", "$filter", function ( $http, $q, $filter ) {
        this.getData = function ( url ) {
            return $http.get(url);
        };

        this.getFilteredData = function ( url, searchString ) {
            var deferred = $q.defer();
            $http.get(url).then(function (data) {
                if(searchString){
                    var filteredData = $filter('filter')(data.data,searchString,true);
                    deferred.resolve(filteredData);
                }else{
                    deferred.resolve(data.data);
                }
            });
            return deferred.promise;
        };
    }]);
