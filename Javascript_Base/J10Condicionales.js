//formas de estructurar condicionales
let edad = 21;

if (edad > 20) {
  console.log('Eres mayor de edad :D');
} else {
  console.log('Aun no eres mayor de edad D:');
}

if (edad >= 21) {
  console.log('Eres mayor de edad :D');
} else {
  console.log('Aun no eres mayor de edad D:');
}

if (edad < 21) {
  console.log('Aun no eres mayor de edad D:');
} else {
  console.log('Eres mayor de edad :D');
}

if (edad <= 20) {
  console.log('Aun no eres mayor de edad D:');
} else {
  console.log('Eres mayor de edad :D');
}

/*
Muy Temprano ZzZzZ 00:00 AM - 5:00 AM
Buenos Dias 6:00 AM - 12:00 AM
Buenas Tardes 13:00 PM - 18:00 PM
Buenas Noches 17:00 PM - 24:00 AM
*/

let hora = 9;

if (hora >= 0 && hora <= 5) {
  console.log('Aun es muy temprano ZzZzz');
} else if (hora >= 6 && hora <= 12) {
  console.log('Buenos dias mi Kingston');
} else if (hora >= 13 && hora <= 18) {
  console.log('Buenas tarde mi Adokingstone');
} else if (hora >= 17 && hora <= 24) {
  console.log('Buenas noche perr0 blanc0');
} else {
  console.log('Esa no es una hora Papulince');
}

//Operador ternario (simplificacion)
console.log('Operador Ternario');
let Mayor = edad >= 21 ? 'Eres Mayor' : 'Eres menor';
console.log(Mayor);

//casos especificos 'switch'

let dia = 2;
switch (dia) {
  case 1:
    console.log('Lunes de Apertura en la chamba papi');
    break;
  case 2:
    console.log('Martes con Fausto, era chumacero tsumare');
    break;
  case 3:
    console.log('Miercoles de Avedaño, ah no era prudencio');
    break;
  case 4:
    console.log('Jueves de Arredondog0d');
    break;
  case 5:
    console.log('Viernes de Prudencio F parcial');
    break;
  case 6:
    console.log('Sabado de cierre, aios fiestazzz');
    break;
  case 7:
    console.log('Domingo de cierre tambien pork si');
    break;
  default:
    console.log('Este dia no existe papi 0w0');
    break;
}
