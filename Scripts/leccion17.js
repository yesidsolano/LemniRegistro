function validarFormulario(){
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;
    const contrasena = document.getElementById("contrasena").value;
    const imagen = document.getElementById("imagen").value;

    if(!nombre) { alert("Ingrese campo nombre"); return false;}
    if(telefono == "") { alert("Ingrese campo teléfono"); return false;}
    if(email.length == 0) { alert("Ingrese campo email");return false;}
    if(direccion.length == 0) { alert("Ingrese campo direccion"); return false;}
    if(contrasena =="") { alert("Ingrese campo contraseña");return false;}   
    if(!imagen) { alert("Cargue imagen"); return false;}
    
    else{
        alert("Información enviada");
        return true;
       
        
    }
    
    return true;
}

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }