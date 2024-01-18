// Selecciona el botón de envío del formulario
document.querySelector('#formulario input[type="submit"]').addEventListener('click', function(event) {
    // Evita el envío del formulario por defecto
    event.preventDefault();
  
    // Selecciona los campos del formulario
    const nombre = document.querySelector('#id-Nombre');
    const apellido = document.querySelector('#id-Apellido');
    const email = document.querySelector('#id-email');
    const contrasenia = document.querySelector('#id-contrasenia');
  
    // Verifica que los campos no estén vacíos
    if (nombre.value.trim() === '') {
      alert('Por favor, ingresa tu nombre.');
      nombre.focus();
      return;
    }
  
    if (apellido.value.trim() === '') {
      alert('Por favor, ingresa tu apellido.');
      apellido.focus();
      return;
    }
  
    if (email.value.trim() === '') {
      alert('Por favor, ingresa tu correo electrónico.');
      email.focus();
      return;
    }
  
    if (contrasenia.value.trim() === '') {
      alert('Por favor, ingresa tu contraseña.');
      contrasenia.focus();
      return;
    }
  
    // Si todos los campos están completos, envía el formulario
    document.querySelector('#formulario').submit();
  });