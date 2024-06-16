//Se tiene como base el siguiente ejercicio que cambia el color de fondo de un elemento de
//HTML al hacerle click

//    function pintar(){
//    ele.style.backgroundColor = 'yellow'
//    }
//    const ele = document.getElementById("ele1")
//    ele.addEventListener("click", pintar);

//    Modifica la función para que reciba el elemento clickeado de forma de no
//tener que seleccionarlo nuevamente dentro de la función.
//Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
//funcionando en conjunto con el código modificado.//


//  const ele = document.getElementById("ele1")
//  const pintar = (element) => element.style.backgroundColor = 'yellow'
//  ele.addEventListener("click", () => pintar(ele));


//    Modifica el código anterior para poder pasarle un color como argumento a la
//función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
//párrafo se debe pasar amarillo como color.

const ele = document.getElementById("ele1")
const pintar = (element, color = 'green') => element.style.backgroundColor = color
ele.addEventListener("click", () => pintar(ele, 'yellow'))