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