
 /**
******************************************************
*  @file jsPrincipal.js
*  @brief Archivo javascript que contiene todas las funciones y variables globales necesarias para la implementación del juego
*  "mastermind"
* 
* @author Francisco Manuel Sánchez Ramos
* @version 1.0
* @date Agosto 2014
*
*
*******************************************************/

/**
 * @var {Integer}
 * Variable global que itera sobre la lista de colores para poder ir seleccionando los colores deseados en el tablero.
 */
var i=0; 

/**
 * @var {Integer}
 * Variable global que itera sobre el tablero de juego y que determina la posición del tablero en la que toca seleccionar un color.
 */
var j=0; 

/**
 * @var {Boolean}
 * Variable global que determina si se ha seleccionado un color en la posición del tablero sobre la que se está iterando.
 */
var color; //Variable que determina si se ha puesto un color.

/**
 * @var {Integer}
 * Variable global usada para saber si se ha rellenado con colores una fila completa de nuestro tablero de juego.
 */
var contador=0; 

/**
 * @var {Integer}
 * Variable global usada para determinar cual es la siguiente fila del tablero. Se usa para poner el boton "seleccionarColor" en 
 * la fila sobre la que se está iterando.
 */
var siguiente=0; 

/**
 * @var {Integer}
 * Variable global usada para determinar cual es la anterior fila del tablero. Se usa para quitar el boton "seleccionarColor" de 
 * esa fila anterior.
 */
var anterior=0; 

/**
 * @var {Integer}
 * Variable global que comprueba si al concluir de rellenar una fila se ha pulsado o no sobre el boton "comprobar".
 */
var obligarComprobar=0; 

/**
 * @var {Integer}
 * Variable global usada para determinar el número de bolas de tu combinación que coinciden en distinta posición con la combinación
 * secreta. 
 * Usado para saber el número de bolas blancas que se ha de poner en la ayuda cuando se comprueba la combinación.
 */
var blancas=0; 

/**
 * @var {Integer}
 * Variable global que determina el número de bolas de tu combinación que coinciden en la misma posición con la combinación secreta.
  * Usado para saber el número de bolas negras que se ha de poner en la ayuda cuando se comprueba la combinación.
 */
var negras; 

/**
 * @var {Integer}
 * Variable global que itera sobre las filas del tablero en la que se están comprobando los colores.
 * Usado para encontrar las bolas negras.
 */
var iter=0; //Variable que incrementa el número de filas al pulsar comprobar.

/**
 * @var {Integer}
 * Variable global que itera sobre las filas del tablero en la que se están comprobando los colores.
 * Usado para encontrar las bolas blancas.
 */
var iter2=0;

/**
 * @var {Boolean}
 * Variable global que determina si se ha encontrado una bola blanca sobre la combinación en la que se itera.
 */
var encontrado=false; 

/**
 * @var {Arrays}
 * Array usado para determinar que posiciones se deben comprobar con la combinación secreta. Si el valor de una posición concreta es
 * igual a "-1" significa que esa posición se debe comprobar. 
 * Al principio todas las posiciónes esta inicializadas a "-1" y conforme se vaya encontrando bolas negras o blancas estos valores 
 * se iran modificando.
 * Este array se usa para el nivel facil.
 */
var vector1=[-1, -1, -1, -1];

/**
 * @var {Arrays}
 * Array usado para determinar que posiciones se deben comprobar con la combinación secreta. Si el valor de una posición concreta es
 * igual a "-1" significa que esa posición se debe comprobar. 
 * Al principio todas las posiciónes esta inicializadas a "-1" y conforme se vaya encontrando bolas negras o blancas estos valores 
 * se iran modificando.
 * Este array se usa para el nivel facil.
 */
var vector2=[-1, -1, -1, -1];

/**
 * @var {Arrays}
 * Array usado para determinar que posiciones se deben comprobar con la combinación secreta. Si el valor de una posición concreta es
 * igual a "-1" significa que esa posición se debe comprobar. 
 * Al principio todas las posiciónes esta inicializadas a "-1" y conforme se vaya encontrando bolas negras o blancas estos valores 
 * se iran modificando.
 * Este array se usa para el nivel medio.
 */
var vector3=[-1, -1, -1, -1, -1];

