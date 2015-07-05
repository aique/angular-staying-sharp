(function()
{
    /**
     * Esta es una plantilla genérica donde a partir de una cabecera y un icono se mostrará
     * la información de manera apropiada al usuario. Estos datos serán pasados como atributos
     * al invocar a la directiva, con lo que puede ser utilizada para mostrar información tanto
     * de las notas como de los usuarios, simplemente modificando el valor de esos atributos.
     */
    angular.module('NoteWrangler')
    .directive('card', function()
    {
        // el ámbito de esta variable será el de su padre, en este caso el div que contiene el listado de notas, a menos que se especifique lo contrario en la definición de la directiva

        var noteNum = 1 ;

        return {
            restrict: 'E',
            templateUrl: '/templates/directives/card.html',
            scope:
            {
                icon: '=', // icono de la tarjeta pasado como atributo
                header: '=', // cabecera de la tarjeta pasado como atributo
                description: '=', // descripción de la tarjeta pasado como atributo
                image: '=', //url de la imágen asociada al contenido pasada como atributo
                type: '@', // tipo de elemento a mostrar (nota o usuario) para crear el enlace al detalle
                id: '=' // identificador del elemento a mostrar para crear el enlace al detalle
            },
            link: function(scope, element, attrs) // el tercer parámetro son los atributos de la directiva
            {
                // aquí va el código js que se ha de ejecutar una vez renderizada la vista de la directiva

                element.on('click', function()
                {
                    $(element).find('div.card p').toggleClass('hidden');
                });
            }
        };
    });
})();
