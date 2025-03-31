function agregar (valor){  //valor seria el parametro osea -"agregar(parametro)"- los numeros que estan dentro del ()

document.getElementById("pantalla").value +=valor;
//lee todo el documento entero y selecciona el id 
//.value te permite acceder o cambiar el valor del campo de texto de la caja
//--lo que haces es agregar el valor proporcionado como argumento a lo que ya está 
//en la caja de texto.
//--Cuando usas += valor, lo que haces es agregar el valor proporcionado como argumento a lo que ya está 
//en la caja de texto. Es decir, si en la caja de texto ya había algo (por ejemplo, "12"), y el valor que 
//pasas es "3", después de ejecutar el código, el campo de texto mostrará "123".


//--El operador += concatena el valor actual con el valor nuevo. Esto es útil, por ejemplo, en una calculadora donde cada vez que el usuario presiona un número, este número se agrega al final de la secuencia que está escribiendo en la pantalla.
}


function borrar(){
document.getElementById("pantalla").value="";


}

function igual(){
const valorpantalla=document.getElementById("pantalla").value;
const resultado=eval(valorpantalla);

document.getElementById("pantalla").value =resultado;

}