(function()
{
    angular.module('NoteWrangler').factory
    (
        'Category', function CategoryFactory($http, $resource)
        {
            return $resource('/server/categories.php', {}, {});
        }
    );

    angular.module('NoteWrangler').service
    (
        'NotesInCategory', function ($http)
        {
            $http.get('/server/categories/notes-in-category')
            .success(function(data)
            {

            });
        }
    );
})();
