window.addEventListener("load", function(){

    this.document.getElementById("iniSesion").addEventListener("click", function(){
      window.location.href='inicioSesion.html';
    });

    this.document.getElementById("registrarse").addEventListener("click", function(){
      window.location.href='registro.html';
    });

    let header = document.getElementById('app-header');
    
    
    let logo = document.createElement('div');
    logo.className = 'logo';
    let img = document.createElement('img');
    img.src = '/img/download.png';
    logo.appendChild(img);
  
    
    let strong = document.createElement('strong');
    strong.textContent = 'Inicie sesión o regístrese para poder acceder a la aplicación';
  
    
    header.appendChild(logo);
    header.appendChild(strong);

  })
/*   export function createHeader() {
    let header = document.getElementById('app-header');
    
    
    let logo = document.createElement('div');
    logo.className = 'logo';
    let img = document.createElement('img');
    img.src = '/img/download.png';
    logo.appendChild(img);
  
    
    let strong = document.createElement('strong');
    strong.textContent = 'Inicie sesión o regístrese para poder acceder a la aplicación';
  
    
    header.appendChild(logo);
    header.appendChild(strong);
  } */
  