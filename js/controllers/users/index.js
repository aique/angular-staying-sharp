(function()
{
    angular.module('NoteWrangler').controller('UsersIndexController', function($http, $scope, Gravatar)
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

        // método que obtiene la url del avatar de un usuario llamando al servicio Gravatar

        $scope.gravatarUrl = function(email)
        {
            return Gravatar(email);
        }
    });
})();