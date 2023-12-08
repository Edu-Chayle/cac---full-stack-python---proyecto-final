const { createApp } = Vue
createApp({
data() {
return {
    inscriptos:[],
url:'https://educhayle.pythonanywhere.com/inscriptos',
error:false,
cargando:true,
/*atributos para el guardar los valores del formulario */
nombre:"",
apellido:"",
edad:"",
genero:"",
nacionalidad:"",
tipoDocumento:"",
numeroDocumento:"",
telefono:"",
coberturaMedica:"",
nombreContacto:"",
telefonoContacto:"",
circuito:"",
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
this.inscriptos = data;
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},
eliminar(inscripto) {
    const confirmacion = window.confirm('¿Está seguro de que quiere eliminar este inscripto?');

    if (confirmacion) {
        const url = this.url + '/' + inscripto;

        var options = {
            method: 'DELETE',
        }

        fetch(url, options).then(res => res.text()).then(res => {
            location.reload();
        })
        .catch(err => {
            console.error(err);
        });
    } else {
        alert('Eliminación cancelada.');
    }
},
grabar(){
let inscripto = {
    nombre:this.nombre,
    apellido: this.apellido,
    edad: this.edad,
    genero:this.genero,
    nacionalidad:this.nacionalidad,
    tipoDocumento: this.tipoDocumento,
    numeroDocumento: this.numeroDocumento,
    telefono:this.telefono,
    coberturaMedica:this.coberturaMedica,
    nombreContacto: this.nombreContacto,
    telefonoContacto: this.telefonoContacto,
    circuito: this.circuito
}
var options = {
body:JSON.stringify(inscripto),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href = "./index.html";
})
.catch(err => {
console.error(err);
alert("Error al Grabarr")

})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')