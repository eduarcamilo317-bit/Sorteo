async function buscar(){

let codigo=document.getElementById("codigo").value.trim();

const respuesta=await fetch("asignaciones.json");

const datos=await respuesta.json();

let encontrado=false;

for(let i=0;i<datos.length;i++){

if(datos[i].codigo==codigo){

document.getElementById("resultado").innerHTML=

"Tu ingrediente es:<br><br>🧄 <b>"+datos[i].ingrediente+"</b>";

encontrado=true;

break;

}

}

if(!encontrado){

document.getElementById("resultado").innerHTML=

"❌ Código incorrecto.";

}

}