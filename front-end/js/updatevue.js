var numeroDocumento=location.search.substr(17)
const { createApp } = Vue
createApp({
data() {
return {
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
    distancia:"",
url:'https://educhayle.pythonanywhere.com/inscriptos/'+numeroDocumento,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
this.nombre = data.nombre;
this.apellido=data.apellido;
this.edad=data.edad;
this.genero=data.genero;
this.nacionalidad=data.nacionalidad;
this.tipoDocumento=data.tipoDocumento;
this.numeroDocumento=data.numeroDocumento;
this.telefono=data.telefono;
this.coberturaMedica=data.coberturaMedica;
this.nombreContacto=data.nombreContacto;
this.telefonoContacto=data.telefonoContacto;
this.distancia=data.distancia;
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
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
        distancia: this.distancia
}
var options = {
body: JSON.stringify(inscripto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "./index.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')