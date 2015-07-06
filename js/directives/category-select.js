(function()
{
    angular.module('NoteWrangler').directive
    (
        'categorySelect', function(Category)
        {
            return {
                restrict: 'E',
                templateUrl: '/templates/directives/category-select.html',
                controller: function($scope)
                {
                    this.getActiveCategory = function()
                    {
                        return $scope.activeCategory;
                    };

                    this.setActiveCategory = function(category)
                    {
                        $scope.activeCategory = category.id;
                    };
                },
                link: function(scope, element, attrs)
                {
                    scope.categories = Category.query(); // el acceso a los datos se hacen en la función link y no en el controlador
                }
            }
        }
    );
})();