(function()
{
    angular.module('NoteWrangler').controller('NotesCreateCtrl', function($scope, Note)
    {
        $scope.note = new Note();

        $scope.saveNote = function(note)
        {
            $scope.errors = null;

            note.$save(note)
            .catch(function(note)
            {
                $scope.errors = [note.data.error];
            })
        }
    });
})();
