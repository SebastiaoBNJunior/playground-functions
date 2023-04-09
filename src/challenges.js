// Desafio 1 - Crie a função compareTrue

function compareTrue(a, b) {
  return a && b;
}
console.log(compareTrue(true, true));

// Desafio 2 - Crie a função splitSentence

function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe')); // ['go', 'Trybe']
console.log(splitSentence('vamo que vamo')); // ['vamo', 'que', 'vamo']
console.log(splitSentence('foguete')); // ['foguete']


// Desafio 3 - Crie a função concatName

function concatName(list){
  return list[list.length -1]+', '+list[0]; 
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties){
  return ((wins*3)+ties);
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount

function highestCount(repetitions) {
  if (repetitions.length === 0) {
    return 0;
  }
  let max_num = repetitions[0];
  let count = 1;
  for (let i = 1; i < repetitions.length; i++) {
    if (repetitions[i] > max_num) {
      max_num = repetitions[i];
      count = 1;
    } else if (repetitions[i] === max_num) {
      count++;
    }
  }
  return count;
}
console.log(highestCount(['9', '1', '2', '3', '9', '5', '7']));
console.log(highestCount(['0', '4', '4', '4', '9', '2', '1']));
console.log(highestCount(['0', '0', '0']));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas



// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
