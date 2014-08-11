// JavaScript Document

var i=0; //Variable para determinar el color que toca al ir cambiandolos.
var j=0; //Variable que determina la casilla en la que se está seleccionando el color.
var color; //Variable que determina si se ha puesto un color.
var contador=0; //Variable usada para saber si se ha completado una fila entera.
var siguiente=0; //Variable usada para saber cual es la siguiente fila. Para poner el seleccionarColor visible en la siguiente fila.
var anterior=0; //Variable usada para saber cual es la fila anterior. Para poner el seleccionarColor oculto en la fila anterior.
var obligarComprobar=0; //Variable que comprueba si al concluir una fila se ha pulsado el boton comprobar o no.
var blancas=0; //Número de colores que coinciden con la combinación en distinta posición.
var negras; //Número de colores que coinciden con la combinación en la misma posición.
var iter=0; //Variable que incrementa el número de filas al pulsar comprobar.


function seleccionarColor(){
  if(color){
    j=j+1;
    color=false;
    i=0;
    contador=contador+1;
  }

  var tabla = document.getElementById('miTabla');
  var numColumnas = tabla.rows[0].cells.length;


  if(numColumnas==4){
    if(contador==4){
      obligarComprobar=1;
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;  
    }
  }else if(numColumnas==5){
    if(contador==5){
      obligarComprobar=1;
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;
    }
  }else{
    if(contador==6){
      obligarComprobar=1;
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;
    }
  }
	
}

function comprobar(){

  var tabla = document.getElementById('miTabla');
  var numColumnas = tabla.rows[0].cells.length;

  
  if(numColumnas==4){
    negras=0;
    for(var i=iter; i<iter+4; i++){
      if(document.images[i].name==document.getElementById('secreto' +i%4).name){
        negras=negras+1;
      }
    }
  }
  iter=iter+4;

  alert(negras);
  /*var prueba2=document.getElementById('secreto1').name;
  alert(prueba2);*/

  if(contador==0){
    if(numColumnas==4){
      obligarComprobar=0;
      document.getElementById('botonSel' +siguiente).setAttribute('style','visibility:visible');
      document.getElementById('botonSel' +anterior).setAttribute('style', 'visibility:hidden');
    }else if(numColumnas==5){
      obligarComprobar=0;
      document.getElementById('botonSel' +siguiente).setAttribute('style','visibility:visible');
      document.getElementById('botonSel' +anterior).setAttribute('style', 'visibility:hidden');
    }else{
      obligarComprobar=0;
      document.getElementById('botonSel' +siguiente).setAttribute('style','visibility:visible');
      document.getElementById('botonSel' +anterior).setAttribute('style', 'visibility:hidden');
    }
  }
}

