let INDEX_PREGUNTA = 0;
let puntaje = 0;
let bloqueado = false;

cargarPregunta(INDEX_PREGUNTA);

function cargarPregunta(index) {
  bloqueado = false;

  const objetoPregunta = baseDePreguntas[index];

  let opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);

  // Mezclar opciones
  opciones.sort(() => Math.random() - 0.5);

  // Pregunta
  document.getElementById("pregunta").innerText = objetoPregunta.pregunta;

  // Imagen
  const img = document.getElementById("imagen");
  if (objetoPregunta.imagen) {
    img.src = objetoPregunta.imagen;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  // Botón ayuda
  document.getElementById("ayuda").style.display = objetoPregunta.ayuda ? "inline-block" : "none";

  // Opciones
  const botones = document.querySelectorAll(".option");

  botones.forEach((btn, i) => {
    btn.innerText = opciones[i];
    btn.classList.remove("correcto", "incorrecto");
    btn.dataset.correcto = opciones[i] === objetoPregunta.respuesta;
  });
}

/* SELECCIONAR OPCIÓN */
async function seleccionarOpción(index) {
  if (bloqueado) return;
  bloqueado = true;

  const botones = document.querySelectorAll(".option");
  const seleccion = botones[index];
  const esCorrecta = seleccion.dataset.correcto === "true";

  // Mostrar colores
  botones.forEach(btn => {
    if (btn.dataset.correcto === "true") {
      btn.classList.add("correcto");
    } else {
      btn.classList.add("incorrecto");
    }
  });

  if (esCorrecta) {
    puntaje++;
    await Swal.fire({
      title: "✅ Correcto",
      text: "¡Bien hecho!",
      icon: "success",
      timer: 1200,
      showConfirmButton: false
    });
  } else {
    await Swal.fire({
      title: "❌ Incorrecto",
      text: "Sigue intentando 💪",
      icon: "error",
      timer: 1500,
      showConfirmButton: false
    });
  }

  INDEX_PREGUNTA++;

  if (INDEX_PREGUNTA >= baseDePreguntas.length) {
    await Swal.fire({
      title: "🎉 Juego terminado",
      html: `Tu puntaje fue:<br><b>${puntaje}/${baseDePreguntas.length}</b>`,
      icon: "info"
    });

    INDEX_PREGUNTA = 0;
    puntaje = 0;
  }

  cargarPregunta(INDEX_PREGUNTA);
}

/* AYUDA */
function ayuda() {
  const objetoPregunta = baseDePreguntas[INDEX_PREGUNTA];

  Swal.fire({
    title: "💡 Ayuda",
    text: objetoPregunta.ayuda,
    imageUrl: objetoPregunta.ayudaImg,
    imageHeight: 200,
  });
}