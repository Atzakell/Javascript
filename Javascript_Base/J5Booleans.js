//declaracion practica
let verdadero = true;
let falso = false;
//constructor
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso);

//valores que tienden a verdadero
console.log(Boolean(true));
console.log(Boolean({}), Boolean([])); //objeto,arreglo
console.log(Boolean(34), Boolean(-42), Boolean(3.14), Boolean(-3.14)); //numeros
console.log(Boolean('Hola')); //cadena
console.log(Boolean(new Date())); //fecha
console.log(Boolean(Infinity), Boolean(-Infinity)); //infinitos

//valores que tienden a falso
console.log(Boolean(false));
console.log(Boolean(null), Boolean(undefined)); //null, undefined
console.log(Boolean(0), Boolean(NaN)); //cero, NotaNumber
console.log(Boolean(''), Boolean('')); //cadena de texto vacia

//en ambos no hya valor pero sus diferencias
//undefinded = no se ha asignado un valor por ello esta vacio
let indefinido;
console.log(indefinido);

//null = intencionalmente la variable esta vacia
let nulo = null;
console.log(nulo);

//recordar un objeti se define loweCamellCase
//NaN = el resultado no es un numero
let noEsUnNumero = 'hola' * 3.7;
console.log(noEsUnNumero);
