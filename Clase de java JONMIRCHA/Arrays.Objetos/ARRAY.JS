// Arreglos [] un arreglo es una colecion de elementos. Pueden ser de diferentes tipos. 

const a = [];
const b = [1,true,'HOLA',[2,3,4] ];
console.log(b);
console.log(a);

// PARA PEDIR EL VALOR DE uNA VARIABLE EN ARRAY SIMPRE SE AGREGA LOS CORCHETES Y SE LE RESTA UN VALOR AL PEDIR LA VARIABLE EJEMPLO.

console.log(b[2]);

// arreglo de 3 elementos o mas se debe de ubicar la cordenada padre mas la posicion que ocupa el arreglo. ejemplo:

console.log(b[3][0]);

// formas de crear arreglos, arrayof nos permite llenar elementos.

const c = Array.of('x,z,y',9,8,7);
console.log(c);

//array.fil  se utiliza para hacer un arreglo con la cantidad de las posiciones y con el valor que necesites agregar.
const d = Array(100).fill(false);
console.log(d);

// metodos : colores

const colores = ['rojo,verde,azul'];
console.log(colores);

//metodo push se utiliza para agregar otro elemento, se agrega con parentesis

colores.push('negro');
console.log(colores);

//metodo pop quita el ultimo elemento

colores.pop();
console.log(colores);

// ejecuta la funcion por cada elemento que tenga el arreglo foreach

/* colores.forEach(function(){el});
console.log(''); */

let letra = ('Sabes a yuka con carne molida');
let palabra = (40);
//conatenar `${}`
console.log(`BUENO EL RESULTADO ES ${letra} y tiene ${palabra} porciento de que te quedes con mucho acne bebe`);


/* OBJETOS se utilizan las {}, un obeto es una colleccion de llave y valores, */

// EN JAVA SCRIP TODO ES UN OBJETO, se puede llamar con el constructor.

let z = new String('Hola');
//console.log(z);
// UTILIZAAR CONTS AL TRABAJAR CON OBJETOS, PARA QUE NO CAMBIE EL VALOR, PARA NO CAMBIAR LA REFERENCIA AL SER DECLARADA. 
const x = {};
console.log(x);
// creacion de objeto con propiedades, llave valor, el nombre es la llave, valor es el valor, para hacer el objeto se utiliza los dos puntos no el signo de igual
const jon = {
    nombre: 'carlos',
    apellido: 'Echagareta',
    edad: 36,
    pasatiempo: 'hacer ejercicios, tomar cerveza, y dormir',
    soltero: false,
    contacto: {
        telefono: '5627006',
        email:'carlosechaga@gmail.com',
    },
    // otra manera de agregar funcion, se le asigna una llave a la propiedad de tu objeto para asignarle una funcion.
    saludar:function (){
        console.log('hola')
    },
    chao: function kalabaza(sopo) {
        console.log('hola que tal estas me llamo Carlos Echagarreta');
    },
    tuname: function () {
        console.log(`Puedes decirrme tu edad ${this.nombre} ${this.apellido}`);
    }
    

     };

     console.log(jon);

     function CamelloBecerro (){
         console.log('BECERRO');
         console.log('ZOPO');
         console.log('TOMTO');

     }

     CamelloBecerro ();

     // En los objetos se puede utilizar corchetes [] y punto.
     // Para llamar los VALORES DE UN OBJETO, se utiliza corchetes o el punto ejemplo
     // los atributos son variables que tiene un objeto.
     // cuando es una funsion deja de ser un atributo
     // Dentro de un objeto a la variabe se les va a llamar atributo o propiedades y las funciones de van a llamar METODOS.

     console.log(jon['nombre']);
     console.log(jon['apellido']);
     // con punto
     console.log(jon.nombre);
     console.log(jon.pasatiempo);
     // para llamar solo la posicion deseada de los arreglos, con cochete.
     console.log(jon.pasatiempo[0]);
     //Para los aoabjetos es con punto
     console.log(jon.contacto);
     console.log(jon.contacto.email);

     // funcion SALUDA METODO, RECUERDA QUE ESTA DENTRO DEL OBJETO

     jon.saludar();
     jon.chao();

     //Para concatenar los valores de los objetos se utiliza this= es igual a este. hace referencia al objeto

    // tuname: function () {
        //console.log(`Puedes decirrme tu edad ${this.nombre} ${this.apellido}`);

        console.log(jon);

        // Metodos 
        //metod que permite listar toda las llaves del Objeto Keys

        console.log(Object.keys(jon));
     
    // Permite saber si un objeto tiene valores console.log(Object.keys(jon));
   
         console.log(Object.values(jon));

    // me permite saber si un objeto tiene alguna propiedad

    console.log(jon.hasOwnProperty('nombre'));






