//definir
const a = [];
const b = [
  1,
  true,
  'Unreal Engine',
  ['A', ' Blender', [1, ' Photoshop', 'maya']],
];
console.log(a);
console.log(b); //mostrar todo el arreglo
console.log(b[2]); //mostrar la posicion 2 del arreglo
console.log(b[3][2][1]); //mostrar la pisicion 3 del sublemento 2 del subelemento 1

const c = Array.of('x', 'y', 'z', 9, 8, 7);
console.log(c);

//llenar arreglos con un valor
const d = Array(100).fill(false);
console.log(d);

//formas que ya no se usan
const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ['Rojo', 'Verde', 'Azul'];
console.log(colores);

colores.push('Morado'); //agregar un elemento al final
console.log(colores);

colores.pop(); //quita el ultimo elemento
console.log(colores);

//ejecutar una funcion por cada elemento
colores.forEach(function (el, index) {
  console.log(`<li id='${index}'>${el}</li>`);
});
