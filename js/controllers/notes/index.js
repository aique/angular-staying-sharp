(function()
{
    angular.module('NoteWrangler').controller('NotesIndexController', function($scope, Note)
    {
        Note.all()
        .success(function(data)
        {
            $scope.notes = data;
        });
    });
})();