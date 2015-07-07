(function()
{
    angular.module('NoteWrangler').directive
    (
        'categoryItem', function(Category)
        {
            return {
                restrict: 'E',
                templateUrl: '/templates/directives/category-item.html',
                scope:
                {
                    category: '='
                },
                require: '^categorySelect', // obtiene un controlador dentro de su ámbito para ser utilizado, en este caso el de la directiva padre categorySelect
                link: function(scope, element, attrs, categorySelectCtrl) // pasamos el controlador obtenido como cuarto parámetro del método
                {
                    scope.makeActive = function()
                    {
                        categorySelectCtrl.setActiveCategory(scope.category);
                    };

                    scope.categoryActive = function()
                    {
                        return categorySelectCtrl.getActiveCategory() === scope.category.id;
                    };

                    scope.categoryCount = function()
                    {
                        return categorySelectCtrl.getNotesCountForCategory(scope.category);
                    };
                }
            }
        }
    );
})();