/**
 * @var {Arrays}
 * Array usado para determinar que posiciones se deben comprobar con la combinación secreta. Si el valor de una posición concreta es
 * igual a "-1" significa que esa posición se debe comprobar. 
 * Al principio todas las posiciónes esta inicializadas a "-1" y conforme se vaya encontrando bolas negras o blancas estos valores 
 * se iran modificando.
 * Este array se usa para el nivel medio.
 */
var vector4=[-1, -1, -1, -1, -1];

/**
 * @var {Arrays}
 * Array usado para determinar que posiciones se deben comprobar con la combinación secreta. Si el valor de una posición concreta es
 * igual a "-1" significa que esa posición se debe comprobar. 
 * Al principio todas las posiciónes esta inicializadas a "-1" y conforme se vaya encontrando bolas negras o blancas estos valores 
 * se iran modificando.
 * Este array se usa para el nivel dificil.
 */
var vector5=[-1, -1, -1, -1, -1, -1];

/**
 * @var {Arrays}
 * Array usado para determinar que posiciones se deben comprobar con la combinación secreta. Si el valor de una posición concreta es
 * igual a "-1" significa que esa posición se debe comprobar. 
 * Al principio todas las posiciónes esta inicializadas a "-1" y conforme se vaya encontrando bolas negras o blancas estos valores 
 * se iran modificando.
 * Este array se usa para el nivel dificil.
 */
var vector6=[-1, -1, -1, -1, -1, -1];

/**
 * @var {Integer}
 * Variable global que itera sobre el tablero lateral ( tablero de ayuda ) para determinar la posición donde colocar las bolas
 * blancas y negras según la coincidencia con la combinación.
 */
var cont_pos=0; 

/**
 * @var {Boolean}
 * Variable global que controla que no desaparezca el boton de "seleccionarColor" si se pulsa antes de insertar un color en la fila.
 */
var primeraVez=true;

/**
 * @var {Boolean}
 * Variable global que impide que se ejecute la función "comprobar()" si no se ha insertado ningún color en la línea del tablero.
 */
var primeraVez2=true;

var cuentaLineas=0;

/**
* Fija el color que el usuario desea colocar en una posición concreta del tablero de juego, sobre la que se está iterando.
* 
*/
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
      cuentaLineas++;
      obligarComprobar=1;
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;  
    }
  }else if(numColumnas==5){
    if(contador==5){
      cuentaLineas++;
      obligarComprobar=1;
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;
    }
  }else{
    if(contador==6){
      cuentaLineas++;
      obligarComprobar=1;
      contador=0;
      anterior=siguiente;
      siguiente=siguiente+1;
    }
  }
	
}

