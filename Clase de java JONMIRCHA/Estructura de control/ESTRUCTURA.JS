
// ESTRUCTURAS CONDICIONALES O DE CONTROL

// IF-ELSE, EJECUTA CIERTAS ACCIONES
// if = si
// else = si no 

let edad = 15;

if (edad >17 ) {
    console.log('Eres mayor de edad');
}
else{
    console.log('Eres menor de edad');
}
// mayor o igual, debes de incluir el valor con logica
if (edad >=18 ) {
    console.log('Eres mayor de edad');
}
else{
    console.log('Eres menor de edad');
}
// 
if (edad < 18 ) {
    console.log('Eres mayor de edad');
}
else{
    console.log('Eres menor de edad');
}
//comparar el valor o incluir el valor
if (edad <= 17 ) {
    console.log('Eres mayor de edad');
}
else{
    console.log('Eres menor de edad');
}
// valores anidados
/* if-else if-else */
/* dejame dormir 0hrs - 5hrs
buenos dias 6hrs - 11hrs
buenas tardes 12hrs - 18hrs
buenas noches 19hrs - 23hrs */
// UANDO COMPARARAS EXCLUYES EL VALOR

let hora = 6;

if (hora>= 0 && hora<=5) {
    console.log('Dejame Dormir');
    
} else if (hora>=6 && hora<=18) {
    console.log('Buenos Dias');
    
}else if (hora>=19 && hora<=23) {
    console.log('Buenas Noches');
    
} else {
    console.log('BUENAS NOCHES');
}

/* OPERADOR TERNARIO  (condicion)? verdadero : falsa  */
//  Este operador ternario puede pasar varias líneas de código a una sola línea 

console.log('operador ternario');

let EresMayor = (edad>=17)
?'Eres Mayor de Edad'
: 'Eres Menor de Edad';
console.log(EresMayor);


/* switch-case 
domingo -1
lunes-1
martes-2
miercoles-3
jueves-4
case= caso
*/
let dia = 7;
switch (dia) {
    case 0:
        // brak es el cierre y es lo que se ejecuta en la variable 
        console.log('Domingo');
        break;
        case 1:
        console.log('Lunes');
        break;
        case 2:
        console.log('Martes');
        break;
        case 3:
        console.log('Miercoles');
        break;
        case 4:
        console.log('Jueves');
        break;
        // el default: cualquier valor que no este contemplado cae en default:
    default: 
        console.log('EL Dia no EXISTE');
        break;
}
