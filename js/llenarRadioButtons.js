/* Radio button Hijos */ 

const sonsContainer = document.getElementById("sonsContainer");

const sonsOptions = [
  { value: "No tengo", label: "No tengo" },
  { value: "1 hijo", label: "1 hijo" },
  { value: "2 hijos", label: "2 hijos" },
  { value: "3 hijos", label: "3 hijos" },
  { value: "Más de 4 hijos", label: "Más de 4 hijos" }
];

sonsOptions.forEach(opcion => {
  // Crea el contenedor del radio button
  const label = document.createElement("label");
  label.classList.add("flex", "items-center", "space-x-2", "p-2", "rounded-lg", "transition-all", "hover:bg-blue-100", "focus:ring-2", "focus:ring-blue-500", "w-full");

  // Crea el radio button
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "sons";
  input.value = opcion.value;
  input.classList.add("form-radio", "text-blue-600", "border-gray-300", "focus:ring-blue-500", "hover:bg-blue-200", "transition-colors");
  input.required = true;

  // Crea el texto del radio button
  const span = document.createElement("span");
  span.classList.add("ml-2", "text-gray-700", "font-medium", "text-lg");
  span.textContent = opcion.label;

  // Añade el radio button y el texto al label
  label.appendChild(input);
  label.appendChild(span);

  // Añade el label al contenedor
  sonsContainer.appendChild(label);
});

/* Fin Radio Button */

/* Radio Button Poblacion */

const populationsContainer = document.getElementById("populationsContainer");

const populationsOptions = [
  { value: "Ninguna", label: "Ninguna" },
  { value: "Indígena", label: "Indígena" },
  { value: "Afrocolombianos", label: "Afrocolombianos" },
  { value: "Raízales", label: "Raízales" },
  { value: "Pueblo ROM o Gitano", label: "Pueblo ROM o Gitano" }
];

populationsOptions.forEach(opcion => {
  // Crea el contenedor del radio button
  const label = document.createElement("label");
  label.classList.add("flex", "items-center", "space-x-2", "p-2", "rounded-lg", "transition-all", "hover:bg-blue-100", "focus:ring-2", "focus:ring-blue-500", "w-full");

  // Crea el radio button
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "populations";
  input.value = opcion.value;
  input.classList.add("form-radio", "text-blue-600", "border-gray-300", "focus:ring-blue-500", "hover:bg-blue-200", "transition-colors");
  input.required = true;

  // Crea el texto del radio button
  const span = document.createElement("span");
  span.classList.add("ml-2", "text-gray-700", "font-medium", "text-lg");
  span.textContent = opcion.label;

  // Añade el radio button y el texto al label
  label.appendChild(input);
  label.appendChild(span);

  // Añade el label al contenedor
  populationsContainer.appendChild(label);
});

/* Fin Radio Button */ 

// Contenedor donde se insertarán las opciones de discapacidad
const disabilitiesContainer = document.getElementById("disabilitiesContainer");
const otherDisabilityContainer = document.getElementById("otherDisability");

// Opciones de discapacidad
const disabilitiesOptions = [
  { value: "Ninguna", label: "Ninguna" },
  { value: "Discapacidad Motriz", label: "Discapacidad Motriz" },
  { value: "Discapacidad Sorda", label: "Discapacidad Sorda" },
  { value: "Discapacidad Cognitiva", label: "Discapacidad Cognitiva" },
  { value: "SordoCeguera", label: "SordoCeguera" },
  { value: "Trastorno de la Voz y el Habla", label: "Trastorno de la Voz y el Habla" },
  { value: "Otra", label: "Otra (Seleccione esta opción para mostrar la siguiente sección)" }
];

// Crear dinámicamente los radio buttons
disabilitiesOptions.forEach(option => {
  const label = document.createElement("label");
  label.classList.add(
    "flex", "items-center", "space-x-2", "p-2", "rounded-lg", "transition-all", "hover:bg-blue-100",
    "focus:ring-2", "focus:ring-blue-500", "w-full"
  );

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "disabilities";
  input.value = option.value;
  input.classList.add(
    "form-radio", "text-blue-600", "border-gray-300", "focus:ring-blue-500", "hover:bg-blue-200", "transition-colors"
  );

  // Evento para mostrar/ocultar el contenedor de "Otra discapacidad"
  input.addEventListener("change", () => {
    if (option.value === "Otra") {
      // Mostrar el input para la otra discapacidad con animación
      otherDisabilityContainer.classList.remove("hidden", "opacity-0", "scale-y-0");
      otherDisabilityContainer.classList.add("opacity-100", "scale-y-100");
    } else {
      // Ocultar el input para la otra discapacidad con animación
      otherDisabilityContainer.classList.add("opacity-0", "scale-y-0");
      otherDisabilityContainer.classList.remove("opacity-100", "scale-y-100");
      setTimeout(() => otherDisabilityContainer.classList.add("hidden"), 300); // Tiempo de la animación
    }
  });

  // Crear el texto para el radio button
  const span = document.createElement("span");
  span.classList.add("ml-2", "text-gray-700", "font-medium", "text-lg");
  span.textContent = option.label;

  // Añadir el radio button y el texto al label
  label.appendChild(input);
  label.appendChild(span);

  // Añadir el label al contenedor de discapacidades
  disabilitiesContainer.appendChild(label);
});


/* Radio button Trabajo */ 

const jobsContainer = document.getElementById("jobsContainer");

const jobsOptions = [
  { value: "No estoy trabajando", label: "No estoy trabajando" },
  { value: "Sí, Empleado", label: "Sí, Empleado" },
  { value: "Sí, Independiente", label: "Sí, Independiente" }
];

jobsOptions.forEach(opcion => {
  // Crea el contenedor del radio button
  const label = document.createElement("label");
  label.classList.add("flex", "items-center", "space-x-2", "p-2", "rounded-lg", "transition-all", "hover:bg-blue-100", "focus:ring-2", "focus:ring-blue-500", "w-full");

  // Crea el radio button
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "jobs";
  input.value = opcion.value;
  input.classList.add("form-radio", "text-blue-600", "border-gray-300", "focus:ring-blue-500", "hover:bg-blue-200", "transition-colors");
  input.required = true;

  // Crea el texto del radio button
  const span = document.createElement("span");
  span.classList.add("ml-2", "text-gray-700", "font-medium", "text-lg");
  span.textContent = opcion.label;

  // Añade el radio button y el texto al label
  label.appendChild(input);
  label.appendChild(span);

  // Añade el label al contenedor
  jobsContainer.appendChild(label);
});

/* Fin Radio Button */
