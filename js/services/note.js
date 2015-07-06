(function()
{
    /**
     * Los servicios son los encargados de recuperar datos y de suministrarlos a los
     * diferentes componentes de la aplicación, como son los controladores, las directivas,
     * los filtros o otros servicios.
     */

    angular.module('NoteWrangler').factory
    (
        'Note', function NoteFactory($http, $resource)
        {
            //return {
            //    all: function()
            //    {
            //        return $resource({method: 'GET', url: '/server/notes.php'});
            //    },
            //    create: function(note)
            //    {
            //        return $http({method: 'POST', url: '/server/notes.php', data: note})
            //    }
            //}

            /**
             * El anterior código devuelve un objeto utilizando $http, a continuación se
             * utilizará $resource para realizar la misma funcionalidad que las líneas comentadas.
             */

            return $resource('/server/notes.php/:id', {}, {});
        }
    );
})();
