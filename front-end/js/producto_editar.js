console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
nombre:"",
imagen:"",
stock:0,
precio:0,
url:'http://mcerda.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.nombre = data.nombre;
this.apellido=data.apellido;
this.edad=data.edad;
this.genero=data.genero;
this.nacionalidad=data.nacionalidad;
this.tipodocumento=data.tipodocumento;
this.numdocumento=data.numdocumento;
this.telefono=data.telefono;
this.cobertura=data.cobertura;
this.nomcontacto=data.nomcontacto;
this.telcontacto=data.telcontacto;
this.distancia=data.distancia;
this.imagen=data.imagen
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let producto = {
nombre:this.nombre,
apellido: this.apellido,
edad: this.edad,
genero:this.genero,
nacionalidad:this.nacionalidad,
tipodocumento: this.tipodocumento,
numdocumento: this.numdocumento,
telefono:this.telefono,
cobertura:this.cobertura,
nomcontacto: this.nomcontacto,
telcontacto: this.telcontacto,
distancia: this.distancia,
imagen:this.imagen
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "./inscriptos.html";
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
