window.addEventListener("load", function(){
    let header = document.getElementById('app-header');
    
    let logo = document.createElement('div');
    logo.className = 'logo';
    let img = document.createElement('img');
    img.src = '/img/download.png';
    logo.appendChild(img);
  
    
    let strong = document.createElement('strong');
    strong.textContent = '*Inserta texto de la cabecera prro*';
  
    
    header.appendChild(logo);
    header.appendChild(strong);
})