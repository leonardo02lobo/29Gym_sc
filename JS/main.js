let botonwasa = [];
const divs = [document.getElementById('div1'), document.getElementById('div2'), document.getElementById('div3'), document.getElementById('div4')];

function iniciar() {
    wasa();
    agregarEventosBotonesInfo();
}

function wasa() {
    botonwasa = document.querySelectorAll('.BWasa'); /*Solo funciona en class no en id*/

    botonwasa.forEach(boton => {
        boton.addEventListener('click', function () {
            window.open("https://wa.me/584247842240");
        });
    });
}

function mostrarDiv(divId) {
    divs.forEach(div => {
        if (div.id === divId) {
            if (div.style.display === 'block') {
                div.style.display = 'none';
                div.classList.remove('mostrar');
            } else {
                div.style.display = 'block';
                setTimeout(() => div.classList.add('mostrar'), 10); // Añade un pequeño retraso para permitir que la transición ocurra
            }
        } else {
            div.style.display = 'none';
            div.classList.remove('mostrar');
        }
    });
}

function agregarEventosBotonesInfo() {
    const botonesInfo = document.querySelectorAll('.info');
    botonesInfo.forEach((boton, index) => {
        boton.addEventListener('click', function () {
            mostrarDiv(divs[index].id);
        });
    });
}

window.addEventListener('load', iniciar);