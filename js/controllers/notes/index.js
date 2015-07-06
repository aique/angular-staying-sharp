(function()
{
    angular.module('NoteWrangler').controller('NotesIndexController', function($scope, Note)
    {
        //Note.all()
        //.success(function(data)
        //{
        //    $scope.notes = data;
        //});

        /**
         * El anterior código corresponde al uso de $http, mientras que el siguiente
         * es la llamada al servicio que está utilizando $resources.
         */

        $scope.notes = Note.query();
    });
})();