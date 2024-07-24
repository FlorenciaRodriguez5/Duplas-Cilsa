function validacion (){
    var email = document.getElementById("Email").value;
   
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
      alert['ERROR El valor ingresado debe cumplir la estructura gramatical de un correo electronico']
      return false; 
     }
     else valor = document.getElementById("name").value; 
      if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
      return false;
     }
     else valor = document.getElementById("Textarea").value;
      if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
      return false;
     }
    
   }
   
   