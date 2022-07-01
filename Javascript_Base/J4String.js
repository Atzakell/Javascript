let nombre = 'Ysaac :D';
let apellido = 'AtzaDev';

//Constructor formal tipo string
let saludar = new String('Hola mundo');
let lorem = 'Lorem ipsum dolor sit amet';

console.log(nombre, apellido, saludar);
console.log(
  //.lenght(tamaño)
  nombre.length,
  apellido.length,
  saludar.length,

  //palabra todo en mayusculas
  nombre.toUpperCase(),

  //palabra todo en minusculas
  apellido.toLowerCase(),

  //encontrar palabra
  lorem.includes('amet'),
  lorem.includes('Ysaac'),

  //quitar espacios que hay en el inicio o final
  lorem.trim(),

  //convierte en arreglo la cadena
  lorem.split(' ', lorem.length)
);

let usuario = 'Atzakell';
let alias = 'Developer';

//concatenacion
let presentarse = 'Hola me presento soy -> ' + usuario + ' ' + alias;
console.log(presentarse);

//Template String mas optimizado
let seg_Presentacion = `Hola me presento soy -> ${usuario} ${alias}`;
console.log(seg_Presentacion);

//ejemplo de aplicacion
let ul1 =
  '<ul> <li>Nodejs</li> <li>React</li> <li>Tabbine</li> <li>GitHub</li> </ul>';
let ul2 = `<ul>
      <li>Nodejs</li>
      <li>React</li>
      <li>Tabbine</li>
      <li>GitHub</li>
    </ul>`;
console.log(ul1);
console.log(ul2);
