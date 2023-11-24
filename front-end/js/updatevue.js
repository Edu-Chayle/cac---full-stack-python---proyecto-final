const { createApp } = Vue
createApp({
    data() {
        return {
            url: 'http://127.0.0.1:5000/inscriptos',
            error: false,
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            genero: this.genero,
            nacionalidad: this.nacionalidad,
            tipoDocumento: this.tipoDocumento,
            numeroDocumento: this.numeroDocumento,
            telefono: this.telefono,
            coberturaMedica: this.coberturaMedica,
            nombreContacto: this.nombreContacto,
            telefonoContacto: this.telefonoContacto,
            distancia: this.distancia,
        }
    },
    methods: {
        Buscar() {
            const Url = this.url + '/' + this.numeroDocumento;
            let options = {
                mode: 'cors',
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
            }

            fetch(Url, options)
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        this.error = true;
                        alert('No se encuentro ningun resultado')
                    }else{
                        this.error = false;
                    }
                    console.log(data)
                    this.nombre = data.nombre;
                    this.apellido = data.apellido;
                    this.edad = data.edad;
                    this.genero = data.genero;
                    this.nacionalidad = data.nacionalidad;
                    this.tipoDocumento = data.tipoDocumento;
                    this.telefono = data.telefono;
                    this.coberturaMedica = data.coberturaMedica;
                    this.nombreContacto = data.nombreContacto;
                    this.telefonoContacto = data.telefonoContacto;
                    this.distancia = data.distancia;                    
                })
                .catch(err => {
                    console.error(err);
                })
        },
        Actualizar() {
            const Url = this.url + '/' + this.numeroDocumento;
            let inscripcion = {
                nombre: this.nombre,
                apellido: this.apellido,
                edad: this.edad,
                genero: this.genero,
                nacionalidad: this.nacionalidad,
                tipoDocumento: this.tipoDocumento,
                numeroDocumento: this.numeroDocumento,
                telefono: this.telefono,
                coberturaMedica: this.coberturaMedica,
                nombreContacto: this.nombreContacto,
                telefonoContacto: this.telefonoContacto,
                distancia: this.distancia,
            }
            let options = {
                body: JSON.stringify(inscripcion),
                method: 'PUT',
                mode: 'cors',
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
            }
            fetch(Url, options)
                .then(function () {
                    alert("Registro de Actualizado");
                })
                .catch(err => {
                    console.error(err)
                })
        }
    },
}).mount('#app')