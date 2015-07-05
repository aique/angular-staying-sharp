(function()
{
    angular.module('NoteWrangler').controller('UsersIndexController', function($http, $scope)
    {
        $http(
        {
            method: 'GET',
            url: '/server/users.php'
        })
        .success(function(data)
        {
            $scope.users = data;
        });
    });
})();