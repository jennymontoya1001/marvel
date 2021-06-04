/*Importamos la data que tenemos en el archivo data.js que se encuentra en
la carpeta data*/
import {data} from '../data/data.js';

/*creamos unas constantes en donde vamos a capturar los elementos
que creamos en nuestro html
***templateCard en donde definimos la estructura de nuestra tarjeta
***fragment nos va a permitir crear un nodo en el DOM
***items es la división en donde vamos a cargar todos los nodos
que creemos de información*/

const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');


/*Recordemos que con nuestro evento DOMContentLoaded garantizamos
que nos llame a la función loadImages luego de que cargue el DOM*/
document.addEventListener('DOMContentLoaded', () => {
    //console.log(data);

    /*invocamos a la función loadImage que le enviamos como
    parámetro la data*/
    loadImage(data);
})


/*Función loadImages, la cual nos va a permitir pintar
la información en el documento
esta función recibe la data como parámetro*/
const loadImage = data => {

    /*a nuestra data la necesitamos recorrer y lo hacemos con un ciclo
    en este caso usamos forEach. Cuando ingresamos al ciclo
    dentro de la palabra heroe va a quedar cada uno de nuestros heroes
    que estan en nuestra data, pero recordemos que cada heroe tiene múltiple
    información (objetos) y necesitamos desestructurar dicha objeto*/
   data.forEach(heroe => {
       //desestructuración de objetos
       const {id,superhero,imageher} = heroe;
       /*cada una de las variables desestructuradas se la asignamos
       a un elemento correspondiente de neustro template del html*/
       templateCard.querySelector('h5').textContent = superhero;
       templateCard.querySelector('img').setAttribute('src',image);
       /*con el cloneNode podemos clonar los nodos y así clonar el template
       las veces que se requiera, en este caso nuestro límite, es la cantidad
       de objetos que tenemos en nuestro archivo data*/
       const clone = templateCard.cloneNode(true);
       /*adicionamos los clones al fragment*/
       fragment.appendChild(clone)
   } )

   /*adicionamos el fragment a nuestro items (divisón para mostrar los targets)*/
   items.appendChild(fragment);
}




