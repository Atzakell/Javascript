const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//break, rompe todo el ciclo
for (let index = 0; index < numbers.length; index++) {
  if (index === 5) {
    break;
  }
  console.log(numbers[index]);
}

//continue, salta la iteracion
console.log('Numeros impares');
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    continue;
  }
  console.log(numbers[index]);
}

console.log('Numeros pares');
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 != 0) {
    continue;
  }
  console.log(numbers[index]);
}
