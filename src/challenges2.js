// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const repeatedNumbers = new Set(numbers.filter((num) => num < 0 || num > 9 || numbers.filter((n) => n === num).length >= 3));
  if (repeatedNumbers.size > 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const ddd = numbers.slice(0, 2).join('');
  const firstPart = numbers.slice(2, 7).join('');
  const secondPart = numbers.slice(7).join('');

  return `(${ddd}) ${firstPart}-${secondPart}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // (12) 34567-8901
console.log(generatePhoneNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // 00000-0000
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // 'Array com tamanho incorreto.'
console.log(generatePhoneNumber([-1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); //  'não é possível gerar um número de telefone com esses valores'
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9])); // 'não é possível gerar um número de telefone com esses valores'


// Desafio 12 -  Crie a função triangleCheck

function triangleCheck(lineA, lineB, lineC) {
  // Verifica se a medida de qualquer um dos lados é menor que a soma das medidas dos outros dois lados
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    // Retorna true se a medida de um dos lados é menor que a soma das medidas dos outros dois lados e maior que o valor absoluto da diferença entre os outros dois lados
    return lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineA - lineC) || lineC > Math.abs(lineA - lineB);
  }
  // Retorna false caso contrário
  return false;
}

console.log(triangleCheck(10, 14, 8)); // true
console.log(triangleCheck(1, 2, 4)); // false
console.log(triangleCheck(10, 10, 25)); // false
console.log(triangleCheck(10, 6, 4)); // false
console.log(triangleCheck(10, 6, 8)); // true


// Desafio 13 - Crie a função hydrate

function hydrate(string) {
  const regex = /\d+/g;
  const matches = string.match(regex);
  const total = matches.reduce((acc, match) => acc + parseInt(match), 0);
  
  return `${total} ${total === 1 ? 'copo' : 'copos'} de água`;
}
console.log(hydrate('1 cerveja')); // '1 copo de água'
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')); // '7 copos de água'


/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
