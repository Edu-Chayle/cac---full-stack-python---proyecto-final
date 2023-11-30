const { createApp } = Vue
createApp({
data() {
return {
productos:[],
//url:'http://localhost:5000/productos',
// si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
url:'http://mcerda.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
error:false,
cargando:true,
/*atributos para el guardar los valores del formulario */
id:0,
nombre:"",
apellido:"",
edad:0,
genero:"",
nacionalidad:"",
tipodocumento:"",
numdocumento:0,
telefono:0,
cobertura:"",
nomcontacto:"",
telcontacto:0,
distancia:"",
}
},
methods: {
fetchData(url) {
fetch(url)

.then(response => response.json())
.then(data => {
this.productos = data;
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},
eliminar(producto) {
const url = this.url+'/' + producto;
var options = {
method: 'DELETE',
}
fetch(url, options)
.then(res => res.text()) // or res.json()
.then(res => {
location.reload();
})
},
grabar(){
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
    distancia: this.distancia
}
var options = {
body:JSON.stringify(producto),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href = "./inscriptos.html";
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