function setSrcFacil(){

  if(obligarComprobar==0){
    color=true;

    var tabla = document.getElementById('miTabla');
    var numColumnas = tabla.rows[0].cells.length;

      var x=document.images;

      if(numColumnas==4){
        if(i%6==0){
        	x[j].src="img/circuloRojo.png";
          x[j].setAttribute("name", "rojo");
        }else if(i%6==1){
        	x[j].src="img/circuloVerde.png";
          x[j].setAttribute("name", "verde");
        }else if(i%6==2){
        	x[j].src="img/circuloAzul.png";
          x[j].setAttribute("name", "azul");
        }else if(i%6==3){
        	x[j].src="img/circuloAmarillo.png";
          x[j].setAttribute("name", "amarillo");
        }else if(i%6==4){
        	x[j].src="img/circuloNaranja.png";
          x[j].setAttribute("name", "naranja");
        }else{
        	x[j].src="img/circuloMorado.png";
          x[j].setAttribute("name", "morado");
        }
      }else if(numColumnas==5){
        if(i%8==0){
          x[j].src="img/circuloRojo.png";
          x[j].setAttribute("name", "rojo");
        }else if(i%8==1){
          x[j].src="img/circuloVerde.png";
          x[j].setAttribute("name", "verde");
        }else if(i%8==2){
          x[j].src="img/circuloAzul.png";
          x[j].setAttribute("name", "azul");
        }else if(i%8==3){
          x[j].src="img/circuloAzulClaro.png";
          x[j].setAttribute("name", "azulClaro");
        }else if(i%8==4){
          x[j].src="img/circuloAmarillo.png";
          x[j].setAttribute("name", "amarillo");
        }else if(i%8==5){
          x[j].src="img/circuloNaranja.png";
          x[j].setAttribute("name", "naranja");
        }else if(i%8==6){
          x[j].src="img/circuloMorado.png";
          x[j].setAttribute("name", "morado");
        }else{
          x[j].src="img/circuloMoradoClaro.png";
          x[j].setAttribute("name", "moradoClaro");
        }
      }else if(numColumnas==6){
        if(i%10==0){
          x[j].src="img/circuloRojo.png";
          x[j].setAttribute("name", "rojo");
        }else if(i%10==1){
          x[j].src="img/circuloVerde.png";
          x[j].setAttribute("name", "verde");
        }else if(i%10==2){
          x[j].src="img/circuloAzul.png";
          x[j].setAttribute("name", "azul");
        }else if(i%10==3){
          x[j].src="img/circuloAzulClaro.png";
          x[j].setAttribute("name", "azulClaro");
        }else if(i%10==4){
          x[j].src="img/circuloVerdeOscuro.png";
          x[j].setAttribute("name", "verdeOscuro");
        }else if(i%10==5){
          x[j].src="img/circuloAmarillo.png";
          x[j].setAttribute("name", "amarillo");
        }else if(i%10==6){
          x[j].src="img/circuloNaranja.png";
          x[j].setAttribute("name", "naranja");
        }else if(i%10==7){
          x[j].src="img/circuloMorado.png";
          x[j].setAttribute("name", "morado");
        }else if(i%10==8){
          x[j].src="img/circuloMoradoClaro.png";
          x[j].setAttribute("name", "moradoClaro");
        }else{
          x[j].src="img/circuloGris.png";
          x[j].setAttribute("name", "gris");
        }
      }

        i=i+1;
      }
    
}


function nivelFacil(){
	window.location="principal.html?tablero=4";
}

function nivelMedio(){
	window.location="principal.html?tablero=5";
}

function nivelDificil(){
	window.location="principal.html?tablero=6";
}

function volverInicio(){
	window.location="menu.html#play";
  j=0;
}


/*Funcion que coge el valor de la variable tablero en la url para saber el numero de columnas del tablero*/
function genera(){
  var Url = location.href;
  Url = Url.replace(/.*\?(.*?)/,"$1");
  Variables = Url.split ("&");
  for (i = 0; i < Variables.length; i++) {
       Separ = Variables[i].split("=");
       eval ('var '+Separ[0]+'="'+Separ[1]+'"');
  }

  generaTablero(tablero);
  generaTablaLateral(tablero);
  generaColores(tablero);
  generaCombinacion(tablero);

}

/*Función para generar el tablero*/
function generaTablero(valor){
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  tabla.setAttribute("id", "miTabla");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 8; i++) {
    // Crea las hileras de la tabla
    var tr = document.createElement("tr");
    tr.setAttribute("id", "fila" +i);
 
    for (var j = 0; j < valor; j++) {
      var td = document.createElement("td");
      td.setAttribute("id", "fila" +i +"columna" +j);
      var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
      imagen.setAttribute("src", "img/circulo1.png"); 
      imagen.setAttribute("width", "36");
      imagen.setAttribute("height", "36");
      imagen.setAttribute("id", "imagenFila" + i + "columna" + j);
      imagen.setAttribute("name", "negro");
      imagen.setAttribute("onclick", "setSrcFacil()");
      td.appendChild(imagen);
      tr.appendChild(td);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(tr);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);

  miCapa = document.getElementById('resultado');
  miCapa.appendChild(tabla);
}


