

//nombre = document.querySelector('[name=nombre]').value; --> es lo mismo

// nombre, ciudad, comportamiento son los names, funciona unicamente con ellos.
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;



function validarNombre(nombre) {

    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } 
    
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracter';
    }

    if(/^[a-z]+$/.test(nombre)) {//solamente el nombre, retorna true o false
        return "El campo nombre solo acepta letras" //if not;
    }
    return "";
};


// validar ciudad


function validarCiudad(ciudad) {
    if(ciudad.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } 
    return '';
};


// validar descripcion regalo

function validarDescripcionRegalo(descripcionRegalo) {
    if(descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    } 
    if(descripcionRegalo.length >= 100) {
        return 'Debe tener menos de 100 caracteres';
    } if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){  // ^ = empieza - $ = termina
        return "El campo descripcion solo puede tener numeros y letras";
    }
    return '';
};



function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa");
    const errorNombre = validarNombre($form.nombre.value);
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    manejarErrores([errorNombre]);

    event.preventDefault();
}

function manejarErrores(errores) {
     errorNombre = errores[0] //nombre

     if (errorNombre) {
         $form.nombre.className = "error";
     } else {
         $form.nombre.className = "";
     }
}


const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario; //onsubmit es una propiedad del objeto form que espera la funcion validarformulario.

// 50.02 time