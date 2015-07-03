(function()
{
    angular.module('NoteWrangler').controller('NotesIndexController', function($http)
    {
        var controller = this;

        $http(
        {
            method: 'GET',
            url: '/notes.php'
        })
        .success(function(data)
        {
            controller.notes = data;
        });
    });
})();