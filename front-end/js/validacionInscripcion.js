const formulario = document.getElementById("formulario-inscripcion");
const inputs = document.querySelectorAll("#formulario-inscripcion input");
const selects = document.querySelectorAll("#formulario-inscripcion select");

const expresiones = {
    nombresYApellidos: /^[a-zA-Z\s]{1,50}$/,
    edad: /^(1[8-9]|[2-9][0-9])$/,
    dni: /^[0-9]{7,8}$/,
    pasaporte: /^[a-zA-Z0-9\s-]{1,20}$/,
    telefonos: /^\d{7,14}$/
}

const mensajesDeAyuda = {
    nombre: "Ingrese su nombre",
    apellido: "Ingrese su apellido",
    edad: "Ingrese su edad",
    telefono: "Ingrese su teléfono",
    numeroDocumento: "Ingrese su número de documento",
    coberturaMedica: "Ingrese su cobertura médica",
    nombreContacto: "Ingrese el nombre de su contacto",
    telefonoContacto: "Ingrese el teléfono de su contacto"
};

function validarFormulario() {
    let esValido = true;


    for (const input of inputs) {
        const contenidoInput = input.value.trim();

        function validarElemento(expresion) {
            if (!expresion.test(contenidoInput)) {
                input.classList.add("input-error");
                input.setAttribute("placeholder", mensajesDeAyuda[input.name]);
                esValido = false;
            } else {
                input.classList.remove("input-error");
                input.removeAttribute("placeholder");
            }
        }

        if (input.name === "nombre" || input.name === "apellido" ||
            input.name === "coberturaMedica" || input.name === "nombreContacto") {
            validarElemento(expresiones.nombresYApellidos);
        }

        if (input.name === "edad") {
            validarElemento(expresiones.edad);
        }

        if (input.name === "numeroDocumento") {
            const tipoDocumento = document.querySelector("#select-tipo-documento").value;

            if (tipoDocumento === "D" || contenidoInput === "") {
                validarElemento(expresiones.dni);
            } else if (tipoDocumento === "P") {
                validarElemento(expresiones.pasaporte);
            }
        }

        if (input.name === "telefono" || input.name === "telefonoContacto") {
            validarElemento(expresiones.telefonos);
        }

        input.addEventListener("input", () => {
            const contenidoInput = input.value.trim();

            if (contenidoInput !== "") {
                input.classList.remove("input-error");
            } else {
                input.classList.add("input-error");
            }
        });
    }


    for (const select of selects) {
        if (select.value === "") {
            select.classList.add("select-error");
            esValido = false;
        } else {
            select.classList.remove("select-error");
        }

        select.addEventListener("change", () => {
            if (select.value !== "") {
                select.classList.remove("select-error");
            }
        });
    }


    if (!esValido) {
        alert("Por favor, complete todos los campos obligatorios con valores válidos.");
    }

    return esValido;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (validarFormulario()) {
       
        formulario.submit();

    }
});