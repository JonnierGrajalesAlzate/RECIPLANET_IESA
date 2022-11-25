// Create a lightbox
(function() {
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");
  
    // Agregar imagen y título a la caja de luz

  
    $lightbox
      .append($img)
      .append($caption);
  
    // Agregar caja de luz al documento
  
    $('body').append($lightbox);
  
    $('.lightbox-gallery img').click(function(e) {
      e.preventDefault();
  
      // link de la imagen
      var src = $(this).attr("data-image-hd");
      var cap = $(this).attr("alt");

  
      $img.attr('src', src);
      $caption.text(cap);
  
      // Mostrar caja de luz
  
      $lightbox.fadeIn('fast');
  
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
  
  }());

