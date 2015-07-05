(function()
{
    angular.module('NoteWrangler').factory
    (
        'Gravatar', function GravatarFactory()
        {
            var defaultAvatarSize = 80; // tamaño por defecto de las imágenes de usuario
            var avatarUrl = 'http://www.gravatar.com/avatar/';

            return function(email)
            {
                return avatarUrl + CryptoJS.MD5(email) + '?size=' + defaultAvatarSize.toString();
            }
        }
    );
})();
