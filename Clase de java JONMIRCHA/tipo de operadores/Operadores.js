// Operadores Aritmeticos, suma,resta,modulo,agrupacion

let a = 5 + 5;
console.log(a);

let modulo = 5/2;
//let modulo = 5%2;
console.log(modulo);

// si utilizas el operador de modulo que es = % nos devuelve el residuo 

// operadores Relacionales, MAYOR Y MENOR
console.log(8 > 9);

// OPERADORES COMPUESTOS CUANDO ESTA ACOMPAñADO DE UN MAYOR O MENOR MAS EL SIGNO DE IGUAL.

console.log(8 >= 9);
// 8 es < menor que 9
console.log(8 < 9);

// un = Igual es asignacion de variable
// dos == Es comparacion de valores, COMPARACION DE VALORES
// tres === Es comparacion de tipo de datos y de valor.

/*  SIEMPRE UTILIZAR LOS 3 IGUALES, ES UNA BUENA PRAXIS, LOS DOS IGULES ES UNA MALA PRACTICA, debido a que te compara nada mas el valor */

/// EJEMPLO

console.log( 7 === 7);
console.log( '7' === 7);
console.log( 0 === false);


// Operadores de incremento y descreciente 

let I = 1;
//I = I + 2;
// OTRO MODO
I += 3;
console.log(I);


// OPERADOR UNARIO QUE VA SUMANDO 1 POR 1 
// El ++ significa 1 
// se recomienda simpre antes de hacer la suma utilizar el nombre de la variable para no tener problemas.

let i = 1 ; 

i++;
//otra manera
++i;
console.log(i);


/* OPERADORES LOGICOS */
//NOT, OR, AND

// !NOT= NIEGA 
// ||OR= (O) (Verdadero)CUANDO TENGO DOS O MAS CONDICIONES CON QUE UN Dato SE CUMPLA, el RESULTADO SERA VERDADERO O TRUE.
// && AND = cuando tengo dos o mas condiciones todas tienen que cumplirse eS decir ser verdaderas, para que AND se cumpla o se valide.
let m = 'BENJAMIN';
console.log(m);
// OR LA CONDICION SE CUMPLE
console.log((9 === 9)||('9'=== 9));
//&& AMBAS CONDICONES NO SE CUMPLEN POR LO TANTO ES FALSO
console.log((9 === 9)&&('9'=== 9));
// SE CUMPLEN LAS CONDICIONES
console.log((9 === 9)&&('9'=== '9'));


