//En JavaScript los bucles ( loops ) son utilizados para realizar tareas repetitivas con base en una condición. Las condiciones típicamente devuelven verdadero (verdadero) o falso (falso) al ser evaluados. El bucle continuará ejecutándose hasta que la condición devuelva false.

// while significa mientras

/* let contador = 0;

while (contador < 10) {
console.log(contador);
contador++;
}

do {
    console.log(contador);
contador++;
} while (contador >10) {
    
}
console.log(contador); */

/* // for (iniciacion de la variable; Condicion ; decremento o incremento){
    SETENCIAS QUE EJECITA EL FOR
    SETENCIAS QUE EJECITA EL FOR
    SETENCIAS QUE EJECITA EL FOR
} */
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

//El bucle FOR se utiliza para repetir una o más instrucciones un determinado número de veces. De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute
let contador = 0 ;

//inicializacion de variable; condicon que se va valuar; decremento o incremento.

for (let i = 0; i< 20; i++) {
    console.log(i);
    
}
//< numero.length devuelve la longitud, va a imprimir siempre todo los elementos que tiene el arreglo. va a imprimir toda las posiciones que tiene el arreglo. Cunado colocar un numero solo se va a imprimir la cantidad de veces que coloques como numero.
let numero = [10,20,30,40,50,60,70,80,90];
for (let i= 0; i < numero.length; i++) {
    console.log(numero[i]);
    
}

//forin permite recorrer las propiedades de un objeto

const carlos = {
    nombre: 'Carlos',
    apellido: 'Echagarreta',
    edad: 36

}
// pide que cree una variable que se quiere imprimir en el caso el objeto,for (const key in object) es carlos
//for (const key in carlos)  se peude dejar key, en este caso voy a colocar propiedad
for (const propiedad in carlos) {
    // key es la variable
    //valu valor
    console.log(`key:${propiedad}, value:${carlos}[propiedad]`);
        
 }
 const jon = {
    nombre: 'carlos',
    apellido: 'Echagareta',
    edad: 36,
    pasatiempo: 'hacer ejercicios, tomar cerveza, y dormir',
    soltero: false,
    contacto: {
        telefono: '5627006',
        email:'carlosechaga@gmail.com',
    }
}
console.log(jon);

// for of recorre cualquier objeto que tenga la capacidad de repetirse en javascript 

/* for (const iterator of object) {
    
}
     */
// dice recorreme cada elemento que se encuentra en numero
for (const elemento of numero) {
    console.log(elemento);
    
}


// for in es mas para objetos, permite recorrer cada una de las propiedades de un objeto primitivo,  y for of para arreglos, recorrere cada unos de los elementos, CADENA DE TEXTO. (ITERABLE).