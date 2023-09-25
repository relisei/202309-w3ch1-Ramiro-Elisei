## Formulario email (w3ch1)

Crea un formulario para enviar un correo electrónico. Debe tener los siguientes campos:

- Remitente (por defecto poor-student@isdicoders.com)
- Destinatario
- Asunto
- Cuerpo
- Archivo adjunto
- Programar envío (checkbox)
- Fecha y hora para enviarlo

El último campo sólo debe aparecer cuando la opción "Programar envío" esté marcada.

### Validaciones:

Haz que el browser no realice las validaciones, y realízalas tú en JavaScript. Éstas son las reglas:

- Todos los campos son obligatorios excepto "Archivo adjunto". El campo "Fecha y hora para enviarlo" sólo será obligatorio cuando sea visible.
- El cuerpo debe tener una longitud mínima de 10 caracteres.
- El campo remitente y el campo destinatario tienen que contener una dirección de correo electrónico válida.
- El campo "Fecha y hora para enviarlo" debe contener una fecha y una hora válidas.

La web ya tiene un script que invocará a una función llamada `validateForm` cuando el usuario envíe el formulario. Crea dicha función en el archivo `validate.js`. La función debe validar los datos del formulario e imprimir por consola los errores que encuentre. Si no encuentra ningún error, debe imprimir por consola "Formulario enviado" y se deben vaciar todos los campos.

### Despliegue

Despliega tu web en Netlify.
