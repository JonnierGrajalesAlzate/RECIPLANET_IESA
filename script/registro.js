let nombre, email, contrasena, Rcontrasena;

let formulario =  document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
        LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    email = document.getElementById('email').value
    contrasena = document.getElementById('contrasena').value
    Rcontrasena = document.getElementById('Rcontrasena').value
    ValidarDatos(nombre, email, contrasena, Rcontrasena)
    guardarLocalStorage(nombre, email, contrasena, Rcontrasena)
}

function ValidarDatos (nombre, email, contrasena, Rcontrasena){
    if(nombre.length==0 || email.length==0 || contrasena.length==0 || Rcontrasena.length==0){
        swal("Error", "Espacios en blanco", "error");
    }
}

function guardarLocalStorage(nombre, email, contrasena, Rcontrasena){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Email',email)
    localStorage.setItem('Contraseña',contrasena)
    localStorage.setItem('Recontraseña',Rcontrasena)
    swal({
        title: "Registrado!",
        text: "Bienvenido!",
        icon: "success",
        button: "continuar",
      });
}