function generaTablaLateral(valor){

  var cont=true;

	var tabla2   = document.createElement("table");
    tabla2.setAttribute("id", "miTabla2");
    var tblBody2 = document.createElement("tbody");

    for(var i=0; i<8; i++){
    	var tr=document.createElement("tr");
    	tr.setAttribute("id", "fila" +i);

    	for(var j=0; j<2; j++){
    		var tr2=document.createElement("tr");
    		tr2.setAttribute("id", "fil" +j);


        if(valor==4){
      		for(var k=0; k<2; k++){
      			var td2=document.createElement("td");
      			td2.setAttribute("id", "col" +k);
      			var imagen=document.createElement("img");
      			imagen.setAttribute("src", "img/circulo1.png"); 
    				imagen.setAttribute("width", "14");
    				imagen.setAttribute("height", "14");
    				td2.appendChild(imagen);
    				tr2.appendChild(td2);
      		}
        }else if(valor==5){
          if(cont){
            for(var k=0; k<3; k++){
              var td2=document.createElement("td");
              td2.setAttribute("id", "col" +k);
              var imagen=document.createElement("img");
              imagen.setAttribute("src", "img/circulo1.png"); 
              imagen.setAttribute("width", "14");
              imagen.setAttribute("height", "14");
              td2.appendChild(imagen);
              tr2.appendChild(td2);
            }
            cont=false;
          }else{
            for(var k=0; k<2; k++){
              var td2=document.createElement("td");
              td2.setAttribute("id", "col" +k);
              var imagen=document.createElement("img");
              imagen.setAttribute("src", "img/circulo1.png"); 
              imagen.setAttribute("width", "14");
              imagen.setAttribute("height", "14");
              td2.appendChild(imagen);
              tr2.appendChild(td2);
            }
            cont=true;
          }
        }else{
          for(var k=0; k<3; k++){
              var td2=document.createElement("td");
              td2.setAttribute("id", "col" +k);
              var imagen=document.createElement("img");
              imagen.setAttribute("src", "img/circulo1.png"); 
              imagen.setAttribute("width", "14");
              imagen.setAttribute("height", "14");
              td2.appendChild(imagen);
              tr2.appendChild(td2);
            }
        }

    		tr.appendChild(tr2);
    	}

		tblBody2.appendChild(tr);

    }

    tabla2.appendChild(tblBody2);

    miCapa2 = document.getElementById('resultado2');
    miCapa2.appendChild(tabla2);

}

function generaBotonSel(){

  var tabla3   = document.createElement("table");
  tabla3.setAttribute("id", "miTabla3");


  for(var i=0; i<8; i++){
      var tr=document.createElement("tr");
      tr.setAttribute("id", "fila" +i);

      for(var j=0; j<1; j++){
        var td=document.createElement("td");
        td.setAttribute("id", "columna" +i);

        var boton=document.createElement("input");
        boton.setAttribute("type", "button");
        boton.setAttribute("id", "botonSel" +i);
        if(i>=1){
          boton.setAttribute("style", "visibility: hidden");
        }
        boton.setAttribute("value", "Seleccionar Color");
        boton.setAttribute("onclick", "seleccionarColor();");

        td.appendChild(boton);
        tr.appendChild(td);
        tabla3.appendChild(tr);
      }

    }    

    miCapa3=document.getElementById('resultado3');
    miCapa3.appendChild(tabla3);
}

function generaColores(valor){

  if(valor==4){
    document.getElementById('panelColores4').style.display='block';
  }else if(valor==5){
    document.getElementById('panelColores5').style.display='block';
  }else{
    document.getElementById('panelColores6').style.display='block';
  }

}


