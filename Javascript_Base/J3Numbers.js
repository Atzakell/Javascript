let a=2;
let b=new Number(4);
let c=8.43;
let d='7.1';

//imprime valores
console.log(a,b);
//indica la cantidad de decimales
console.log(c.toFixed(1)); 
console.log(c.toFixed(5));
//imprime la parte numerica
console.log(parseInt(c));
console.log(parseFloat(c));
//imprime el tipo de dato
console.log(typeof c, typeof d);
//Si sumas con string se concatena por defecto
console.log(a+b);
console.log(c+d);//concatena por defecto
console.log(c+parseInt(d));//forma de sumar
console.log(c+parseFloat(d));
console.log(c+Number.parseFloat(d));//mismo resultado
