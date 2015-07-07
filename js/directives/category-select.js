(function()
{
    angular.module('NoteWrangler').directive
    (
        'categorySelect', function(Category)
        {
            return {
                restrict: 'E',
                templateUrl: '/templates/directives/category-select.html',
                scope:
                {
                    activeCategory: '=',
                    notes: '='
                },
                // el controlador en las directivas sólo debería ser usado si sus métodos son
                // compartidos por otras directivas, en caso contrario se deb utilizar siempre link
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

                    this.getNotesCountForCategory = function(category)
                    {
                        if(!$scope.notes)
                        {
                            return 0;
                        }

                        var count = 0;

                        for(var i = 0, l = $scope.notes.length ; i < l ; i++)
                        {
                            if($scope.notes[i].category == category.id)
                            {
                                count++;
                            }
                        }

                        return count;
                    }
                },
                link: function(scope, element, attrs)
                {
                    scope.categories = Category.query(); // el acceso a los datos se hacen en la función link y no en el controlador
                }
            }
        }
    );
})();