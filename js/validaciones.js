document.addEventListener('DOMContentLoaded', () => {
  updateProgress(); // Actualiza el progreso cuando la página carga
});


// Función para actualizar la visibilidad del mensaje de campos obligatorios
function updateMandatoryFieldsMessage() {
  const mandatoryFieldsMessage = document.getElementById('mandatoryFieldsMessage');
  
  // Mostrar el mensaje solo si estamos en un paso 1, 2, 3 o 4
  if (currentStep >= 1 && currentStep <= 4) {
    mandatoryFieldsMessage.style.display = 'block'; // Mostrar el mensaje
  } else {
    mandatoryFieldsMessage.style.display = 'none'; // Ocultar el mensaje en el paso 5
  }
}

function cancelForm() {
  // Redirigir a la página cancel.html
  window.location.href = 'cancel.html';
}


let currentStep = 1; // Empezamos en el paso 1

// Función para actualizar los indicadores de progreso y mostrar/ocultar secciones
function updateProgress() {
  updateMandatoryFieldsMessage();
  // Actualizar indicadores de progreso
  for (let i = 1; i <= 5; i++) {
    const stepElement = document.getElementById(`step-${i}`);
    const indicator = document.getElementById(`indicator-${i}`);

    if (i < currentStep) {
      stepElement.classList.remove('bg-gray-200');
      stepElement.classList.add('bg-blue-600');
      indicator.classList.remove('text-gray-500');
      indicator.classList.add('text-white');
    } else if (i === currentStep) {
      stepElement.classList.remove('bg-gray-200', 'bg-blue-600'); // Evitar conflictos
      stepElement.classList.add('bg-blue-600'); // Color activo
      indicator.classList.remove('text-gray-500');
      indicator.classList.add('text-white'); // Indicador activo
    } else {
      stepElement.classList.remove('bg-blue-600');
      stepElement.classList.add('bg-gray-200');
      indicator.classList.remove('text-white');
      indicator.classList.add('text-gray-500'); // Indicador inactivo
    }
  }

  // Mostrar y ocultar las secciones del formulario
  for (let i = 1; i <= 5; i++) {
    const section = document.getElementById(`section-${i}`);
    if (i === currentStep) {
      section.style.display = 'block'; // Mostrar la sección actual
    } else {
      section.style.display = 'none'; // Ocultar las demás secciones
    }
  }
}

// Función para mostrar alerta con SweetAlert en caso de error
function showErrorAlert(message, inputElement) {
  Swal.fire({
    icon: 'error',
    title: '¡Error!',
    text: message,
    confirmButtonText: 'Cerrar'
  }).then(() => {
    setTimeout(() => {
      inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      inputElement.focus();
    }, 500);
  });
}

// Función para mostrar una alerta de éxito con SweetAlert
function showSuccessAlert() {
  Swal.fire({
    icon: 'success',
    title: '¡Guardado!',
    text: 'Los datos se han guardado correctamente.',
    showConfirmButton: false, // No mostramos el botón de confirmación
    timer: 2000, // Tiempo en milisegundos (3 segundos)
    timerProgressBar: true, // Habilita la barra de progreso
    willClose: () => {
      window.location.href = 'gracias.html'; // Redirigir después de 3 segundos
    }
  });
}

// Función para validar el formato del correo
function validateEmailFormat(email) {
  // Expresión regular para validar el correo
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Verifica si el correo no está vacío y si coincide con el formato
  return emailRegex.test(email.value);
}

// Validar si todos los campos obligatorios están llenos
function validateStep1() {
  const career = document.getElementById('career');
  if (!career.value) {
    showErrorAlert('Por favor seleccione una carrera.', career);
    return false;
  }
  return true;
}

