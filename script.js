let boton = document.getElementById('miboton');

boton.addEventListener("click", function handleClick() {
    alert('¡Hola, esta es una alerta desde JavaScript 🗿🏛️🍔🐵🌈!');
});


// En este ejemplo se utiliza “event.preventDefault()” para evitar que el formulario se envíe de la manera predeterminada, lo que permite realizar la validación antes de enviar los datos.
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