function generaCombinacion(valor){

  var colorOculto;

  if(valor==4){

    var myimages=new Array()

    myimages[1]="img/rojo.png"
    myimages[2]="img/verde.png"
    myimages[3]="img/azul.png"
    myimages[4]="img/amarillo.png"
    myimages[5]="img/naranja.png"
    myimages[6]="img/morado.png"

    var tabla   = document.createElement("table");
  tabla.setAttribute("id", "miTabla");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 1; i++) {
    // Crea las hileras de la tabla
    var tr = document.createElement("tr");
    tr.setAttribute("id", "fila1");
 
    for (var j = 0; j < valor; j++) {
      var td = document.createElement("td");
      td.setAttribute("id", "columna" +j);
      var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
      var ry=Math.floor(Math.random()*myimages.length)
      if (ry==0)
      ry=1

      if(ry==1){
        colorOculto="rojo";
      }else if(ry==2){
        colorOculto="verde";
      }else if(ry==3){
        colorOculto="azul";
      }else if(ry==4){
        colorOculto="amarillo";
      }else if(ry==5){
        colorOculto="naranja";
      }else{
        colorOculto="morado";
      }

      imagen.setAttribute("src", myimages[ry]); 
      imagen.setAttribute("width", "36");
      imagen.setAttribute("height", "36");
      imagen.setAttribute("id", "secreto" + j);
      imagen.setAttribute("name", colorOculto);
      td.appendChild(imagen);
      tr.appendChild(td);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(tr);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);

  miCapa = document.getElementById('combinacion');
  miCapa.appendChild(tabla);

  }else if(valor==5){
    var myimages=new Array()

    myimages[1]="img/rojo.png"
    myimages[2]="img/verde.png"
    myimages[3]="img/azul.png"
    myimages[4]="img/azulClaro.png"
    myimages[5]="img/amarillo.png"
    myimages[6]="img/naranja.png"
    myimages[7]="img/morado.png"
    myimages[8]="img/moradoClaro.png"

    var tabla   = document.createElement("table");
    tabla.setAttribute("id", "miTabla");
    var tblBody = document.createElement("tbody");
   
    // Crea las celdas
    for (var i = 0; i < 1; i++) {
      // Crea las hileras de la tabla
      var tr = document.createElement("tr");
      tr.setAttribute("id", "fila1");
   
      for (var j = 0; j < valor; j++) {
        var td = document.createElement("td");
        td.setAttribute("id", "columna" +j);
        var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
        var ry=Math.floor(Math.random()*myimages.length)
        if (ry==0)
        ry=1

        if(ry==1){
          colorOculto="rojo";
        }else if(ry==2){
          colorOculto="verde";
        }else if(ry==3){
          colorOculto="azul";
        }else if(ry==4){
          colorOculto="azulClaro";
        }else if(ry==5){
          colorOculto="amarillo";
        }else if(ry==6){
          colorOculto="naranja";
        }else if(ry==7){
          colorOculto="morado";
        }else{
          colorOculto="moradoClaro";
        }

        imagen.setAttribute("src", myimages[ry]); 
        imagen.setAttribute("width", "36");
        imagen.setAttribute("height", "36");
        imagen.setAttribute("id", colorOculto);
        td.appendChild(imagen);
        tr.appendChild(td);
      }

      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(tr);
    }
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);

    miCapa = document.getElementById('combinacion');
    miCapa.appendChild(tabla);
  }else{

    var myimages=new Array()

    myimages[1]="img/rojo.png"
    myimages[2]="img/verde.png"
    myimages[3]="img/azul.png"
    myimages[4]="img/azulClaro.png"
    myimages[5]="img/verdeOscuro.png"
    myimages[6]="img/amarillo.png"
    myimages[7]="img/naranja.png"
    myimages[8]="img/morado.png"
    myimages[9]="img/moradoClaro.png"
    myimages[10]="img/gris.png"

    var tabla   = document.createElement("table");
    tabla.setAttribute("id", "miTabla");
    var tblBody = document.createElement("tbody");
   
    // Crea las celdas
    for (var i = 0; i < 1; i++) {
      // Crea las hileras de la tabla
      var tr = document.createElement("tr");
      tr.setAttribute("id", "fila1");
   
      for (var j = 0; j < valor; j++) {
        var td = document.createElement("td");
        td.setAttribute("id", "columna" +j);
        var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
        var ry=Math.floor(Math.random()*myimages.length)
        if (ry==0)
        ry=1

        if(ry==1){
          colorOculto="rojo";
        }else if(ry==2){
          colorOculto="verde";
        }else if(ry==3){
          colorOculto="azul";
        }else if(ry==4){
          colorOculto="azulClaro";
        }else if(ry==5){
          colorOculto="verdeOscuro";
        }else if(ry==6){
          colorOculto="amarillo";
        }else if(ry==7){
          colorOculto="naranja";
        }else if(ry==8){
          colorOculto="morado";
        }else if(ry==9){
          colorOculto="moradoClaro";
        }else{
          colorOculto="gris";
        }

        imagen.setAttribute("src", myimages[ry]); 
        imagen.setAttribute("width", "36");
        imagen.setAttribute("height", "36");
        imagen.setAttribute("id", colorOculto);
        td.appendChild(imagen);
        tr.appendChild(td);
      }

      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(tr);
    }
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);

    miCapa = document.getElementById('combinacion');
    miCapa.appendChild(tabla);

  }
}

function mostrarCombinacion(){
  document.getElementById('regionOculta').style.display='block';
}

function refresh(){
    window.location.reload();
}

function silenciar(){
  document.getElementById('volumen').muted = true;
}

function activar(){
  document.getElementById('volumen').muted = false;
}

