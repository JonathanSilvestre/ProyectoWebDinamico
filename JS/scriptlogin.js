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

document.getElementById('LoginBTN').addEventListener('click', async () => {
    const email = document.getElementById('correo_login').value;
    const password = document.getElementById('contrasena_login').value;

    if (!email) {
        alert('Por favor, ingrese un correo electrónico');
        return;
    }
    if (!password) {
        alert('Por favor, ingrese una contraseña');
        return;
    }

    try {
        const q = query(usuarios, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            alert('Usuario no encontrado');
            return;
        }

        let userFound = false;
        querySnapshot.forEach((doc) => {
            if (doc.data().password === password) {
                userFound = true;
                const nombre = doc.data().nombre;
                alert(`Bienvenido: ${nombre}`);
                window.location.href = `index.html?nombre=${encodeURIComponent(nombre)}`;
            }
        });

        if (!userFound) {
            alert('Contraseña incorrecta');
        }
    } catch (e) {
        console.error('Error al buscar el documento: ', e);
        alert('Error al iniciar sesión');
    }
});