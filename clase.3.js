//Arreglos son coleciones de datos.


let  nombre = 'Carlos';
let apaellido = 'Echagarreta';
const pais = 'Argentina';

// sintaxis para arreglo [].

//let arreglo = [];
// Ejemplo

let nombresClases = ['Carlos','Orlando','Luis','Antonio'];
let temperaturas= [6,8,10,16];

// programacion orientada a objetos, ya no se utiliza, por lo menos Javscript
let provincias = new Array()

//Acseso a los datos del Array

// se accede por las posiciones. Indice y elemntos, ejempolo: let nombresClases = ['Carlos','Orlando','Luis','Antonio']; tiene de indice tiene 4 y de elemento tiene 4.
console.log(nombresClases[1]);
console.log(nombresClases[0]);
console.log(nombresClases[3]);
console.log(nombresClases[2]);
//para saber la cantidad de alelemntos que tiene el arreglo se utiliza ua funcion que se llama length, da la longitud y indice.
console.log(nombresClases.length);

console.log(temperaturas[1]);

// Mostrar los datos en pantalla
// manejo de los documentos de java para tocar los documentos en HTML: document.getElementById("caja").innerHTML, trae los datos, optine los datos de la caja.
//getElementById: traer elemento por su nombre
//innerHTML 

document.getElementById("caja").innerHTML = nombresClases;

/* IF*/
// significa SI para aceptar los datos, mientras elije una eleccion segun el codigo utilizado por el programador.
//sintaxis, las condiciones son true o false.
/* if (condition) {
    
} */

let edad = prompt('ingresa la edad por favor')
let provincia = prompt ('Ingresa tu Provincia');
//& ESTE OPERADO SIGNIFICA Y 
//=== EXACTAMENTE IGUAL O == IGUAL
// II O VIVEN EN SANTA FE
// sigdo de diferente != 
// else if = para indicar  una alerta, paraecido al alet.

if(edad >= 18 && recidencia =='CABA') {
console.log('Podes comprar la entrada');
alert('Puedes comprar la entrada');
// aqui se pone true.
//else: escape o salida.
}else{ // else; o si no..  cuando es falso sale esta ejecucion. aqui siempre se pone false
    
console.log('No Tienes la edad suficiente para comprar la entrada');
alert('No puedes comprar las entradas');
}


let usuario = prompt('Ingresa tu Usuario');
let pasword = prompt('Ingresa tu Pasword');

if (usuario == 'Administrador' && pasword == '1234') 
alert('Bienbenido Administrador');
else{
alert('Contacta con sistema mmg');    
}

{
    
}