function pausar(){
  document.getElementById('volumen').pause();
}

function bajarVolumen(){
  document.getElementById('volumen').volume-=20;
}

function playPause() {
        var audioPlayer = document.getElementsByTagName('audio')[0];
        if(audioPlayer!=undefined) {
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        } else {
            loadPlayer();
        }
}

function bajarVolumen(){
  document.getElementById('volumen').volume-=0.1;
}

function subirVolumen(){
  document.getElementById('volumen').volume+=0.1;
}

function generaOpciones(){
  document.getElementById('contenedor2').style.display='block';
  document.getElementById('contenedor1').style.display='none';
  document.getElementById('contenedor3').style.display='none';
  document.getElementById('contenedor4').style.display='none';
}

function generaInstrucciones(){
  document.getElementById('contenedor3').style.display='block';
  document.getElementById('contenedor2').style.display='none';
  document.getElementById('contenedor1').style.display='none';
  document.getElementById('contenedor4').style.display='none';
}

function generaPlay(){
  document.getElementById('contenedor4').style.display='block';
  document.getElementById('contenedor2').style.display='none';
  document.getElementById('contenedor3').style.display='none';
  document.getElementById('contenedor1').style.display='none';
}

function volverMenu(){
  document.getElementById('contenedor1').style.display='block';
  document.getElementById('contenedor2').style.display='none';
  document.getElementById('contenedor3').style.display='none';
  document.getElementById('contenedor4').style.display='none';
}

function generaInstruccion1(){
  document.getElementById('instrucciones1').style.display='block';
  document.getElementById('instrucciones2').style.display='none';
  document.getElementById('instrucciones3').style.display='none';
  document.getElementById('instrucciones4').style.display='none';
  document.getElementById('instrucciones5').style.display='none';
  document.getElementById('instrucciones6').style.display='none';
  document.getElementById('instrucciones7').style.display='none';
  document.getElementById('instrucciones8').style.display='none';
  document.getElementById('instrucciones9').style.display='none';

  document.getElementById('flechas').style.display='block';
  document.getElementById('flechas2').style.display='none';
  document.getElementById('flechas3').style.display='none';
  document.getElementById('flechas4').style.display='none';
  document.getElementById('flechas5').style.display='none';
  document.getElementById('flechas6').style.display='none';
  document.getElementById('flechas7').style.display='none';
  document.getElementById('flechas8').style.display='none';
  document.getElementById('flechas9').style.display='none';
}

function generaInstruccion2(){
  document.getElementById('instrucciones2').style.display='block';
  document.getElementById('instrucciones1').style.display='none';
  document.getElementById('instrucciones3').style.display='none';
  document.getElementById('instrucciones4').style.display='none';
  document.getElementById('instrucciones5').style.display='none';
  document.getElementById('instrucciones6').style.display='none';
  document.getElementById('instrucciones7').style.display='none';
  document.getElementById('instrucciones8').style.display='none';
  document.getElementById('instrucciones9').style.display='none';

  document.getElementById('flechas2').style.display='block';
  document.getElementById('flechas').style.display='none';
  document.getElementById('flechas3').style.display='none';
  document.getElementById('flechas4').style.display='none';
  document.getElementById('flechas5').style.display='none';
  document.getElementById('flechas6').style.display='none';
  document.getElementById('flechas7').style.display='none';
  document.getElementById('flechas8').style.display='none';
  document.getElementById('flechas9').style.display='none';
}

function generaInstruccion3(){
  document.getElementById('instrucciones3').style.display='block';
  document.getElementById('instrucciones1').style.display='none';
  document.getElementById('instrucciones2').style.display='none';
  document.getElementById('instrucciones4').style.display='none';
  document.getElementById('instrucciones5').style.display='none';
  document.getElementById('instrucciones6').style.display='none';
  document.getElementById('instrucciones7').style.display='none';
  document.getElementById('instrucciones8').style.display='none';
  document.getElementById('instrucciones9').style.display='none';

  document.getElementById('flechas3').style.display='block';
  document.getElementById('flechas').style.display='none';
  document.getElementById('flechas2').style.display='none';
  document.getElementById('flechas4').style.display='none';
  document.getElementById('flechas5').style.display='none';
  document.getElementById('flechas6').style.display='none';
  document.getElementById('flechas7').style.display='none';
  document.getElementById('flechas8').style.display='none';
  document.getElementById('flechas9').style.display='none';
}

