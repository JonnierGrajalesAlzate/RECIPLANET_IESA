function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
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


  ];
  