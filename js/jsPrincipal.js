// JavaScript Document

function cambiarDificultad(){

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

}

function insertaFilas(){

    var table = document.getElementById("miTabla");		//Identificamos la tabla
    var tr = document.createElement("tr"); 		//Creamos una fila

    var td1 = document.createElement("td");	//Creamos la primera columna
    td1.setAttribute("id", "colum1");

    var imagen = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td1.appendChild(imagen); //Añadimos la imagen a la columna
	tr.appendChild(td1);	//Añadimos la columna a la fila


    var td2 = document.createElement("td");
    td2.setAttribute("id", "colum2");

    var imagen = document.createElement("img");
    imagen.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td2.appendChild(imagen);
	tr.appendChild(td2);

	var td3 = document.createElement("td");
    td3.setAttribute("id", "colum3");

    var imagen = document.createElement("img");
    imagen.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td3.appendChild(imagen);
	tr.appendChild(td3);

	var td4 = document.createElement("td");
    td4.setAttribute("id", "colum4");

    var imagen = document.createElement("img");
    imagen.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td4.appendChild(imagen);
	tr.appendChild(td4);

	table.appendChild(tr) 	//Añadimos la fila a la tabla

}

function generaTablero(){

	miTabla = document.createElement("table");
	miTabla.setAttribute("id", "miTabla");
	tbBody = document.createElement("tbody");	
	tr = document.createElement("tr");	
	td1 = document.createElement("td");
	td2 = document.createElement("td");	
	td3 = document.createElement("td");
	td4 = document.createElement("td");

	var imagen = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td1.appendChild(imagen); //Añadimos la imagen a la columna
	tr.appendChild(td1);	//Añadimos la columna a la fila

	var imagen2 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen2.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen2.setAttribute("width", "36");
	imagen2.setAttribute("height", "36");

	td2.appendChild(imagen2); //Añadimos la imagen a la columna
	tr.appendChild(td2);	//Añadimos la columna a la fila

	var imagen3 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen3.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen3.setAttribute("width", "36");
	imagen3.setAttribute("height", "36");

	td3.appendChild(imagen3); //Añadimos la imagen a la columna
	tr.appendChild(td3);	//Añadimos la columna a la fila

	var imagen4 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen4.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen4.setAttribute("width", "36");
	imagen4.setAttribute("height", "36");

	td4.appendChild(imagen4); //Añadimos la imagen a la columna
	tr.appendChild(td4);	//Añadimos la columna a la fila

	tbBody.appendChild(tr);	
	miTabla.appendChild(tbBody);

	miCapa = document.getElementById('resultado');
	miCapa.appendChild(miTabla);

	for(var i=0; i<7; i++){
		nuevafila();
	}

	
}

function nuevafila() {

	var tbody=document.getElementsByTagName("tbody")[0]
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	var td4 = document.createElement("td");

	var imagen = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen.setAttribute("width", "36");
	imagen.setAttribute("height", "36");

	td1.appendChild(imagen); //Añadimos la imagen a la columna
	tr.appendChild(td1);

	var imagen2 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen2.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen2.setAttribute("width", "36");
	imagen2.setAttribute("height", "36");

	td2.appendChild(imagen2); //Añadimos la imagen a la columna
	tr.appendChild(td2);

	var imagen3 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen3.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen3.setAttribute("width", "36");
	imagen3.setAttribute("height", "36");

	td3.appendChild(imagen3); //Añadimos la imagen a la columna
	tr.appendChild(td3);

	var imagen4 = document.createElement("img");	//Creamos la imagen con sus respectivas propiedades
    imagen4.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
	imagen4.setAttribute("width", "36");
	imagen4.setAttribute("height", "36");

	td4.appendChild(imagen4); //Añadimos la imagen a la columna
	tr.appendChild(td4);

	tbBody.appendChild(tr);

}

function inserta1Columnas(){

	var tabla = document.getElementById('miTabla');

	for(var i=0; i<=8; i++){
		var imagen = document.createElement("img");
	    imagen.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
		imagen.setAttribute("width", "36");
		imagen.setAttribute("height", "36");
		tabla.tBodies[0].rows[i].insertCell(0);
		tabla.tBodies[0].rows[i].cells[0].appendChild(imagen);

	}
}

function inserta2Columnas(){

	var tabla = document.getElementById('miTabla');

	for(var i=0; i<=8; i++){
		var imagen = document.createElement("img");
	    imagen.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
		imagen.setAttribute("width", "36");
		imagen.setAttribute("height", "36");
		tabla.tBodies[0].rows[i].insertCell(0);
		tabla.tBodies[0].rows[i].cells[0].appendChild(imagen);

		var imagen2 = document.createElement("img");
	    imagen2.setAttribute("src", "/home/francisco/Documentos/Proyecto/img/circulo1.png"); 
		imagen2.setAttribute("width", "36");
		imagen2.setAttribute("height", "36");
		tabla.tBodies[0].rows[i].insertCell(1);
		tabla.tBodies[0].rows[i].cells[1].appendChild(imagen2);
	}
}

function eliminaColumna(){

	var tabla = document.getElementById('miTabla');

	for(var i=0; i<8; i++){
		tabla.tBodies[0].rows[i].deleteCell(0);
	}
}

/*function eliminaTabla(){
	var tabla = document.getElementById('miTabla');

	for(var i=0; i<8; i++){
		tabla.deleteRow(0);
	}
}*/

function refresh(){
    window.location.reload();
}






/*window.onload = function(){
	document.onclick = cambiarDificultad;	
}*/
