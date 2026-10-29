// Referencias a los elementos del HTML
const btnSubir = document.getElementById('btnSubir');
const inputArchivo = document.getElementById('inputArchivo');
const panelResultado = document.getElementById('panelResultado');
const txtNombre = document.getElementById('txtNombre');
const txtTipo = document.getElementById('txtTipo');
const txtTamanio = document.getElementById('txtTamanio');
const vistaPrevia = document.getElementById('vistaPrevia');

// 1. Al hacer clic en el botón azul, disparamos el input de archivo oculto
btnSubir.addEventListener('click', () => {
    inputArchivo.click();
});

// 2. Escuchamos cuando el usuario selecciona un archivo
inputArchivo.addEventListener('change', function() {
    // Obtenemos el primer archivo seleccionado
    const archivo = this.files[0];
    
    if (archivo) {
        // Mostramos el panel de abajo
        panelResultado.style.display = 'block';
        
        // Escribimos los metadatos del archivo en el HTML
        txtNombre.textContent = `Nombre: ${archivo.name}`;
        txtTipo.textContent = `Tipo: ${archivo.type}`;
        txtTamanio.textContent = `Tamaño: ${archivo.size} bytes`;
        
        // 3. Usamos FileReader para cargar y mostrar la imagen
        const lector = new FileReader();
        
        // Cuando termine de leer el archivo, le pasamos el resultado a la etiqueta <img>
        lector.onload = function(evento) {
            vistaPrevia.src = evento.target.result;
        };

        // Le indicamos que lea el archivo como una URL de datos (Base64)
        lector.readAsDataURL(archivo);
    }
});