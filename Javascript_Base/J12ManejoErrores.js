//usado para APIS

try {
  console.log('En el Try se agrega el codigo al evaluar');
  varSinAsignacion;
  console.log('Segundo mensaje de try');
} catch (error) {
  console.log('Catch, captura cualquier error surgido o lanzado en el try');
  console.log(error);
} finally {
  console.log(
    'El bloque finally se ejecutará siempre al final de un bloque try.catch'
  );
}

try {
  let numero = 'a';
  if (isNaN(numero)) {
    //isNaN devuelve true o false si var es un numero
    throw new Error('El caracter ingresado no es un numero ');
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error ${error}`);
}
