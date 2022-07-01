const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

//sin destructurar
let uno = letras[0],
  dos = letras[1],
  tres = letras[2];

console.log(uno, dos, tres);

//Destructurando
const [one, two, three] = letras;
console.log(one, two, three);

//los atributos del objeto deben llamarse igual que la delcaracion
//si estamos destructurando
const Atza = {
  nombre: 'LilKarloz',
  cargo: 'Quimico',
  edad: 21,
};
let { nombre, cargo, edad } = Atza; //cambiar el orden no importa
console.log(nombre, cargo, edad); //mientras se llamen igual
