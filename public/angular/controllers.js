(function() {
    var app = angular.module('app');
    
    app.controller('IndexController', ['$http', '$location', function($http, $location) {
        var model = this;
        model.students = [];
                
        $http.get('/api/students').success(function(data){
            model.students = data;
        });
        
        model.delete = function(id) {
            $http({
                url: '/api/students/' + id,
                method: "DELETE",
            }).success(function (data, status, headers, config) {
                $location.path('/');
            }).error(function (data, status, headers, config) {
                console.log(status);                
            });
        }
        
    }]);
})();

(function() {
    var app = angular.module('app');
    
    app.controller('NuevoController', ['$http', '$location', function($http, $location) {
        var model = this;
        model.name = '';
        model.age = '';
      
        model.save = function() {            
            $http({
                url: '/api/students',
                method: "POST",
                data: model,
            }).success(function (data, status, headers, config) {
                $location.path('/');
            }).error(function (data, status, headers, config) {
                console.log(status);                
            });
        }        
    }]);
})();

(function() {
    var app = angular.module('app');
    
    app.controller('EditarController', ['$http', '$location', '$routeParams', function($http, $location, $routeParams) {
        var model = this;
        model.name = '';
        model.age = '';
        model.id = 0;        
      
        model.load = function() {            
            $http({
                url: '/api/students/' + $routeParams.id,
                method: "GET",
            }).success(function (data, status, headers, config) {
                model.name = data.name;
                model.age = data.age;
                model.id = data._id;
            }).error(function (data, status, headers, config) {
                console.log(status);                
            });
        }
        
        model.update = function() {            
            $http({
                url: '/api/students',
                method: "PUT",
                data: model,
            }).success(function (data, status, headers, config) {
                $location.path('/');
            }).error(function (data, status, headers, config) {
                console.log(status);                
            });
        }
        
        model.load();
    }]);
})();

(function() {
    var app = angular.module('app');
    
    app.controller('VerController', ['$http', '$location', '$routeParams', function($http, $location, $routeParams) {
        var model = this;
        model.name = '';
        model.age = '';
        model.id = 0;        
      
        model.load = function() {            
            $http({
                url: '/api/students/' + $routeParams.id,
                method: "GET",
            }).success(function (data, status, headers, config) {
                model.name = data.name;
                model.age = data.age;
                model.id = data._id;
            }).error(function (data, status, headers, config) {
                console.log(status);                
            });
        }
        
        model.load();
    }]);
})();

(function() {
    var app = angular.module('app');
    
    app.controller('IndexSesionesController', ['$http', '$location', function($http, $location) {
        var model = this;
        model.sesiones = [];
                
        $http.get('/sesiones').success(function(data){
            model.sesiones = data;
            console.log(data);
        });
        
        model.delete = function(id) {
            $http({
                url: '/api/sesiones/' + id,
                method: "DELETE",
            }).success(function (data, status, headers, config) {
                $location.path('/sesiones');
            }).error(function (data, status, headers, config) {
                console.log(status);                
            });
        }
        
    }]);
})();

(function() {
    var app = angular.module('app');
    
    app.controller('NuevaSController', ['$http', '$location', function($http, $location) {
        var model = this;
        model.fecha = '';
        model.noSesion = '';
        model.sintomas = '';
        model.resumenSesion = '';
        model.proximaSesion = '';
        model.tarea = '';

        model.save = function() {            
            $http({
                url: '/sesiones',
                method: "POST",
                data: model,
            }).success(function (data, status, headers, config) {
                $location.path('/sesiones');
            }).error(function (data, status, headers, config) {
                console.log(status);                
            });
        }        
    }]);
})();
