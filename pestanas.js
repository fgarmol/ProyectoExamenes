window.addEventListener("load", function() {
    function abrirPest(event, pest) {
      let i, tabcontent, tablinks;
  
      // Ocultar todas las pestañas
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
  
      // Quitar la clase "active" de todos los botones
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
  
      // Mostrar la pestaña seleccionada
      document.getElementById(pest).style.display = "block";
  
      // Añadir la clase "active" al botón clicado
      event.currentTarget.className += " active";
    }
  
    // Agregar el evento a los botones de las pestañas
    let tabButtons = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener("click", function(event) {
        let pest = this.innerHTML.toLowerCase(); // Obtener el nombre de la pestaña
        abrirPest(event, pest);
      });
    }
  
    // Abrir la primera pestaña por defecto
    document.getElementsByClassName("tablinks")[0].click(); // Simula un clic en la primera pestaña
  });
  