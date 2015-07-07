(function()
{
    angular.module('NoteWrangler').factory
    (
        'Category', function CategoryFactory($resource)
        {
            return $resource('/server/categories.php', {}, {});
        }
    );
})();
