// JavaScript Document

/*function cambiarDificultad(){

	var i;
	var tabla = document.getElementById('miTabla');
	var numColumnas = tabla.rows[0].cells.length;
	var cont1=true;
	var cont2=true;

   	for (i=0;i<document.miformulario.myradio.length;i++){ 
      	 if (document.miformulario.myradio[i].checked) 
         	 break; 
   	} 

   	var valor = document.miformulario.myradio[i].value 

   	if(valor==1){
   		refresh();
   	}else if(valor==2){
   		if(numColumnas==4){
   			inserta1Columnas();
   		}else if(numColumnas==6){
   			eliminaColumna();
   		}
   	}else{
   		if(numColumnas==4){
   			inserta2Columnas();
   		}else if(numColumnas==5){
   			inserta1Columnas();
   		}
   	}

}*/

/*function insertaFilas(){

    var table = document.getElementById("miTabla");		//Identificamos la tabla
    var tr = document.createElement("tr"); 		//Creamos una fila

    var td1 = document.createElement("td");	//Creamos la primera columna
    td1.setAttribute("id", "colum1");

    var imagen = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td1.appendChild(imagen); //Añadimos la imagen a la columna
	tr.appendChild(td1);	//Añadimos la columna a la fila


    var td2 = document.createElement("td");
    td2.setAttribute("id", "colum2");

    var imagen = document.createElement("img");
    imagen.setAttribute("src", "img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td2.appendChild(imagen);
	tr.appendChild(td2);

	var td3 = document.createElement("td");
    td3.setAttribute("id", "colum3");

    var imagen = document.createElement("img");
    imagen.setAttribute("src", "img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td3.appendChild(imagen);
	tr.appendChild(td3);

	var td4 = document.createElement("td");
    td4.setAttribute("id", "colum4");

    var imagen = document.createElement("img");
    imagen.setAttribute("src", "img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td4.appendChild(imagen);
	tr.appendChild(td4);

	table.appendChild(tr) 	//Añadimos la fila a la tabla

}*/

/*function guardarCookie(valor) {
    document.cookie = valor;
}

function guardar() {
    tuValor = document.dato.miCookie.value;
    guardarCookie(tuValor,)	 ;
}*/

var i=0;

var j=0;

function seleccionarColor(){
	j=j+1;
}

function setSrcFacil(){
	i=i+1;

    var x=document.images;

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
}

function nivelFacil(){
	window.location="principal.html";
}

function nivelMedio(){
	window.location="principal2.html";
}

function nivelDificil(){
	window.location="principal3.html";
}

function volverMenu(){
	window.location="inicio.html";
}


