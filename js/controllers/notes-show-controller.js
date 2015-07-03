(function()
{
    angular.module('NoteWrangler').controller('NotesShowCtrl', function($http, $routeParams)
    {
        var controller = this;

        $http(
        {
            method: 'GET',
            url: '/notes.php',
            params: {id: $routeParams.id}
        })
        .success(function(data)
        {
            controller.note = data;
        });
    });
})();