/**
* Comprueba tu combinación con la combinación secreta y determina si has ganado o no. Si no has ganado y te quedan mas filas para 
* probar nuevas combinaciones, calcula el número de bolas blancas y negras y llama la la función "ponerBolas" que coloca las bolas
* en el tablero lateral (tablero de ayuda).
* 
*/
function comprobar(){

  var tabla = document.getElementById('miTabla');
  var numColumnas = tabla.rows[0].cells.length;

  if(contador==0 && !primeraVez2){
    if(numColumnas==4){
      negras=0;
      for(var i=iter; i<iter+4; i++){
        if(document.images[i].name==document.getElementById('secreto' +i%4).name){
          negras=negras+1;
          vector1[i%4]=i%4;
          vector2[i%4]=i%4;
        }
      }
      //alert(negras);

      if(negras==4){
        hasGanado();
      }else if(cuentaLineas<=7){

        blancas=0;
        for(var j=iter2; j<iter2+4; j++){
          if(vector1[j%4]==-1){
            for(var k=0; k<4 && !encontrado; k++){
              if(vector2[k]==-1){
                if(document.images[j].name==document.getElementById('secreto' +k).name){
                  blancas++;
                  vector1[j%4]=j%4;
                  vector2[k]=k;
                  encontrado=true;
                }
              }
            }
            encontrado=false;
          }
        }
        
        //alert(blancas);
        ponerBolas(negras, blancas);
        vector1=[-1, -1, -1, -1];
        vector2=[-1, -1, -1, -1];
        iter=iter+4;
        iter2=iter2+4;
        primeraVez2=true;
      }else{
        hasPerdido();
      }
    }else if(numColumnas==5){
      negras=0;
      for(var i=iter; i<iter+5; i++){
        if(document.images[i].name==document.getElementById('secreto' +i%5).name){
          negras=negras+1;
          vector3[i%5]=i%5;
          vector4[i%5]=i%5;
        }
      }
      //alert(negras);

      if(negras==5){
        hasGanado();
      }else if(cuentaLineas<=7){

        blancas=0;
        for(var j=iter2; j<iter2+5; j++){
          if(vector3[j%5]==-1){
            for(var k=0; k<5 && !encontrado; k++){
              if(vector4[k]==-1){
                if(document.images[j].name==document.getElementById('secreto' +k).name){
                  blancas++;
                  vector3[j%5]=j%5;
                  vector4[k]=k;
                  encontrado=true;
                }
              }
            }
            encontrado=false;
          }
        }
        
        //alert(blancas);
        ponerBolas(negras, blancas);
        vector3=[-1, -1, -1, -1, -1];
        vector4=[-1, -1, -1, -1, -1];
        iter=iter+5;
        iter2=iter2+5;
        primeraVez2=true;
      }else{
        hasPerdido();
      }
    }else{
      negras=0;
      for(var i=iter; i<iter+6; i++){
        if(document.images[i].name==document.getElementById('secreto' +i%6).name){
          negras=negras+1;
          vector6[i%6]=i%6;
          vector6[i%6]=i%6;
        }
      }
      //alert(negras);

      if(negras==6){
        hasGanado();
      }else if(cuentaLineas<=7){

        blancas=0;
        for(var j=iter2; j<iter2+6; j++){
          if(vector5[j%6]==-1){
            for(var k=0; k<6 && !encontrado; k++){
              if(vector6[k]==-1){
                if(document.images[j].name==document.getElementById('secreto' +k).name){
                  blancas++;
                  vector5[j%6]=j%6;
                  vector6[k]=k;
                  encontrado=true;
                }
              }
            }
            encontrado=false;
          }
        }
        
        //alert(blancas);
        ponerBolas(negras, blancas);
        vector5=[-1, -1, -1, -1, -1, -1];
        vector6=[-1, -1, -1, -1, -1, -1];
        iter=iter+6;
        iter2=iter2+6;
        primeraVez2=true;
      }else{
        hasPerdido();
      }
    }

  }
  


  if(contador==0 && !primeraVez){
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

/**
* Pone las bolas blancas y negras en el tablero lateral (tablero de ayuda) para la combinación comprobada.
* @param {Integer} bolas_negras número de bolas negras encontradas para la combinación.
* @param {Integer} bolas_blancas número de bolas blancas encontradas para la combinación.
* 
*/
function ponerBolas(bolas_negras, bolas_bancas){
  
  var tabla = document.getElementById('miTabla');
  var numColumnas = tabla.rows[0].cells.length;
  var x=document.images;

  for(var i=0; i<bolas_negras; i++){
    x["bolas" + cont_pos].src="img/circuloRojo.png";
    cont_pos++;
  }

  for(var j=0; j<bolas_bancas; j++){
    x["bolas" + cont_pos].src="img/circuloBlanco.png";
    cont_pos++;
  }

  if(numColumnas==4){
    while(cont_pos%4!=0){
      cont_pos++;
    }
  }else if(numColumnas==5){
    while(cont_pos%5!=0){
      cont_pos++;
    }
  }else{
    while(cont_pos%6!=0){
      cont_pos++;
    }
  }

  if(bolas_negras==0 && bolas_bancas==0){
    if(numColumnas==4){
      cont_pos+=4;
    }else if(numColumnas==5){
      cont_pos+=5;
    }else{
      cont_pos+=6;
    }
  }

}

/**
* Función para ir cambiando en el tablero entre los distintos colores según el nivel de juego.
* Nivel facil: 6 colores.
* Nivel medio: 8 colores.
* Nivel dificil: 10 colores.
* 
*/
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
        primeraVez=false;
        primeraVez2=false;
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
        primeraVez=false;
        primeraVez2=false;
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
        primeraVez=false;
        primeraVez2=false;
      }

        i=i+1;
      }
    
}

/**
* Genera el tablero de juego de nivel facil.
* Tablero: 8x4
* 
*/
function nivelFacil(){
	window.location="principal.html?tablero=4";
}

