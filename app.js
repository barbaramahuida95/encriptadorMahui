let nuevoTexto = '';

function mostrarImagenError(mostrar) {
    const imagenError = document.getElementById('imagenError');
    imagenError.style.display = mostrar ? 'block' : 'none';
}

function encriptar() {
    const texto = document.getElementById('textoInput').value;
    const regex = /^[a-z\s]+$/;
    if (regex.test(texto)) {
        //alert("El texto es válido.");
        const reemplazos = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
        nuevoTexto = texto.replace(/[aeiou]/g, (vocal) => reemplazos[vocal]);
        document.getElementById('resultadoTexto').value = nuevoTexto;
        //alert('El texto encriptado es:', nuevoTexto);
        copiarNewText(nuevoTexto);    
        mostrarImagenError(false); 
        return nuevoTexto;

    } else {
        //alert("El texto no es válido. Por favor ingrese solo letras minusculas sin tildes ni caracteres especiales.");
        mostrarImagenError(true); 
        return false;
    }
}

function desencriptar() {
    const texto = document.getElementById('textoInput').value;
    const regex = /^[a-z\s]+$/;
    if (regex.test(texto)) {
        //alert("El texto es válido.");
        const reemplazos = {
            'ai': 'a',
            'enter':'e',
            'imes':'i',
            'ober': 'o',
            'ufat' : 'u'
        };
        nuevoTexto = texto.replace(/ai|enter|imes|ober|ufat/g, (secuencia) => reemplazos[secuencia]);
        document.getElementById('resultadoTexto').value = nuevoTexto;
        //alert('El texto desencriptado es:', nuevoTexto);
        copiarNewText(nuevoTexto);
        mostrarImagenError(false); 
        return nuevoTexto;
        
    } else {
        //alert("El texto no es válido. Por favor ingrese solo letras minusculas sin tildes ni caracteres especiales.");
        mostrarImagenError(true); 
        return false;
    }
}

function copiarNewText() {
    if (nuevoTexto) {
        navigator.clipboard.writeText(nuevoTexto).then(() => {
            //alert('Texto copiado al portapapeles:', nuevoTexto);
    });
}
}




/*Requisitos:

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as 
dos opciones.
El resultado debe ser mostrado en la pantalla.

Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que 
tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con 
el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

Artículo para ayudarte en esta misión: Paso a Paso para activar tu proyecto en GitHub Pages. | Alura Cursos 
Online

Desencripta nuestro mensaje secreto!

fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober 
cobernclufatimesdober cobern enterximestober!


Elementos principales de la página
Título de su sitio web
Campo para el texto que va a ser encriptado/desencriptado
Un botón para encriptar
Un botón para desencriptar
Área para mostrar el texto encriptado/desencriptado.
Extra!
Un rodapie con los datos de la persona que desarrolló el sitio web!


*/

