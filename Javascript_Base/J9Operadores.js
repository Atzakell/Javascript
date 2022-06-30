//Artimeticos

let a = (5+(5-10)*3)/2;
let modulo=5%2;         //modulo '%' devuelve residuo
console.log(a);
console.log(modulo);

//Relacionales

console.log(8>9);
console.log(9>8);
console.log(8>=9);
console.log(9>=8);
console.log(5<5);
console.log(7<=7); //true 0w0

//'=' asignacion de variable
console.log(1==1);
console.log(1=='1'); // '==' compara valores
console.log(undefined==null);
console.log(1==='1'); // '===' compara valores y tipo de dato
console.log(undefined===null);

//Imcremento

let i=1;
i+=3;   //tambien puede ser '*', '-', '/', etc...
i++;    //operador unario
console.log(i);

let lilNumber=1;
console.log(lilNumber++) //imprime 1, internamente suma la unidad
console.log(++lilNumber) //imprime 2 ya que se habia sumado 1 antes
                         //y nuevamente se suma denuevo en la consola '4'
//Logicos
console.log(!true); //'!' Not convierte a falso y viceversa
console.log(!false);
console.log(9===9 ||'9'===9); // '||' basta que solouna se cumpla
console.log(9===9 &&'9'===9); // '&&' necesariamente ambas deben cumplir



