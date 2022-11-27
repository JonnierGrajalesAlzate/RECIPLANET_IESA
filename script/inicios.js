let email, contrasena;

let formulario =  document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
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
    let emailUsu = localStorage.getItem('Email');
    let contrasenaUsu = localStorage.getItem('Contraseña');

    if(emailUsu== email && contrasenaUsu == contrasena){
        swal({
            title: "Bienvenido!",
            text: "Reciplanet!",
            icon: "success",
            button: "continuar",
          });
          window.location.assign('index.html');
    }else{
          swal("Error", "Espacios en blanco", "error" );
        }  
}