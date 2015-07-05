(function()
{
    /**
     * Los servicios son los encargados de recuperar datos y de suministrarlos a los
     * diferentes componentes de la aplicación, como son los controladores, las directivas,
     * los filtros o otros servicios.
     */

    angular.module('NoteWrangler').factory
    ('Note', function NoteFactory($http)
    {
        return {
            all: function()
            {
                return $http({method: 'GET', url: '/server/notes.php'});
            },
            create: function(note)
            {
                return $http({method: 'POST', url: '/notes', data: note})
            }
        }
    });
})();
