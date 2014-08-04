// JavaScript Document

var i=0;
var j=0;
var color;
var contador=0;
var siguiente=0;
var anterior=0;

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
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;
      document.getElementById('botonSel' +siguiente).setAttribute('style','visibility:visible');
      document.getElementById('botonSel' +anterior).setAttribute('style', 'visibility:hidden');  
    }
  }else if(numColumnas==5){
    if(contador==5){
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;
      document.getElementById('botonSel' +siguiente).setAttribute('style','visibility:visible');
      document.getElementById('botonSel' +anterior).setAttribute('style', 'visibility:hidden');
    }
  }else{
    if(contador==6){
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;
      document.getElementById('botonSel' +siguiente).setAttribute('style','visibility:visible');
      document.getElementById('botonSel' +anterior).setAttribute('style', 'visibility:hidden');
    }
  }
	
}

function setSrcFacil(){
  color=true;

  var tabla = document.getElementById('miTabla');
  var numColumnas = tabla.rows[0].cells.length;

  var x=document.images;

  if(numColumnas==4){
    if(i%6==0){
    	x[j].src="img/circuloRojo.png";
    }else if(i%6==1){
    	x[j].src="img/circuloVerde.png";
    }else if(i%6==2){
    	x[j].src="img/circuloAzul.png";
    }else if(i%6==3){
    	x[j].src="img/circuloAmarillo.png";
    }else if(i%6==4){
    	x[j].src="img/circuloNaranja.png";
    }else{
    	x[j].src="img/circuloMorado.png";
    }
  }else if(numColumnas==5){
    if(i%8==0){
      x[j].src="img/circuloRojo.png";
    }else if(i%8==1){
      x[j].src="img/circuloVerde.png";
    }else if(i%8==2){
      x[j].src="img/circuloAzul.png";
    }else if(i%8==3){
      x[j].src="img/circuloAzulClaro.png";
    }else if(i%8==4){
      x[j].src="img/circuloAmarillo.png";
    }else if(i%8==5){
      x[j].src="img/circuloNaranja.png";
    }else if(i%8==6){
      x[j].src="img/circuloMorado.png";
    }else{
      x[j].src="img/circuloMoradoClaro.png";
    }
  }else if(numColumnas==6){
    if(i%10==0){
      x[j].src="img/circuloRojo.png";
    }else if(i%10==1){
      x[j].src="img/circuloVerde.png";
    }else if(i%10==2){
      x[j].src="img/circuloAzul.png";
    }else if(i%10==3){
      x[j].src="img/circuloAzulClaro.png";
    }else if(i%10==4){
      x[j].src="img/circuloVerdeOscuro.png";
    }else if(i%10==5){
      x[j].src="img/circuloAmarillo.png";
    }else if(i%10==6){
      x[j].src="img/circuloNaranja.png";
    }else if(i%10==7){
      x[j].src="img/circuloMorado.png";
    }else if(i%10==8){
      x[j].src="img/circuloMoradoClaro.png";
    }else{
      x[j].src="img/circuloGris.png";
    }
  }

    i=i+1;
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
    document.getElementById('colores4').style.display='block';
  }else if(valor==5){
    document.getElementById('colores5').style.display='block';
  }else{
    document.getElementById('colores6').style.display='block';
  }

}


function generaCombinacion(valor){

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
      imagen.setAttribute("src", myimages[ry]); 
      imagen.setAttribute("width", "36");
      imagen.setAttribute("height", "36");
      imagen.setAttribute("id", "secreto" + j);
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
        imagen.setAttribute("src", myimages[ry]); 
        imagen.setAttribute("width", "36");
        imagen.setAttribute("height", "36");
        imagen.setAttribute("id", "secreto" + j);
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
        imagen.setAttribute("src", myimages[ry]); 
        imagen.setAttribute("width", "36");
        imagen.setAttribute("height", "36");
        imagen.setAttribute("id", "secreto" + j);
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

function comprobar(){
  document.getElementById('regionOculta').style.display='block';
}

function refresh(){
    window.location.reload();
}

function silenciar(){
  document.getElementById('volumen').muted = true;
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




