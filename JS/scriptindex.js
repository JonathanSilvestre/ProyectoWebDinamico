window.onload = login;

function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split('&');
    queryArray.forEach(param => {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    });
    return params;
}


function login() {
    const params = getQueryParams();
    const username = params['nombre'] || localStorage.getItem('username');
    if (username) {
        document.getElementById('li_registro').style.display = 'none';
        document.getElementById('li_login').style.display = 'none';
        document.getElementById('li_usuario').innerText = 'Bienvenido ' + username;
        document.getElementById('desconectar').style.display = 'block';
    }
    else{
        document.getElementById('li_registro').style.display = 'block';
        document.getElementById('li_login').style.display = 'block';
        document.getElementById('li_usuario').style.display = 'none';
        document.getElementById('desconectar').style.display = 'none';
    }
}


document.getElementById('desconectar').addEventListener('click', function() {
    const url = new URL(window.location);
    url.searchParams.delete('nombre');
    window.history.replaceState({}, document.title, url.toString());
    localStorage.removeItem('username');
    location.reload();
});


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
let posicion = 0;
let direccion = "derecha";

function moverImagen1() {
    let intervalo = setInterval(function(){ 
      if(direccion === "derecha" && posicion >= 300) {
          direccion = "izquierda";
      } else if(direccion === "izquierda" && posicion <= -300) {
          direccion = "derecha";
      }
      if(direccion === "derecha") {
          posicion++;
      } else {
          posicion--;
      }
      img1.style.left = posicion + "px";
    }, 10);
}

function moverImagen2() {
    let intervalo = setInterval(function(){ 
      if(direccion === "derecha" && posicion >= 300) {
          direccion = "izquierda";
      } else if(direccion === "izquierda" && posicion <= -300) {
          direccion = "derecha";
      }
      if(direccion === "derecha") {
          posicion++;
      } else {
          posicion--;
      }
      img2.style.left = posicion + "px";
    }, 10);
}

function moverImagen3() {
    let intervalo = setInterval(function(){ 
      if(direccion === "derecha" && posicion >= 300) {
          direccion = "izquierda";
      } else if(direccion === "izquierda" && posicion <= -300) {
          direccion = "derecha";
      }
      if(direccion === "derecha") {
          posicion++;
      } else {
          posicion--;
      }
      img3.style.left = posicion + "px";
    }, 10);
}

function moverImagen4() {
    let intervalo = setInterval(function(){ 
      if(direccion === "derecha" && posicion >= 300) {
          direccion = "izquierda";
      } else if(direccion === "izquierda" && posicion <= -300) {
          direccion = "derecha";
      }
      if(direccion === "derecha") {
          posicion++;
      } else {
          posicion--;
      }
      img4.style.left = posicion + "px";
    }, 10);
}