function generaInstruccion4(){
  document.getElementById('instrucciones4').style.display='block';
  document.getElementById('instrucciones1').style.display='none';
  document.getElementById('instrucciones2').style.display='none';
  document.getElementById('instrucciones3').style.display='none';
  document.getElementById('instrucciones5').style.display='none';
  document.getElementById('instrucciones6').style.display='none';
  document.getElementById('instrucciones7').style.display='none';
  document.getElementById('instrucciones8').style.display='none';
  document.getElementById('instrucciones9').style.display='none';

  document.getElementById('flechas4').style.display='block';
  document.getElementById('flechas').style.display='none';
  document.getElementById('flechas2').style.display='none';
  document.getElementById('flechas3').style.display='none';
  document.getElementById('flechas5').style.display='none';
  document.getElementById('flechas6').style.display='none';
  document.getElementById('flechas7').style.display='none';
  document.getElementById('flechas8').style.display='none';
  document.getElementById('flechas9').style.display='none';
}

function generaInstruccion5(){
  document.getElementById('instrucciones5').style.display='block';
  document.getElementById('instrucciones1').style.display='none';
  document.getElementById('instrucciones2').style.display='none';
  document.getElementById('instrucciones3').style.display='none';
  document.getElementById('instrucciones4').style.display='none';
  document.getElementById('instrucciones6').style.display='none';
  document.getElementById('instrucciones7').style.display='none';
  document.getElementById('instrucciones8').style.display='none';
  document.getElementById('instrucciones9').style.display='none';

  document.getElementById('flechas5').style.display='block';
  document.getElementById('flechas').style.display='none';
  document.getElementById('flechas2').style.display='none';
  document.getElementById('flechas3').style.display='none';
  document.getElementById('flechas4').style.display='none';
  document.getElementById('flechas6').style.display='none';
  document.getElementById('flechas7').style.display='none';
  document.getElementById('flechas8').style.display='none';
  document.getElementById('flechas9').style.display='none';
}

function generaInstruccion6(){
  document.getElementById('instrucciones6').style.display='block';
  document.getElementById('instrucciones1').style.display='none';
  document.getElementById('instrucciones2').style.display='none';
  document.getElementById('instrucciones3').style.display='none';
  document.getElementById('instrucciones4').style.display='none';
  document.getElementById('instrucciones5').style.display='none';
  document.getElementById('instrucciones7').style.display='none';
  document.getElementById('instrucciones8').style.display='none';
  document.getElementById('instrucciones9').style.display='none';

  document.getElementById('flechas6').style.display='block';
  document.getElementById('flechas').style.display='none';
  document.getElementById('flechas2').style.display='none';
  document.getElementById('flechas3').style.display='none';
  document.getElementById('flechas4').style.display='none';
  document.getElementById('flechas5').style.display='none';
  document.getElementById('flechas7').style.display='none';
  document.getElementById('flechas8').style.display='none';
  document.getElementById('flechas9').style.display='none';
}

function generaInstruccion7(){
  document.getElementById('instrucciones7').style.display='block';
  document.getElementById('instrucciones1').style.display='none';
  document.getElementById('instrucciones2').style.display='none';
  document.getElementById('instrucciones3').style.display='none';
  document.getElementById('instrucciones4').style.display='none';
  document.getElementById('instrucciones5').style.display='none';
  document.getElementById('instrucciones6').style.display='none';
  document.getElementById('instrucciones8').style.display='none';
  document.getElementById('instrucciones9').style.display='none';

  document.getElementById('flechas7').style.display='block';
  document.getElementById('flechas').style.display='none';
  document.getElementById('flechas2').style.display='none';
  document.getElementById('flechas3').style.display='none';
  document.getElementById('flechas4').style.display='none';
  document.getElementById('flechas5').style.display='none';
  document.getElementById('flechas6').style.display='none';
  document.getElementById('flechas8').style.display='none';
  document.getElementById('flechas9').style.display='none';
}

