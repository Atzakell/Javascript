let a=new String('Hola');
console.log(a);

//declaraciones
const b={}
console.log(b);

const c=new Object();
console.log(c);;


//dentro de un objetos sus variables se denominaran atributos
//dentro de un objeto sus funciones se denominan metodos
const LilAtza={
  nombre: 'Lil-Ysaac',
  cargo: 'Developer Dreamer',
  edad:21,
  dominios: ['Blender', 'Photoshop', 'Unreal Engine 5'],
  soltero: true,
  contacto:{
    email:'ysaac356abaddon@gmail.com',
    twitter: '@ysaac23',
    celular: '991197158'
  },
  saludar: function(){
    console.log(`Hola :D`);
  },
  presentarse: function(){
  console.log(`Me llamo ${this.nombre} soy ${this.cargo} y tengo ${this.edad}`);
  }
}

//invokar el objeto
//console.log(LilAtza);
console.log(LilAtza.nombre);
console.log(LilAtza.cargo);
console.log(LilAtza.edad);
console.log(LilAtza.dominios);
console.log(LilAtza.soltero);
console.log(LilAtza.dominios[1]);
console.log(LilAtza.contacto.email);
LilAtza.saludar();
LilAtza.presentarse();

//Muestra los atributos y metodos del objeto
console.log(Object.keys(LilAtza));
//Muestra los valores de los abributos y metodos
console.log(Object.values(LilAtza));
//Comprueba si el atributo o metodo existe dentro del objeto
console.log(LilAtza.hasOwnProperty('dominios'));
console.log(LilAtza.hasOwnProperty('identidad'));