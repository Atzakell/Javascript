//let || const
let a;
const PI = 3.141516;
console.log('Valor de pi -> ', PI);

a = 'Atzakell';
console.log(a);

//objeto tipo const (compuesto)
const persona = {
  nombre: 'Ysaac',
  edad: 21,
};

//arreglo tipo const (compuesto)
const formas = ['triangulo', 'cuadrado', 'circulo'];

console.log(persona);
console.log(formas);

persona.correo = 'ysaac356abaddon@gmail.com';
formas.push('rombo');

console.log(persona);
console.log(formas);
