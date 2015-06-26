/**
 * Created by javi on 18/6/15.
 */
angular
    .module("jeviteca")
    .service("ApiService", ["$http", "$q", "$filter", function ( $http, $q, $filter ) {
        this.getData = function ( url ) {
            return $http.get(url);
        };

        this.getExactFilterData = function ( url, searchString ) {
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

        this.getFilteredData = function ( url, searchStrings ) {
            var deferred = $q.defer();
            $http.get(url).then(function (data) {
                if(searchStrings){
                    var filteredData = Array();
                    debugger
                    angular.forEach(searchStrings,function(searchString,index){
                        filteredData = filteredData.concat($filter('filter')(data.data,searchString,function(actual, expected){
                            /*actual === expected;*/
                            if(expected !== undefined){
                                if((actual !== undefined)){
                                    if(actual.toString().toLowerCase().includes(expected.toString().toLowerCase())){
                                        return true;
                                    }else{
                                        return false;
                                    }
                                }else{
                                    return false;
                                }
                            }else{
                                return true;
                            }
                        }));
                    });
                    deferred.resolve(filteredData);
                }else{
                    deferred.resolve(data.data);
                }
            });
            return deferred.promise;
        };
    }]);
