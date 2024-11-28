// estado civil
const TipoDocumentos = [
    { value: "CC - Cédula de Ciudadanía", text: "CC - Cédula de Ciudadanía" },
    { value: "CE - Cédula de Extranjería", text: "CE - Cédula de Extranjería" },
    { value: "PSP - Pasaporte", text: "PSP - Pasaporte" },
    { value: "PEP - Permiso Especial de Permanencia", text: "PEP - Permiso Especial de Permanencia" },
    { value: "PT - Permiso Temporal", text: "PT - Permiso Temporal" },
    { value: "DE - Documento Extranjero", text: "DE - Documento Extranjero" }
];

const TipoDocumentosSelect = document.getElementById("typeDocument");

TipoDocumentos.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    TipoDocumentosSelect.appendChild(optionElement);
});

// sexo
const sexo = [
    { value: "M - Masculino", text: "M - Masculino" },
    { value: "F - Femenino", text: "F - Femenino" }
];

const sexoSelect = document.getElementById("sex");

sexo.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    sexoSelect.appendChild(optionElement);
});

// estado civil
const estadoCivil = [
    { value: "S - Soltero/a", text: "S - Soltero/a" },
    { value: "C - Casado/a", text: "C - Casado/a" },
    { value: "D - Divorciado/a", text: "D - Divorciado/a" },
    { value: " V - Viudo/a", text: " V - Viudo/a" }
];

const estadoCivilSelect = document.getElementById("civilState");

estadoCivil.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    estadoCivilSelect.appendChild(optionElement);
});

// carrera
const career = [
        { value:"administración de empresas", text: "administración de empresas" },
        { value:"bacteriología", text: "bacteriología" },
        { value:"contaduría pública", text: "contaduría pública" },
        { value:"derecho", text: "derecho" },
        { value:"enfermería", text: "enfermería" },
        { value:"ingeniería de sistemas", text: "ingeniería de sistemas" },
        { value:"instrumentación quirúrgica | cartagena", text: "instrumentación quirúrgica | cartagena" },
        { value:"licenciatura en educación infantil", text: "licenciatura en educación infantil" },
        { value:"medicina", text: "medicina" },
        { value:"odontología", text: "odontología" },
        { value:"tecnología en atención prehospitalaria", text: "tecnología en atención prehospitalaria" },
        { value:"tecnología en estética y cosmetología", text: "tecnología en estética y cosmetología" },
        { value:"tecnología en mecánica dental", text: "tecnología en mecánica dental" },
        { value:"trabajo social", text: "trabajo social" }
];

const careerSelect = document.getElementById("career");

career.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    careerSelect.appendChild(optionElement);
});

// Lista de países
const country = [
    { value: "ARG - Argentina", text: "ARG - Argentina" },
    { value: "BRA - Brasil", text: "BRA - Brasil" },
    { value: "CL - Chile", text: "CL - Chile" },
    { value: "COL - Colombia", text: "COL - Colombia" },
    { value: "MX - México", text: "MX - México" },
    { value: "PER - Perú", text: "PER - Perú" },
    { value: "URU - Uruguay", text: "URU - Uruguay" },
    { value: "ECU - Ecuador", text: "ECU - Ecuador" },
    { value: "BOL - Bolivia", text: "BOL - Bolivia" },
    { value: "PAR - Paraguay", text: "PAR - Paraguay" },
];

