(function () {
    var app = angular.module('app', ['ngRoute']);


    app.config(["$routeProvider", function ($router) {        
        $router.when("/", { templateUrl: "angular/views/index.html" })
        .when("/dp", { templateUrl: "angular/views/dp.html" })
        .when("/nuevo", { templateUrl: "angular/views/nuevo.html" })
        .when("/editar/:id", { templateUrl: "angular/views/editar.html" })
        .when("/ver/:id", { templateUrl: "angular/views/ver.html" })
        .when("/sesiones", { templateUrl: "angular/views/sesiones/todas.html" })
        .when("/nuevaS", { templateUrl: "angular/views/sesiones/nuevaS.html" })
        .otherwise({ redirectTo: "/" });        
    }]);
    
})();