function validateStep2() {
  const firstName = document.getElementById('first_name');
  const secondName = document.getElementById('second_name');
  const firstLastname = document.getElementById('first_lastname');
  const secondLastname = document.getElementById('second_lastname');
  const typeDocument = document.getElementById('typeDocument');
  const noDocument = document.getElementById('noDocument');
  const dateBirthday = document.getElementById('date_birthday');
  const sex = document.getElementById('sex');
  const civilState = document.getElementById('civilState');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const countryCodeSelect = document.getElementById('countryCodeSelect');
  const cel = document.getElementById('cel');

  // Expresión regular para validar solo letras (espacios permitidos)
  const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/;

  // Validar campos de nombres y apellidos
  if (!firstName.value) {
    showErrorAlert('El primer nombre es obligatorio.', firstName);
    return false;
  } else if (!nameRegex.test(firstName.value)) {
    showErrorAlert('Los campos de nombre no deben contener números ni carácteres especiales (Solo Letras). 🤏', firstName);
    return false;
  }

  if (!secondName.value && secondName.value !== '') { // Campo opcional
    showErrorAlert('El segundo nombre es obligatorio.', secondName);
    return false;
  } else if (secondName.value && !nameRegex.test(secondName.value)) {
    showErrorAlert('Los campos de nombre no deben contener números ni carácteres especiales (Solo Letras). 🤏', secondName);
    return false;
  }

  if (!firstLastname.value) {
    showErrorAlert('El primer apellido es obligatorio.', firstLastname);
    return false;
  } else if (!nameRegex.test(firstLastname.value)) {
    showErrorAlert('El primer apellido solo debe contener letras.', firstLastname);
    return false;
  }

  if (!secondLastname.value) {
    showErrorAlert('El segundo apellido es obligatorio.', secondLastname);
    return false;
  } else if (!nameRegex.test(secondLastname.value)) {
    showErrorAlert('El segundo apellido solo debe contener letras.', secondLastname);
    return false;
  }

  if (!typeDocument.value) {
    showErrorAlert('Por favor seleccione el tipo de documento.', typeDocument);
    return false;
  }

  if (!noDocument.value) {
    showErrorAlert('El número de documento es obligatorio.', noDocument);
    return false;
  }

  // Verificar que la fecha tiene el formato correcto: YYYY-MM-DD
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateBirthday.value)) {
    showErrorAlert('La fecha de nacimiento debe tener el formato correcto (YYYY-MM-DD).', dateBirthday);
    return false;
  }

  if (!sex.value) {
    showErrorAlert('Por favor seleccione su sexo biológico.', sex);
    return false;
  }

  if (!civilState.value) {
    showErrorAlert('Por favor seleccione su estado civil.', civilState);
    return false;
  }

  // Validación de email
  if (!email.value) {
    showErrorAlert('Por favor digite su correo.', email);
    return false;
  }

  if (!validateEmailFormat(email)) {
    showErrorAlert('Por favor ingrese un correo electrónico válido (ej: example@email.com).', email);
    return false;
  }

  // Validar que se haya seleccionado un indicativo
  if (!countryCodeSelect.value) {
    showErrorAlert('Por favor selecciona un indicativo.', countryCodeSelect);
    return false;
  }

  if (!cel.value) {
    showErrorAlert('Por favor digite su número de celular.', cel);
    return false;
  }

  // Verifica si el número de celular contiene al menos 10 dígitos y solo números
  const phoneRegex = /^\d{10,12}$/;  // Asegura que haya entre 10 y 12 números

  if (!phoneRegex.test(cel.value)) {
    showErrorAlert('El número de celular debe tener entre 10 y 12 dígitos numéricos.', cel);
    return false;
  }

  return true;
}

function validateStep3() {
  const country = document.getElementById('country');
  const city = document.getElementById('city');
  const address = document.getElementById('address');

  if (!country.value) {
    showErrorAlert('Por favor seleccione su país.', country);
    return false;
  }
  if (!city.value) {
    showErrorAlert('Por favor seleccione su ciudad.', city);
    return false;
  }

  if (!address.value) {
    showErrorAlert('Por favor escriba su direccion.', address);
    return false;
  }

  return true;
}