/**
* Genera el tablero de juego de nivel medio
* Tablero: 8x5
* 
*/
function nivelMedio(){
	window.location="principal.html?tablero=5";
}

/**
* Genera el tablero de juego de nivel dificil.
* Tablero: 8x6
* 
*/
function nivelDificil(){
	window.location="principal.html?tablero=6";
}

/**
* Función que te redirecciona al menú principal del juego.
* 
*/
function volverInicio(){
	window.location="menu.html#";
  j=0;
}


/**
* Funcion que coge el valor de la variable tablero en la url para saber el numero de columnas del tablero.
*
*/
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

/**
* Función para generar el tablero de juego.
* @param {Integer} valor valor que determina el nivel del juego seleccionado.
*
*/
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

/**
* Función para generar el tablero lateral (tablero de ayuda).
* @param {Integer} valor valor que determina el nivel del juego seleccionado.
*
*/
function generaTablaLateral(valor){

  var cont=true;
  var cont_filas=0; //Contador para las filas
  var cont_bolas=0; //Contador para cada imagen del tablero lateral.

	var tabla2   = document.createElement("table");
    tabla2.setAttribute("id", "miTabla2");
    var tblBody2 = document.createElement("tbody");

    for(var i=0; i<8; i++){
    	var tr=document.createElement("tr");
    	tr.setAttribute("id", "comprobarColores" +i);

    	for(var j=0; j<2; j++){
    		var tr2=document.createElement("tr");
    		tr2.setAttribute("id", "fil" +cont_filas);

        if(valor==4){
      		for(var k=0; k<2; k++){
      			var td2=document.createElement("td");
      			td2.setAttribute("id", "col" +k + "fil" +cont_filas);
      			var imagen=document.createElement("img");
      			imagen.setAttribute("src", "img/circulo1.png"); 
    				imagen.setAttribute("width", "14");
    				imagen.setAttribute("height", "14");
            imagen.setAttribute("name", "bolas" +cont_bolas);
    				td2.appendChild(imagen);
    				tr2.appendChild(td2);
            cont_bolas++;
      		}
        }else if(valor==5){
          if(cont){
            for(var k=0; k<3; k++){
              var td2=document.createElement("td");
              td2.setAttribute("id", "col" +k + "fil" +cont_filas);
              var imagen=document.createElement("img");
              imagen.setAttribute("src", "img/circulo1.png"); 
              imagen.setAttribute("width", "14");
              imagen.setAttribute("height", "14");
              imagen.setAttribute("name", "bolas" +cont_bolas);
              td2.appendChild(imagen);
              tr2.appendChild(td2);
              cont_bolas++;
            }
            cont=false;
          }else{
            for(var k=0; k<2; k++){
              var td2=document.createElement("td");
              td2.setAttribute("id", "col" +k + "fil" +cont_filas);
              var imagen=document.createElement("img");
              imagen.setAttribute("src", "img/circulo1.png"); 
              imagen.setAttribute("width", "14");
              imagen.setAttribute("height", "14");
              imagen.setAttribute("name", "bolas" +cont_bolas);
              td2.appendChild(imagen);
              tr2.appendChild(td2);
              cont_bolas++;
            }
            cont=true;
          }
        }else{
            for(var k=0; k<3; k++){
                var td2=document.createElement("td");
                td2.setAttribute("id", "col" +k + "fil" +cont_filas);
                var imagen=document.createElement("img");
                imagen.setAttribute("src", "img/circulo1.png"); 
                imagen.setAttribute("width", "14");
                imagen.setAttribute("height", "14");
                imagen.setAttribute("name", "bolas" +cont_bolas);
                td2.appendChild(imagen);
                tr2.appendChild(td2);
                cont_bolas++;
              }
          }

    		tr.appendChild(tr2);
        cont_filas++;
    	}

		tblBody2.appendChild(tr);

    }

    tabla2.appendChild(tblBody2);

    miCapa2 = document.getElementById('resultado2');
    miCapa2.appendChild(tabla2);

}

/**
* Función que hace visible y oculta el boton de "seleccionarColor" según la fila en la que nos encontremos del tablero.
*
*/
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

