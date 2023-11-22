console.log("HOLA JS");

let button = document.getElementById('boton-ocultar');

function hideIMage(){
    let image = document.getElementById('intitled.jpg');
}

button.onclick = ()=>{
    let imagelogo = document.getElementById('logo-fing');
    imagelogo.style = 'display:none';
}

document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Formulario enviado');
});