// Mapa de países y sus ciudades
const citiesForCountries = {
    "Argentina": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata", "Mar del Plata", "Salta", "San Juan", "Neuquén", "San Luis"],
    "Bolivia": ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Oruro", "Potosí", "Tarija", "Cobija", "Trinidad", "El Alto"],
    "Brasil": ["São Paulo", "Río de Janeiro", "Brasilia", "Salvador", "Belo Horizonte", "Curitiba", "Porto Alegre", "Recife", "Fortaleza", "Manaus"],
    "Chile": ["Santiago", "Valparaíso", "Concepción", "La Serena", "Antofagasta", "Temuco", "Iquique", "Rancagua", "Puerto Montt", "Talca"],
    "Colombia": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Bucaramanga", "Pereira", "Cúcuta", "Manizales", "Santa Marta"],
    "México" : ["Ciudad de México", "Guadalajara", "Monterrey", "Cancún", "Mérida", "Puebla", "Tijuana", "León", "Querétaro", "Oaxaca"],
    "Ecuador": ["Quito", "Guayaquil", "Cuenca", "Ambato", "Portoviejo", "Loja", "Manta", "Santo Domingo", "Machala", "Esmeraldas"],
    "Paraguay": ["Asunción", "Ciudad del Este", "Encarnación", "Luque", "San Lorenzo", "Fernando de la Mora", "Lambaré", "Capiatá", "Pedro Juan Caballero", "Villa Elisa"],
    "Perú": ["Lima", "Arequipa", "Cusco", "Trujillo", "Chiclayo", "Piura", "Iquitos", "Huancayo", "Tacna", "Puno"],
    "Uruguay": ["Montevideo", "Salto", "Paysandú", "Maldonado", "Rivera", "Tacuarembó", "Artigas", "Mercedes", "Minas", "Florida"]
};

// Obtener los elementos de los selectores y el campo de dirección
const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");
const addressInput = document.getElementById("address");

// Llenar el select de países con las opciones
country.forEach(opcion => {
    const optionElement = document.createElement("option");
    optionElement.value = opcion.value;
    optionElement.textContent = opcion.text;
    countrySelect.appendChild(optionElement);
});

// Cambiar las opciones de ciudad según el país seleccionado
countrySelect.addEventListener("change", function () {
    const countrySelected = this.value.split(" - ")[1]; // Extraer solo el nombre del país, sin el código

    // Limpiar opciones previas
    citySelect.innerHTML = '<option value="" disabled selected>Seleccione su ciudad de Residencia</option>';

    // Agregar las ciudades correspondientes al país seleccionado
    if (citiesForCountries[countrySelected]) {
        citiesForCountries[countrySelected].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });

        // Habilitar el campo de ciudad
        citySelect.disabled = false;
    } else {
        // Deshabilitar ciudad y dirección si no hay un país válido
        citySelect.disabled = true;
        addressInput.disabled = true;
    }
});

// Habilitar el campo de dirección al seleccionar una ciudad
citySelect.addEventListener("change", function () {
    addressInput.disabled = !this.value; // Habilitar si hay una ciudad seleccionada
});

// Lista de países con sus indicativos y URLs de banderas
const countries = [
    { value: "+57", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png", name: "Colombia" },
    { value: "+54", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg", name: "Argentina" },
    { value: "+55", flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg", name: "Brazil" },
    { value: "+56", flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg", name: "Chile" },
    { value: "+52", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg", name: "Mexico" },
    { value: "+51", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg", name: "Peru" },
    { value: "+598", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg", name: "Uruguay" },
    { value: "+593", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg", name: "Ecuador" },
    { value: "+591", flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg", name: "Bolivia" },
    { value: "+595", flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg", name: "Paraguay" },
  ];
  
  // Obtener el contenedor del select
  const countryCodeSelect = document.getElementById('countryCodeSelect');
  
  // Llenar el select con los países e indicativos
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.value;  // Indicativo del país
    option.innerHTML = `
      <img src="${country.flag}" alt="${country.name} flag" style="width: 20px; height: 15px; margin-right: 8px;">
      ${country.value} (${country.name})
    `;
    countryCodeSelect.appendChild(option);
  });
  
  // EventListener para manejar el cambio en el select (opcional, si quieres personalizar la vista después de seleccionar)
  countryCodeSelect.addEventListener('change', (event) => {
    const selectedOption = event.target.selectedOptions[0];
    const selectedValue = selectedOption.value;
  });
  