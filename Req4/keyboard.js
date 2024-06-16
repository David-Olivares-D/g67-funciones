let colorSeleccionado = '';
const pintar = (color) => {
    let keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = color;
};

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorSeleccionado = 'pink';
        pintar(colorSeleccionado);
    } else if (event.key === 's') {
        colorSeleccionado = 'orange';
        pintar(colorSeleccionado);
    } else if (event.key === 'd') {
        colorSeleccionado = 'lightblue';
        pintar(colorSeleccionado);
    }
});

 const crearDiv = (color) => {
    let divCreado = document.createElement('div');
    divCreado.style.width = '200px';
    divCreado.style.height = '200px';
    divCreado.style.backgroundColor = color;
    divCreado.style.border = '2px solid black';
    document.body.appendChild(divCreado);
};

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w') {
        crearDiv('gray');
    } else if (event.key === 'e') {
        crearDiv('brown');
    }
});