// Validar Step 4
function validateStep4() {
  // Validación para "¿Tiene usted hijos?"
  const sonsContainer = document.getElementById('sonsContainer');
  const sonsSelected = sonsContainer.querySelectorAll('input[type="radio"]:checked').length > 0;
  if (!sonsSelected) {
    showErrorAlert('Por favor seleccione si tiene hijos.', sonsContainer);
    return false;
  }

  // Validación para "¿Se reconoce como parte de las siguientes poblaciones?"
  const populationsContainer = document.getElementById('populationsContainer');
  const populationsSelected = populationsContainer.querySelectorAll('input[type="radio"]:checked').length > 0;
  if (!populationsSelected) {
    showErrorAlert('Por favor seleccione si pertenece a alguna poblacion.', populationsContainer);
    return false;
  }

  // Validación para "¿Cuenta con alguna Discapacidad?"
  const disabilitiesContainer = document.getElementById('disabilitiesContainer');
  const disabilitiesSelected = disabilitiesContainer.querySelectorAll('input[type="radio"]:checked').length > 0;
  const otherDisabilityInput = document.getElementById('otherDisabilityInput');
  if (!disabilitiesSelected) {
    showErrorAlert('Por favor seleccione si tiene alguna discapacidad.', disabilitiesContainer);
    return false;
  } else {
    // Si seleccionaron "Otra" discapacidad, verificar que el campo esté lleno
    const otherDisabilityChecked = disabilitiesContainer.querySelector('input[value="otra"]:checked');
    if (otherDisabilityChecked && !otherDisabilityInput.value) {
      showErrorAlert('Por favor indique cuál es su otra discapacidad.', otherDisabilityInput);
      return false;
    }
  }

  // Validación para "¿Usted Trabaja actualmente?"
  const jobsContainer = document.getElementById('jobsContainer');
  const jobsSelected = jobsContainer.querySelectorAll('input[type="radio"]:checked').length > 0;
  if (!jobsSelected) {
    showErrorAlert('Por favor seleccione si trabaja o no.', jobsContainer);
    return false;
  }

   return true;
}

// Función para avanzar al siguiente paso
function nextStep() {
  let isValid = false;
  
  // Validaciones para cada paso
  if (currentStep === 1) {
    isValid = validateStep1();
  } else if (currentStep === 2) {
    isValid = validateStep2();
  } else if (currentStep === 3) {
    isValid = validateStep3();
  } else if (currentStep === 4) {
    isValid = validateStep4();
  }

  // Si la validación del paso es exitosa
  if (isValid) {
    // Si estamos en el paso 4, avanzamos al paso 5
    if (currentStep === 4) {
      currentStep = 5;  // Avanzamos al paso 5

      // Actualizamos el progreso
      updateProgress();
      
      // Muestra el botón de "Enviar" (suponiendo que estaba oculto hasta ahora)
      document.getElementById('submit').style.display = 'block';
    } else {
      // Si no estamos en el paso 4, avanzamos al siguiente paso
      currentStep++;
      updateProgress();
    }
  }
}

// Función para manejar el evento de enviar
document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault();  // Prevenir el comportamiento por defecto del formulario
  
  // Crear el objeto JSON con los datos del formulario
  const formData = {
    // Paso 1: Información personal
    carrera_seleccionada: document.getElementById('career').value,
    primer_nombre: document.getElementById('first_name').value,
    segundo_nombre: document.getElementById('second_name').value ?? '',
    primer_apellido: document.getElementById('first_lastname').value,
    segundo_apellido: document.getElementById('second_lastname').value,
    
    // Paso 2: Datos de documento
    tipo_documento: document.getElementById('typeDocument').value,
    numero_documento: document.getElementById('noDocument').value,
    
    // Paso 3: Información personal adicional
    fecha_nacimiento: document.getElementById('date_birthday').value,
    sexo_biologico: document.getElementById('sex').value,
    estado_civil: document.getElementById('civilState').value,
  
    // Paso 4: Contacto y dirección
    correo: document.getElementById('email').value,
    telefono: document.getElementById('countryCodeSelect').value + document.getElementById('phone').value ?? '',
    celular: document.getElementById('countryCodeSelect').value + document.getElementById('cel').value,
    pais: document.getElementById('country').value,
    ciudad: document.getElementById('city').value,
    direccion: document.getElementById('address').value,
  
    // Paso 5: Información adicional
    discapacidad: document.getElementById('disabilitiesContainer').value ?? 'Ninguna',  // Campo de discapacidad
    otra_discapacidad: document.getElementById('otherDisabilityInput').value ?? 'Ninguna'  // Otro campo adicional
  };

  // Guardar el objeto JSON como un archivo
  const jsonString = JSON.stringify(formData);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'formulario_' + formData.primer_nombre + '_' + formData.primer_apellido + '.json';
  a.click();
  
  // Mostrar la alerta de éxito
  showSuccessAlert();
});


// Función para retroceder al paso anterior
function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateProgress(); // Actualiza el progreso al retroceder
  }
}

