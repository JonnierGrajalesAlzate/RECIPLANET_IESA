function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

// BASE DE PREGUNTAS MEJORADA
const baseDePreguntas = [
  {
    pregunta: "¿En cuál contenedor va una hamburguesa?",
    ayuda: "Es un residuo orgánico 🍃",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    respuesta: "Verde",
    distractores: ["En cualquiera", "Negro", "Blanco"],
  },
  {
    pregunta: "¿Cómo podemos mejorar el medio ambiente?",
    imagen: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    respuesta: "Recogiendo basuras en las calles",
    distractores: [
      "Arrojando basuras a los ríos",
      "No haciendo nada",
      "No reciclando",
    ],
  },
  {
    pregunta: "¿Qué significan las 3R?",
    ayuda: "Todas empiezan por 'Re' ♻️",
    imagen: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    respuesta: "Reducir, Reutilizar y Reciclar",
    distractores: [
      "Realizar, Rumbo, Riqueza",
      "Recreo, Recursos, Reducir",
      "Reducir, Reutilizar, Raza",
    ],
  },
  {
    pregunta: "¿Por qué hay tanta contaminación en Colombia?",
    imagen: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
    respuesta: "No hay una correcta clasificación de residuos",
    distractores: [
      "Falta de personal",
      "Desinterés social",
      "Falta de cultura ambiental",
    ],
  },
  {
    pregunta: "¿En qué contenedor van las botellas de plástico?",
    imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    respuesta: "Blanco",
    distractores: ["Negro", "Verde", "Rojo"],
  },
  {
    pregunta: "¿Qué se hace con una caja de pizza usada?",
    imagen: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
    respuesta: "Se arroja en el contenedor negro",
    distractores: [
      "Contenedor rojo",
      "Contenedor verde",
      "Contenedor blanco",
    ],
  },
  {
    pregunta: "¿Qué debemos hacer con un tomate podrido?",
    imagen: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
    respuesta: "Tirarlo al contenedor verde",
    distractores: [
      "Contenedor blanco",
      "Contenedor negro",
      "Guardarlo",
    ],
  },
  {
    pregunta: "¿En qué contenedor van las servilletas usadas?",
    imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    respuesta: "Negro",
    distractores: ["Blanco", "Verde", "Rojo"],
  },
  {
    pregunta: "¿Dónde se desechan los vidrios?",
    imagen: "https://images.unsplash.com/photo-1563245372-f21724e3856d",
    respuesta: "Blanco",
    distractores: ["Rojo", "Verde", "Negro"],
  },
  {
    pregunta: "¿Qué hacer si alguien arroja basura fuera del horario?",
    imagen: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0",
    respuesta: "Reportarlo",
    distractores: [
      "Felicitarlo",
      "Hacer lo mismo",
      "Ignorarlo",
    ],
  },
  {
    pregunta: "¿En qué contenedor va el papel de cuaderno?",
    imagen: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    respuesta: "Blanco",
    distractores: ["Negro", "Amarillo", "Verde"],
  },
  {
    pregunta: "¿Cómo informarte mejor sobre reciclaje?",
    imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    respuesta: "Ver videos educativos y páginas confiables",
    distractores: [
      "Solo redes sociales",
      "Preguntar sin investigar",
      "No hacer nada",
    ],
  },
  {
    pregunta: "¿Dónde van los residuos orgánicos?",
    imagen: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    respuesta: "Verde",
    distractores: ["Blanco", "Rojo", "Azul"],
  },
  {
    pregunta: "¿Qué hacer si necesitas ayuda sobre reciclaje?",
    imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    respuesta: "Consultar a padres o profesores",
    distractores: [
      "Ignorar el tema",
      "Pensar que no importa",
      "Buscar cualquier respuesta",
    ],
  },
];