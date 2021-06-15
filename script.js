const imagenes = document.querySelectorAll('.imagen');

imagenes.forEach( (imagen, i) => {
  const urlImagen = prompt('Ingrese la url de la imagen ' + (i+1) + ' por favor');
  imagen.setAttribute('src', urlImagen);
  imagen.setAttribute('width', '500px');
})

// Iterar Para Modificar el HTML + Agregar href al 'a'
let tarjetas = document.querySelectorAll('.tarjeta') ;

tarjetas.forEach( (tarjeta) => {
  const link = document.createElement('a');
  const imagen = tarjeta.querySelector('img');
  tarjeta.appendChild(link);
  link.appendChild(imagen);
  link.setAttribute('class','rutas-img');
  link.setAttribute('href', imagen.getAttribute('src'));
  link.setAttribute('target', '_blank');
}
)

/*
Para optimizar el codigo podemos hacer uso de un template, lo que nos permitira ingresar tantas imagenes como se desee. Se usaria de la siguiente Manera (Ya considerando la estructura con el a y los src agregados):

let cantImagenes = parseInt(prompt("Cuantas Imagenes quiere cargar"))

function publicarImagen(link,textoAlternativo, index){

  let template = `
    <div class="tarjeta">
      <a class="rutas-img" href="${link}" target="_blank">
        <img class="imagen" alt="${textoAlternativo}" id="imagen-${index}"  src="${link}"/>
      </a>
    </div>
  `
  document.querySelector('.contenedor').innerHTML += template

}

for (let index = 1; index <= cantImagenes; index++) {

  const link = prompt("Ingresar URL de Imagen " + index)
  const textoAlternativo = prompt("Ingresar un texto alternativo para Imagen " + index)
  publicarImagen(link,textoAlternativo, index)
  
}
*/
