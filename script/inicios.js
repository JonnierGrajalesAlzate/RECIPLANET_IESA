let email, contrasena;

let formulario =  document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    LeerDatos()
})

function LeerDatos(){
    email = document.getElementById('email').value
    contrasena = document.getElementById('contrasena').value

    ValidarDatos(email, contrasena)
}

function ValidarDatos ( email, contrasena){
    if(email.length==0 || contrasena.length==0){
        swal("Error", "Espacios en blanco", "error");
    }
  
}

function ListarDatos(email, contrasena){
    let emailUsu = localStorage.getItem('Email')
    let contrasenaUsu = localStorage.getItem('Contraseña')

    if(emailUsu== email && contrasenaUsu == contrasena){
    swal({
        title: "Reciplanet",
        Text: "Bienvenido",
        icon: "success",
      });
     window.location.href('index.html');
    }else{
          swal("Error", "Espacios en blanco", "error" );
        }  
}