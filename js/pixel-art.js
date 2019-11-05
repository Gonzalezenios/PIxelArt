var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;

  })
);

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

//Función que muestra los colores 

var mostrarColor = function () {
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoDivColor = document.createElement('div');
    nuevoDivColor.style.backgroundColor = nombreColores[i];
    nuevoDivColor.className = 'color-paleta';
    paleta.appendChild(nuevoDivColor);
  }
};
mostrarColor();

//Función que crea una grilla
var Grilla = function () {
  for (var i = 0; i < 1749; i++) {
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'pixel';
    grillaPixeles.appendChild(nuevoDiv);
  }
};
Grilla();

//Seleccionar color de la paleta y mostrarlo en el indicador
var indicadorColor = document.getElementById('indicador-de-color');
var paleta = document.getElementById('paleta');

function seleccionarColor(e) {
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
}
paleta.addEventListener('click', seleccionarColor);

// pintar pixel de la grilla
function pintarGrilla(e) {
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}
grillaPixeles.addEventListener('click', pintarGrilla);

// detectar si el mouse esta presionado
var mousePresionado = false;

grillaPixeles.addEventListener('mousedown', function () {
  mousePresionado = true;
});

grillaPixeles.addEventListener('mouseup', function () {
  mousePresionado = false;
});

// función pintar en movimiento
grillaPixeles.addEventListener('mouseover', function (e) {
  if (mousePresionado) {
    pintarGrilla(e);
  }
});

// funcionalidad del boton 'borrar todo'
var pixels = $('.pixel');
var pintarBlanco = function (indice, pixel) {
  pixel.style.backgroundColor = 'white';
};

var borrarTodo = function () {
  pixels.each(function (indice, pixel) {
    pintarColor(pixel, 'white');
  });
};

document.getElementById('borrar').addEventListener('click', borrarTodo);

var pintarColor = function (pixel, color) {
  pixel.style.backgroundColor = color;
};

//seleccionar superheroe
$('.imgs img').click(function () {
  var imgActual = $(this);
  var attrId = imgActual.attr('id');
  cargarSuperheroe(eval(attrId));
});

/** 
var pintarWonder = function (){
  pixels.each(function(indice,pixel,wonder){
    pintarColor(pixel,wonder[indice]);
  });
};

document.getElementById('wonder').addEventListener('click',pintarWonder);
*/


// guardar en un archivo pixel-art.png
document.getElementById('guardar').addEventListener('click', guardarPixelArt);

