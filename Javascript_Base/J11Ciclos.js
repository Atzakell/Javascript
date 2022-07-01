//ciclos menos usados
let index = 0;

while (index < 10) {
  console.log('while ' + index);
  index++;
}

let count = 0;

do {
  console.log('do while ' + count);
  count++;
} while (count < 10);

//ciclo recomendado
for (let i = 0; i < 10; i++) {
  console.log('for ' + i);
}

//imprimir arreglo
let decenas = [10, 20, 30, 40, 50, 60, 80, 90];
for (let i = 0; i < decenas.length; i++) {
  console.log(decenas[i]);
}

//for in 0w0
const LilAtza = {
  nombre: 'Atza',
  cargo: 'DeveloperAnalyst 0w0',
  edad: 21,
};
//para acceder al value en un for in se usa []
//permite recorrer propiedades de un objeto
for (const propiedad in LilAtza) {
  console.log(`key: ${propiedad}, Value: ${LilAtza[propiedad]}`);
}

//for of 0w0
//ideal para trabajar con arreglos
//permite recorrer todos los elementos de cualquier objeto iterabl
//element vaa recorrer el arreglo decenas
for (const element of decenas) {
  console.log(element);
}
//iterable= que se puede recorrer
//con cadenas
let saludillo = '0la infiel';
for (const caracter of saludillo) {
  console.log(caracter);
}
