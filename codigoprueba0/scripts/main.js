//let miTitulo = document.querySelector('h1');
//miTitulo.innerHTML = 'Hello world!';



let miImage = document.querySelector('img');

miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/firefox-icon - copia.png');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}



let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
  let miNombre = prompt('Por favor, ingresa nombre');
  if(!miNombre){
    estableceNombreUsuario();
  }
  else{
    localStorage.setItem('name', miNombre);
    myHeading.innerHTML = 'Mozilla is cool', + miNombre;
  }
}

if(!localStorage.getItem('nombre')){
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}
miBoton.onclick = function(){
  estableceNombreUsuario();
}