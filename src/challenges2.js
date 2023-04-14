// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (currentNumber < 0 || currentNumber > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let j = i + 1; j < numbers.length; j++) {
      if (currentNumber === numbers[j]) {
        if (j - i < 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
        break;
      }
    }
  }
  
  const ddd = numbers.slice(0, 2).join('');
  const firstPart = numbers.slice(2, 7).join('');
  const secondPart = numbers.slice(7).join('');
  
  return `(${ddd}) ${firstPart}-${secondPart}`;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // retorna (12) 34567-8901
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // retorna 'Array com tamanho incorreto.'
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])); // retorna 'não é possível gerar um número de telefone com esses valores'
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 5, 5, 8, 9, 0, 1])); // retorna 'não é possível gerar um número de telefone com esses valores'
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // retorna (12) 34567-8901
console.log(generatePhoneNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // retorna (00) 00000-0000
console.log(generatePhoneNumber([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9])); // retorna (98) 76540-1099

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
