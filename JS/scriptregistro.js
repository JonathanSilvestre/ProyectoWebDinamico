import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore,collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
  
const firebaseConfig = {
    apiKey: "AIzaSyCTOJd_eFeLAenY-fINP1qjNuaRPUnknGA",
    authDomain: "proyecto-76724.firebaseapp.com",
    projectId: "proyecto-76724",
    storageBucket: "proyecto-76724.firebasestorage.app",
    messagingSenderId: "560877984223",
    appId: "1:560877984223:web:c40ee501ff2753b698cc6a"
};

    const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const usuarios = collection(db, "usuarios");

fetch('Data/Paises.JSON')
    .then(response => response.json())
    .then(data => {
        const paisSelect = document.getElementById('pais_registro');
        data.forEach(pais => {
            const option = document.createElement('option');
            option.value = pais.code;
            option.textContent = pais.name;
            paisSelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error al cargar los países: ', error);
    });

document.getElementById('registroBtn').addEventListener('click', async () => {
    const nombre = document.getElementById('nombre_registro').value;
    const email = document.getElementById('correo_registro').value;
    const password = document.getElementById('contrasena_registro').value;
    const verficarPassword = document.getElementById('verificar_contrasena').value;
    const fechanacimiento = document.getElementById('fecha_nacimiento_registro').value;
    const sexo = document.getElementById('sexo_registro').value;
    const pais = document.getElementById('pais_registro').value;
    const ciudad = document.getElementById('ciudad_registro').value;
    const direccion = document.getElementById('direccion_registro').value;
    const telefono = document.getElementById('telefono_registro').value;


    if (!nombre) {
        alert('Por favor, ingrese un nombre');
        return;
    }
    if (!email) {
        alert('Por favor, ingrese un correo electrónico');
        return;
    }
    if (!password) {
        alert('Por favor, ingrese una contraseña');
        return;
    }

    if (password !== verficarPassword) {
        alert('Las contraseñas no coinciden');
        return
    }

    if (!fechanacimiento) {
        alert('Por favor, ingrese una fecha de nacimiento');
        return;
    }

    if (!sexo) {
        alert('Por favor, ingrese un sexo');
        return;
    }

    if (!pais) {
        alert('Por favor, ingrese un pais');
        return;
    }

    if (!ciudad) {
        alert('Por favor, ingrese una ciudad');
        return;
    }

    if (!direccion) {
        alert('Por favor, ingrese una dirección');
        return;
    }

    if (!telefono) {
        alert('Por favor, ingrese un telefono');
        return;
    }



    try {
        await addDoc(usuarios, {
            nombre: nombre,
            email: email,
            password: password,
            fechanacimiento: fechanacimiento,
            sexo: sexo,
            pais: pais,
            ciudad: ciudad,
            direccion: direccion,
            telefono: telefono
        });
        alert('Usuario registrado con éxito');
        window.location.href = 'index.html';
    } catch (e) {
        console.error('Error al agregar el documento: ', e);
        alert('Error al registrar el usuario');
    }
});

