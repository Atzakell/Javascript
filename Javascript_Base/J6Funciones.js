
//declarar funcion
function estoEsUnaFuncion(){
    console.log('Unreal Engine');
    console.log('Blender');
    console.log('Maya');
}

function funcionRetornaValor(){
    console.log('MetHuman');
    console.log('Figma');
    //al momento de leer el return todo lo que siga despue ses ignorado
    return 'la funcion devuelve una cadena de texto';
}

//llamar funcion
estoEsUnaFuncion();
let valorDeFuncion = funcionRetornaValor();
console.log(valorDeFuncion);

function saludar(nombre, edad, work){
    console.log(`Hola mi nombre es : ${nombre} y tengo ${edad} años, estudio ${work}`);
}

saludar('Ysaac', 21, 'Ingenieria de Software');


//Funcion decalara y Funcion Expresada
//antes de la delcaracion
funcionDeclarada();

function funcionDeclarada(){
    console.log('Esta funcion esta declarada, puedes invocarla siempre');
}

//despues de la declaracion
funcionDeclarada();

//lo que se acostumbra es usar const para funciones
//funcion anonima: no tiene nombre y esta asignada a una variable const
const funcionExpresada =function(){
  console.log('Si se invoca antes de definirse javascript devolverá -> Cannot access funcionExpresada before initialization');
};

funcionExpresada();