function generaTableroFacil(){
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  tabla.setAttribute("id", "miTabla");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 8; i++) {
    // Crea las hileras de la tabla
    var tr = document.createElement("tr");
    tr.setAttribute("id", "fila" +i);
 
    for (var j = 0; j < 4; j++) {
	    var td = document.createElement("td");
	    td.setAttribute("id", "fila" +i +"columna" +j);
	    var imagen = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
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

function generaTableroMedio(){
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  tabla.setAttribute("id", "miTabla");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 8; i++) {
    // Crea las hileras de la tabla
    var tr = document.createElement("tr");
    tr.setAttribute("id", "fila" +i);
 
    for (var j = 0; j < 5; j++) {
	    var td = document.createElement("td");
	    td.setAttribute("id", "fila" +i +"columna" +j);
	    var imagen = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
		imagen.setAttribute("src", "img/circulo1.png"); 
		imagen.setAttribute("width", "36");
		imagen.setAttribute("height", "36");
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

function generaTableroDificil(){
 
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  tabla.setAttribute("id", "miTabla");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 8; i++) {
    // Crea las hileras de la tabla
    var tr = document.createElement("tr");
    tr.setAttribute("id", "fila" +i);
 
    for (var j = 0; j < 6; j++) {
	    var td = document.createElement("td");
	    td.setAttribute("id", "fila" +i +"columna" +j);
	    var imagen = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
		imagen.setAttribute("src", "img/circulo1.png"); 
		imagen.setAttribute("width", "36");
		imagen.setAttribute("height", "36");
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


function generaTablaLateral(){

	var tabla2   = document.createElement("table");
    tabla2.setAttribute("id", "miTabla2");
    var tblBody2 = document.createElement("tbody");

    for(var i=0; i<8; i++){
    	var tr=document.createElement("tr");
    	tr.setAttribute("id", "fila" +i);

    	for(var j=0; j<2; j++){
    		var tr2=document.createElement("tr");
    		tr2.setAttribute("id", "fil" +j);

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
    		tr.appendChild(tr2);
    	}

		tblBody2.appendChild(tr);

    }

    tabla2.appendChild(tblBody2);

    miCapa2 = document.getElementById('resultado2');
    miCapa2.appendChild(tabla2);

}


/*function nuevafila() {

	var tbody=document.getElementsByTagName("tbody")[0]
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");

	var imagen = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "/img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td1.appendChild(imagen); //Añadimos la imagen a la columna
	tr.appendChild(td1);

	var imagen2 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen2.setAttribute("src", "img/circulo1.png"); 
	imagen2.setAttribute("width", "36");
	imagen2.setAttribute("height", "36");

	td2.appendChild(imagen2); //Añadimos la imagen a la columna
	tr.appendChild(td2);

	var imagen3 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen3.setAttribute("src", "img/circulo1.png"); 
	imagen3.setAttribute("width", "36");
	imagen3.setAttribute("height", "36");

	td3.appendChild(imagen3); //Añadimos la imagen a la columna
	tr.appendChild(td3);

	var imagen4 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen4.setAttribute("src", "img/circulo1.png"); 
	imagen4.setAttribute("width", "36");
	imagen4.setAttribute("height", "36");

	td4.appendChild(imagen4); //Añadimos la imagen a la columna
	tr.appendChild(td4);

	tbBody.appendChild(tr);

}*/

/*function inserta1Columnas(){

	var tabla = document.getElementById('miTabla');

	for(var i=0; i<=8; i++){
		var imagen = document.createElement("img");
	    imagen.setAttribute("src", "img/circulo1.png"); 
		imagen.setAttribute("width", "36");
		imagen.setAttribute("height", "36");
		tabla.tBodies[0].rows[i].insertCell(4);
		tabla.tBodies[0].rows[i].cells[4].appendChild(imagen);

	}
}

function inserta2Columnas(){

	var tabla = document.getElementById('miTabla');

	for(var i=0; i<=8; i++){
		var imagen = document.createElement("img");
	    imagen.setAttribute("src", "img/circulo1.png"); 
		imagen.setAttribute("width", "36");
		imagen.setAttribute("height", "36");
		tabla.tBodies[0].rows[i].insertCell(4);
		tabla.tBodies[0].rows[i].cells[4].appendChild(imagen);

		var imagen2 = document.createElement("img");
	    imagen2.setAttribute("src", "img/circulo1.png"); 
		imagen2.setAttribute("width", "36");
		imagen2.setAttribute("height", "36");
		tabla.tBodies[0].rows[i].insertCell(5);
		tabla.tBodies[0].rows[i].cells[5].appendChild(imagen2);
	}
}

function eliminaColumna(){

	var tabla = document.getElementById('miTabla');

	for(var i=0; i<8; i++){
		tabla.tBodies[0].rows[i].deleteCell(5);
	}
}*/

/*function eliminaTabla(){
	var tabla = document.getElementById('miTabla');

	for(var i=0; i<8; i++){
		tabla.deleteRow(0);
	}
}*/

/*function refresh(){
    window.location.reload();
}

var global;

function coge(direccion){
	global=direcion;
}

function pon(otro){
	var image = document.getElementById(otro);
	image.src=global;
}*/


/*window.onload = function(){
	document.onclick = cambiarDificultad;	
}*/
