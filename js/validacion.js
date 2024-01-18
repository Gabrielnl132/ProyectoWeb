// Validar correo electrónico (formato básico)
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  document.getElementById('errorEmail').innerHTML = 'Por favor, ingrese un correo electrónico válido';
  return; }

// Validar nombre (no debe estar vacío)
if (nombre.trim() === '') {
document.getElementById('errorNombre').innerHTML = 'Por favor, ingrese su nombre';
return; }

// Validar contraseña (mínimo 8 caracteres, 1 mayúscula, 1 número y 1 carácter especial)
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (!passwordRegex.test(password)) {
  document.getElementById('errorPassword').innerHTML = 'Por favor, ingrese una contraseña válida (mínimo 8 caracteres, 1 mayúscula, 1 número y 1 carácter especial).'
  return;
}