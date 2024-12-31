let botonwasa = []

function iniciar() {
    wasa()
}

function wasa() {
    botonwasa = document.querySelectorAll('.BWasa') /*Solo funciona en class no en id*/

    botonwasa.forEach(boton=>{
        boton.addEventListener('click', function () {
            window.open("https://wa.me/584247842240");
        });
    })
  
}

window.addEventListener('load', iniciar)