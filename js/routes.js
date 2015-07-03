(function()
{
    // obtenemos el módulo principal y llamamos a su método config, de esta manera no es necesario asignarlo a una variable

    angular.module('NoteWrangler').config(function($routeProvider)
    {
        $routeProvider
        .when('/notes', // se especifica una vista
        {
            templateUrl: 'templates/pages/notes/index.html',
            controller:  'NotesIndexController', // controlador que será escuchado antes de servir la vista, definido en js/controllers/notes-index-controller
            controllerAs: 'indexCtrl' // alias para el controlador
        })
        .when('/notes/:id',
        {
            templateUrl: 'templates/pages/notes/show.html',
            controller: 'NotesShowCtrl',
            controllerAs: 'showCtrl'
        })
        .when('/users', // se especifica otra vista
        {
            templateUrl: 'templates/pages/users/index.html'
        })
        .when('/', // se especifica la vista por defecto
        {
            templateUrl: 'templates/pages/notes/index.html',
            controller:  'NotesIndexController',
            controllerAs: 'indexCtrl'
        })
        .otherwise({redirectTo: '/'}) // cuando nada encaja, se muestra la vista por defecto
    });
})();