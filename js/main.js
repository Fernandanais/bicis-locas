function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;
	var tipo = document.getElementsByClassName("form-control").value;

	    if (nombre == "" || nombre.charAt(0) != nombre.charAt(0).toUpperCase() || /[0-9]/.test(nombre) ) {
          var nombreVacio = document.getElementsByClassName('name-container input-box')[0];
          var span = document.createElement('span');
          var requerido1 = document.createTextNode("Debe ingresar su nombre, el cual debe comenzar en mayúscula y no debe tener números");
          nombreVacio.appendChild(span);
          span.appendChild(requerido1);
    }

    	if (apellido == "" || apellido.charAt(0) != apellido.charAt(0).toUpperCase() || /[0-9]/.test(apellido) ) {
          var apellidoVacio = document.getElementsByClassName('lastname-container input-box')[0];
          var span = document.createElement('span');
          var requerido2 = document.createTextNode("Debe ingresar su apellido, el cual debe comenzar en mayúscula y no debe tener números");
          apellidoVacio.appendChild(span);
          span.appendChild(requerido2);
    }

}