/**
* Genera los colores según el nivel de juego seleccionado.
* Nivel facil: 6 colores.
* Nivel medio: 8 colores.
* Nivel dificil: 10 colores.
*
*/
function generaColores(valor){

  if(valor==4){
    document.getElementById('panelColores4').style.display='block';
  }else if(valor==5){
    document.getElementById('panelColores5').style.display='block';
  }else{
    document.getElementById('panelColores6').style.display='block';
  }

}

/**
* Genera la combinación secreta.
* @param {Integer} valor valor que determina el nivel del juego seleccionado.
*
*/
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

  }
}

/**
* Muestra la combinación secreta.
*
*/
function mostrarCombinacion(){
  document.getElementById('regionOculta').style.display='block';
}

/**
* Recarga la página. Usada para reiniciar el juego.
*
*/
function refresh(){
    window.location.reload();
}

/**
* Silencia la música.
*
*/
function silenciar(){
  document.getElementById('volumen').muted = true;
}

/**
* Activa la música.
*
*/
function activar(){
  document.getElementById('volumen').muted = false;
}

/**
* Pausa la música.
*
*/
function pausar(){
  document.getElementById('volumen').pause();
}

/**
* Activa/pausa la música.
*
*/
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

/**
* Baja el volumen a la música.
*
*/
function bajarVolumen(){
  document.getElementById('volumen').volume-=0.1;
}

/**
* Sube el volumen a la música.
*
*/
function subirVolumen(){
  document.getElementById('volumen').volume+=0.1;
}

/**
* Hace visible el menú opciones y los demás los oculta.
*
*/
function generaOpciones(){
  document.getElementById('contenedor2').style.display='block';
  document.getElementById('contenedor1').style.display='none';
  document.getElementById('contenedor3').style.display='none';
  document.getElementById('contenedor4').style.display='none';
}

/**
* Hace visible el menú instrucciones y los demás los oculta.
*
*/
function generaInstrucciones(){
  document.getElementById('contenedor3').style.display='block';
  document.getElementById('contenedor2').style.display='none';
  document.getElementById('contenedor1').style.display='none';
  document.getElementById('contenedor4').style.display='none';
}

/**
* Hace visible el menú play y los demás los oculta.
*
*/
function generaPlay(){
  document.getElementById('contenedor4').style.display='block';
  document.getElementById('contenedor2').style.display='none';
  document.getElementById('contenedor3').style.display='none';
  document.getElementById('contenedor1').style.display='none';
}

/**
* Vuelve al menú principal.
*
*/
function volverMenu(){
  document.getElementById('contenedor1').style.display='block';
  document.getElementById('contenedor2').style.display='none';
  document.getElementById('contenedor3').style.display='none';
  document.getElementById('contenedor4').style.display='none';
}


/**
* Hace visible dentro del menú instrucciones, la primera instrucción del juego.
*
*/
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

/**
* Hace visible dentro del menú instrucciones, la segunda instrucción del juego.
*
*/
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


/**
* Hace visible dentro del menú instrucciones, la tercera instrucción del juego.
*
*/
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

/**
* Hace visible dentro del menú instrucciones, la cuarta instrucción del juego.
*
*/
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

/**
* Hace visible dentro del menú instrucciones, la quinta instrucción del juego.
*
*/
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

/**
* Hace visible dentro del menú instrucciones, la sexta instrucción del juego.
*
*/
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

/**
* Hace visible dentro del menú instrucciones, la septima instrucción del juego.
*
*/
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

/**
* Hace visible dentro del menú instrucciones, la octava instrucción del juego.
*
*/
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

/**
* Hace visible dentro del menú instrucciones, la novena instrucción del juego.
*
*/
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

function hasGanado(){
  document.getElementById('victoria').style.display='block';
  document.getElementById('boton0').disabled=true;
  document.getElementById('boton1').disabled=true;
  document.getElementById('boton2').disabled=true;
  document.getElementById('boton3').disabled=true;
  document.getElementById('tablero').style.display='none';
}

function hasPerdido(){
  document.getElementById('derrota').style.display='block';
  document.getElementById('boton0').disabled=true;
  document.getElementById('boton1').disabled=true;
  document.getElementById('boton2').disabled=true;
  document.getElementById('boton3').disabled=true;
  document.getElementById('tablero').style.display='none';
  document.getElementById('regionOculta').style.display='block';
}

   

