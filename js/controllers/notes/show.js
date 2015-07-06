(function()
{
    angular.module('NoteWrangler').controller('NotesShowCtrl', function($routeParams, Note)
    {
        //var controller = this;
        //
        //$http(
        //{
        //    method: 'GET',
        //    url: '/server/notes.php',
        //    params: {id: $routeParams.id}
        //})
        //.success(function(data)
        //{
        //    controller.note = data;
        //});

        /**
         * El anterior código corresponde al uso de $http sin invocar al servicio, mientras
         * que el siguiente es la llamada al servicio que está utilizando $resources.
         */

        this.note = Note.get({id: $routeParams.id});
    });
})();