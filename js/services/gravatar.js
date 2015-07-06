(function()
{
    //angular.module('NoteWrangler').factory
    //(
    //    'Gravatar', function GravatarFactory()
    //    {
    //        var defaultAvatarSize = 80; // tamaño por defecto de las imágenes de usuario
    //        var avatarUrl = 'http://www.gravatar.com/avatar/';
    //
    //        return function(email)
    //        {
    //            return avatarUrl + CryptoJS.MD5(email) + '?size=' + defaultAvatarSize.toString();
    //        }
    //    }
    //);

    /**
     * En el código anterior se ha utilizado el servicio factory, lo que implicaba que el tamaño
     * del avatar no podía ser configurado. Para estos casos en lugar del servicio factory se utiliza
     * el servicio provider que sigue a continuación.
     */

    angular.module('NoteWrangler').provider
    (
        'Gravatar', function GravatarProvider()
        {
            var defaultAvatarSize = 80; // tamaño por defecto de las imágenes de usuario
            var avatarUrl = 'http://www.gravatar.com/avatar/';

            // cada parámetro se configurará a través de una función del provider y se definirá en la declaración del módulo principal (app.js)

            this.setSize = function(size)
            {
                defaultAvatarSize = size;
            }

            this.$get = function() // todos los provider han de tener una función $get
            {
                return function(email)
                {
                    return avatarUrl + CryptoJS.MD5(email) + '?size=' + defaultAvatarSize.toString();
                }
            }
        }
    );
})();
