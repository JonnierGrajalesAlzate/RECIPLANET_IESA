function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas =
   [
    {
      pregunta: "¿En cual contendor va una hamburguesa?",
      ayuda: "Es un residuo organico",
      imagen: "https://storage.contextoganadero.com/s3fs-public/cronica_de_la_semana/field_image/2022-03/cronica-origen-hamburguesas.jpg",
      respuesta: "Verde",
      distractores: ["En cualquiera", "Negro", "Blanco"],
    },
    {
      pregunta: "¿Como podemos mejorar el medio ambiente?",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1dOI9f1sz5xekCA5jW2eRSU6u8Sa_NSaAg&usqp=CAU",
      respuesta: "Recogiendo basuras en las calles",
      distractores: ["Arrojando basuras a los rios", "No haciendo nada", "No reciclando"],
    },
    {
      pregunta: "¿Que significan las 3 R?",
      imagen: "https://t2.uc.ltmcdn.com/es/posts/1/7/9/cual_es_el_significado_de_las_tres_r_26971_600.jpg",
      ayuda: "Empiezan por Re",
      respuesta: "Reutilizar, Reciclar y Reducir",
      distractores: ["Realizar, Rumor, Riqueza", "Recreo, Recursos, Reducir", "Reducir, Reutilizar, Raza"],
    },
    {
      pregunta: "¿Porque en Colombia hay tanta contaminación?",
      respuesta: "No hay un orden de categorias de basuras",
      imagen: "https://t1.ev.ltmcdn.com/es/posts/2/6/3/como_evitar_la_contaminacion_del_suelo_1362_600_square.jpg",
      distractores: ["Porque envarias tiene poco personal", "Somos muy irresponsables como sociedad", "No tenemos cultura"],
    },

    {
      pregunta: "¿En cual contenedor van las botellas de plástico?",
      respuesta: "Blanco",
      imagen: "https://static.abc.es/media/sociedad/2018/07/09/botellas-plastico-k8xG--1248x698@abc.jpg",
      distractores: ["Negro", "Verde", "Rojo"],
    },

    {
      pregunta: "¿Que se hace con la caja de pizza?",
      respuesta: "Se arroja en el contenedor negro",
      imagen: "https://st4.depositphotos.com/16122460/19903/i/600/depositphotos_199035400-stock-photo-open-cardboard-pizza-box-on.jpg",
      distractores: ["Se arroja en el contenedor rojo", "Se arroja en el contenedor verde", "Se arroja en el contenedor blanco"],
    },

    {
      pregunta: "¿Que debemos de hacer con un tomate podrido?",
      respuesta: "Tirarlo al contenedor verde",
      imagen: "https://preview.free3d.com/img/2011/10/1744433180523365960/jaqxka3g-900.jpg",
      distractores: ["Tirarlo al contenedor blanco", "Tirarlo al contenedor negro", "Guardarlo"],
    },

    {
      pregunta: "¿En cual conetendor se arroja las servilletas usadas?",
      respuesta: "Negro",
      imagen: "https://st2.depositphotos.com/3480741/10149/i/600/depositphotos_101498982-stock-photo-hand-in-rubber-glove-holds.jpg",
      distractores: ["Blanco", "Verde", "Rojo"],
    },

    {
      pregunta: "¿Los vidrios en cual contendor va?",
      respuesta: "Blanco",
      imagen: "https://docomopdotcom.files.wordpress.com/2014/09/dp_00_vidrio.jpg",
      distractores: ["Rojo", "Verde", "Negro"],
    },

    {
      pregunta: "¿Que debemos hacer si alguien arroja basuras el día que no corresponde?",
      respuesta: "Reportarlo",
      imagen: "https://www.municomas.gob.pe/resources/upload/slider/M7EG6GP7basura.jpg",
      distractores: ["Felicitarlo", "Hacer lo mismo", "No hacer nada"],
    },

  ];