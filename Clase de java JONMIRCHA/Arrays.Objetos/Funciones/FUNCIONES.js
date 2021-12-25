//alert("Bienbenidos a las clases de Java Scrip")

// variables: variable, nombre, valor.

var nombre = prompt("ingresa tu nombre:"); // prompt es un formulario

var apellido = prompt ("ingresa tu apellido:");

alert("Bienbenido al usuario:" +  nombre);
alert("Bienbenido al usuario:" +  apellido);
//alert(`Bienbenido al usuario ${apellido}`);

console.log(nombre);
console.log(apellido);



console.log(apellido);

// let otra variable se le llaman palabra reservadas.

let provincia = "Buenos Aires ";
console.log(provincia);

//constatnte se escriebe con mayuscula pero es una variable que no va a cambiar en l ejecucion de la aplicacion.

const Pi = 1985;
console.log(Pi);

// console.log() para que imprima en la consola del navegador.
// Funcion PROMPT sirve para dar una funcion y entroducir datos.

//DOM  ES EL MANEJO DE LOS OBJETOS Y DOCUMENTOS QUE TIENE  JS SOBRE LOS DOCUMENTOS DE HTML.


document.write("<p>Este es el nombre: " + nombre + " </p>");

/*  VARIABLES PRIMITIVAS STRING, NUMBER BOOLEAN, NULL, UNDEFINED, NAN */

//Template String son cadenas literales de texto incrustadas en el código fuente que permiten su interpolación mediante expresiones.

// Para utilizar solo una comilla apretar mayuscula y el signo de piso qu esta al aldo del positivo.

// EXTENSION PARA COMENTA ALT + shift + A  


// CONCATENACION DE VARIABLES

let zizou = " ZINEDINE ZIDANE"
let Messi = " El Segundo se los peores en la historia"
let quien = (" El mejo jugador del mundo es:" + zizou +  Messi);
console.log(quien);

// interpolacion de variables con template string, para colocar espacio debes de concatenar con dos comillas ""
// temple string
// COMILLAS INVERTIDAS CTRL+ Alt la tecla que esta arriba del enter

let zozou2 = ` Hola mi saludos es: ${zizou} ${Messi}`; 
console.log(zozou2);

// hacer la lista o la concatenacion con templeta string 

let ul = `
<ul>
<li>oscar</li>
<li>javier</li>
<li>orlando</li>
<li>luis</li>
</ul>`
console.log(ul);

let becero = ` becerro eres tu zapo teton: ${Messi} ${zizou}`;
console.log(becero);


                                           /*  LOS NUMEROS */

let a = 1;
let b = 2;
let c = 7.19;
let d = '5,6';

console.log(a,b);
console.log(c.toFixed(1)); // toFixed cuantos numero decimales va a tener un valor
console.log(parseInt(c)); //devuelve la parte entera
console.log(typeof a, typeof d); // dice que tipo de variable tienes
console.log(a + b)

/*  LOS BOLEANOS  boolean es un dato lógico que solo puede tener los valores true o false.*/

let verdadero = true;
let falso = false;

console.log(verdadero,falso);
console.log(typeof verdadero, typeof falso);
console.log(0);

/* Valores UNDEFINED, NULL, NAN... UNDIFENED: ES UNA VARIABLE QUE NO TIENE VALOR Y TAMPOCO SE LE ASIGNO UN VALOR, NULL: QUE LA VARIABLE ESTA VACIO ASIGNADO POR EL PROGRAMADOR */

let indefinida;
let nulo = null; 
console.log(indefinida);
console.log(null);
// NALL NOT A NUMBER. ES PARA OPERACIONES NUMERICAS, Este valor se usa para representar valores imposibles o indeterminados
let noEsUnNumero = " hola" * 4;
console.log(noEsUnNumero);


/* FUNCIONES VARIABLES COMPUESTAS, OBJECT, ARRAY FUNCTION, CLASS ENTRE OTROS */
// una funcion es un bloque de linea de codigo
// FUNCIONES DECLARADA: 

function estoEsUnaFuncion(){
    console.log('uno');
    //return 'esta funcion hace que ignore toda las lineas que le siguen';
    console.log('dos');
    console.log('tres');

}

//invocacion de funcion, las funciones tambien son objetos. los parentencis indica como se llama a la funcion.

estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();


function UnaFuncionQueDeVuelveValor(){
    console.log('uno');
    console.log('dos');
    console.log('tres');
    return 'la funcion a retornado una cadena de texto';
}

let valordeFuncion = UnaFuncionQueDeVuelveValor
console.log(valordeFuncion);


// las funciones pueden recibir parametros.

function saludar (nombre,edad){ // nombre y edad son los parametros de la funcion , son parecidos a las variables.
console.log(`Hola mi nombre es: ${nombre} y tengo ${edad} años`);
}
saludar('Benjamin',1); // Se debe asignar la funcion con valores... en este caso se utiliza un string, el cual hace la funcion de los valores que se encuentra en la funcion elaborada. 

// tambien se le puede asignar un valor a los parametros con el signo de =.. ejemplo: function saludar (nombre = Carlos ,edad = 0 )

// Funcion DECLARADAS vs funciones EXPRESADAS, las declaradas 
// LAS DECLARADAS PUEDEN LLAMARSE IN IMPORTAR EL ORDEN. ESTO SE LLAMA HOISTING
//LAS EXPRESADAS NO SE IMPRIMEN DEVIDO A QUE NO TIENE UN PARAMETRO DEFINIDO.

const FuncionExpresada = function () {
console.log('Esto es una funcion expresada es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su defincion javascript nos');    
} //no puedes axceder a la funcion expresada ya que no ha asido declaradao inicializada, osea que debe de ser invocada despues de elaborar la funcion.


FuncionExpresada();