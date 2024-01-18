// Validar correo electrónico (formato básico)
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  document.getElementById('errorEmail').innerHTML = 'Por favor, ingrese un correo electrónico válido';
  return; }

// Validar nombre (no debe estar vacío)
if (nombre.trim() === '') {
document.getElementById('errorNombre').innerHTML = 'Por favor, ingrese su nombre';
return; }