function generaInstruccion8(){
  document.getElementById('instrucciones8').style.display='block';
  document.getElementById('instrucciones1').style.display='none';
  document.getElementById('instrucciones2').style.display='none';
  document.getElementById('instrucciones3').style.display='none';
  document.getElementById('instrucciones4').style.display='none';
  document.getElementById('instrucciones5').style.display='none';
  document.getElementById('instrucciones6').style.display='none';
  document.getElementById('instrucciones7').style.display='none';
  document.getElementById('instrucciones9').style.display='none';

  document.getElementById('flechas8').style.display='block';
  document.getElementById('flechas').style.display='none';
  document.getElementById('flechas2').style.display='none';
  document.getElementById('flechas3').style.display='none';
  document.getElementById('flechas4').style.display='none';
  document.getElementById('flechas5').style.display='none';
  document.getElementById('flechas6').style.display='none';
  document.getElementById('flechas7').style.display='none';
  document.getElementById('flechas9').style.display='none';
}

function generaInstruccion9(){
  document.getElementById('instrucciones9').style.display='block';
  document.getElementById('instrucciones1').style.display='none';
  document.getElementById('instrucciones2').style.display='none';
  document.getElementById('instrucciones3').style.display='none';
  document.getElementById('instrucciones4').style.display='none';
  document.getElementById('instrucciones5').style.display='none';
  document.getElementById('instrucciones6').style.display='none';
  document.getElementById('instrucciones8').style.display='none';
  document.getElementById('instrucciones7').style.display='none';

  document.getElementById('flechas9').style.display='block';
  document.getElementById('flechas').style.display='none';
  document.getElementById('flechas2').style.display='none';
  document.getElementById('flechas3').style.display='none';
  document.getElementById('flechas4').style.display='none';
  document.getElementById('flechas5').style.display='none';
  document.getElementById('flechas6').style.display='none';
  document.getElementById('flechas8').style.display='none';
  document.getElementById('flechas7').style.display='none';
}

   

/*function generaColores(valor){

  if(valor==4){
    var tabla   = document.createElement("table");
    tabla.setAttribute("id", "miTablaColores");
    var tblBody = document.createElement("tbodyColores");

    var tr1=document.createElement("tr");
    tr1.setAttribute("id", "filaColores1");

    var td1 = document.createElement("td");
    td1.setAttribute("id", "colores1_1");

    var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "img/rojo.png"); 
    imagen.setAttribute("width", "36");
    imagen.setAttribute("height", "36");
    imagen.setAttribute("id", "rojo");
    td1.appendChild(imagen);
    tr1.appendChild(td1);

    var td2 = document.createElement("td");
    td2.setAttribute("id", "colores1_2");

    var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "img/verde.png"); 
    imagen.setAttribute("width", "36");
    imagen.setAttribute("height", "36");
    imagen.setAttribute("id", "verde");
    td2.appendChild(imagen);
    tr1.appendChild(td2);

    var td3 = document.createElement("td");
    td3.setAttribute("id", "colores1_3");

    var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "img/azul.png"); 
    imagen.setAttribute("width", "36");
    imagen.setAttribute("height", "36");
    imagen.setAttribute("id", "azul");
    td3.appendChild(imagen);
    tr1.appendChild(td3);

    var tr2=document.createElement("tr");
    tr2.setAttribute("id", "filaColores2");

    var td1 = document.createElement("td");
    td1.setAttribute("id", "colores2_1");

    var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "img/amarillo.png"); 
    imagen.setAttribute("width", "36");
    imagen.setAttribute("height", "36");
    imagen.setAttribute("id", "amarillo");
    td1.appendChild(imagen);
    tr2.appendChild(td1);

    var td2 = document.createElement("td");
    td2.setAttribute("id", "colores2_2");

    var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "img/naranja.png"); 
    imagen.setAttribute("width", "36");
    imagen.setAttribute("height", "36");
    imagen.setAttribute("id", "naranja");
    td2.appendChild(imagen);
    tr2.appendChild(td2);

    var td3 = document.createElement("td");
    td3.setAttribute("id", "colores2_3");

    var imagen = document.createElement("img"); //Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "img/morado.png"); 
    imagen.setAttribute("width", "36");
    imagen.setAttribute("height", "36");
    imagen.setAttribute("id", "morado");
    td3.appendChild(imagen);
    tr2.appendChild(td3);

    tblBody.appendChild(tr1);
    tblBody.appendChild(tr2);

    tabla.appendChild(tblBody);

    miCapa2 = document.getElementById('resultadoColores');
    miCapa2.appendChild(tabla);

  }else if(valor==5){

  }else{

  }


}*/




