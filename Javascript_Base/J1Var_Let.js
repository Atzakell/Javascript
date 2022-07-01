var hello = 'Hello World';
let hola = 'Hola mundo';
console.log(hello);
console.log(hola);
//console.log(window);muestra los elementos de toda la ventana
//console.log(window.hello);
//console.log(window.hola);

//MALA PRACTICA
console.log('*****************variable_Var***************');
var unreal = 'metahuman';
console.log('Variable Unreal Engine antes de bloque: ', unreal);
{
  var unreal = 'blueprints';
  console.log('Variable Unreal Engine en el de bloque:', unreal);
}
console.log('Variable Unreal Engine despues de bloque', unreal);

//PRACTICA CORRECTA
console.log('*****************variable_Let***************');
let unreal5 = 'metahuman';
console.log('Variable Unreal Engine antes de bloque: ', unreal5);
{
  let unreal5 = 'blueprints';
  console.log('Variable Unreal Engine en el de bloque:', unreal5);
}
console.log('Variable Unreal Engine despues de bloque', unreal5);
