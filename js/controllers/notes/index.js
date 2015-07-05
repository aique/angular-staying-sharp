(function()
{
    angular.module('NoteWrangler').controller('NotesIndexController', function($http, $scope)
    {
        $http(
        {
            method: 'GET',
            url: '/server/notes.php'
        })
        .success(function(data)
        {
            $scope.notes = data;
        });
    });
})();