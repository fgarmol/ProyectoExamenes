window.addEventListener("load", function () {
  let header = document.getElementById("app-header");

  let logo = document.createElement("div");
  logo.className = "logo";
  let img = document.createElement("img");
  img.src = "/img/download.png";
  logo.appendChild(img);

  let strong = document.createElement("strong");
  if ((this.document.getElementById("app-header").className == "alumno")) {
    strong.textContent = "Área Alumno";
  }
  if ((this.document.getElementById("app-header").className == "profesor")) {
    strong.textContent = "Área Profesor";
  }
  if ((this.document.getElementById("app-header").className == "admin")) {
    strong.textContent = "Área Admin";
  }

  header.appendChild(logo);
  header.appendChild(strong);
});
