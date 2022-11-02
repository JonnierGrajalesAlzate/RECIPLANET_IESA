let nombre, email, numero, contrasena, Rcontrasena;

let formulario =  document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
        LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    numero = document.getElementById('numero').value
    email = document.getElementById('email').value
    contrasena = document.getElementById('contrasena').value
    Rcontrasena = document.getElementById('Rcontrasena').value
    ValidarDatos(nombre, email, numero, contrasena, Rcontrasena)
    guardarLocalStorage(nombre, email, numero, contrasena, Rcontrasena)
}

function ValidarDatos (nombre, email, numero, contrasena, Rcontrasena){
    if(nombre.length==0 || email.length==0 || numero.length==0 || contrasena.length==0 || Rcontrasena.length==0){
        swal("Error", "Espacios en blanco", "error");
    }
}

function guardarLocalStorage(nombre, email, numero, contrasena, Rcontrasena){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Numero',numero)
    localStorage.setItem('Email',email)
    localStorage.setItem('Contraseña',contrasena)
    localStorage.setItem('Rcontraseña',Rcontrasena)
    window.location.assign('index.html');

}