
window.addEventListener("load", function(){
    let header = document.getElementById('app-header');
    
    let logo = document.createElement('div');
    logo.className = 'logo';
    let img = document.createElement('img');
    img.src = '/img/download.png';
    logo.appendChild(img);
  
    
    let strong = document.createElement('strong');
    strong.textContent = 'Inicie Sesión o regístrese para poder acceder a la aplicación';
  
    
    header.appendChild(logo);
    header.appendChild(strong);
})
  