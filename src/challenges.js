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

function concatName(list) {
  return list[list.length - 1] + ', ' + list[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount

function highestCount(repetitions) {
  if (repetitions.length === 0) {
    return 0;
  }
  let maxNum = repetitions[0];
  let count = 1;
  for (let i = 1; i < repetitions.length; i++) {
    if (repetitions[i] > maxNum) {
      maxNum = repetitions[i];
      count = 1;
    } else if (repetitions[i] === maxNum) {
      count++;
    }
  }
  return count;
}
console.log(highestCount(['9', '1', '2', '3', '9', '5', '7']));
console.log(highestCount(['0', '4', '4', '4', '9', '2', '1']));
console.log(highestCount(['0', '0', '0']));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return 'base e altura devem ser números positivos';
  }
  let area;
  area = (base * height) / 2;
  return area;
}
function calcRectangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return 'base e altura devem ser números positivos';
  }
  let area;
  area = base * height;
  return area;
}
function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    const triangleArea = calcTriangleArea(base, height);
    return `O valor da área do triângulo é de: ${triangleArea}`;
  }
  if (form === 'retângulo') {
    const rectangleArea = calcRectangleArea(base, height);
    return `O valor da área do retângulo é de: ${rectangleArea}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  const distance1 = Math.abs(mouse - cat1);
  const distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance2 < distance1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 2, 2));

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(fizzNumbers) {
  const result = [];
  for (let i = 0; i < fizzNumbers.length; i++) {
    if (fizzNumbers[i] % 3 === 0 && fizzNumbers[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (fizzNumbers[i] % 5 === 0) {
      result.push('buzz');
    } else if (fizzNumbers[i] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9 - Crie a função encode e a função decode

function encode(str) {
  return str.replace(/[aeiou]/g, match => ({ a: 1, e: 2, i: 3, o: 4, u: 5 }[match]));
}

function decode(str) {
  return str.replace(/[1-5]/g, match => ({ 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' }[match]));
}
console.log(encode('hello')); // h2ll4
console.log(encode('How are you today?')); // H4w 1r2 y45 t4d1y?
console.log(encode('This is an encoding test.')); // Th3s 3s 1n 2nc4d3ng t2st.
console.log(encode('go Trybe!')); // g4 Tryb2!

console.log(decode('h2ll4')); // hello
console.log(decode('H4w 1r2 y45 t4d1y?')); // How are you today?
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.')); // This is an encoding test.
console.log(decode('g4 Tryb2!')); // go Trybe!

// Desafio 10 - Crie a função techList

function techList(techs, name) {
  if (!techs || techs.length === 0) return [];

  return techs
    .sort()
    .map((tech) => ({ tech, name }));
}
// Teste 1 - Deve retornar uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias
const result1 = techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');
const expected1 = [
  { tech: 'CSS', name: 'Lucas' },
  { tech: 'HTML', name: 'Lucas' },
  { tech: 'JavaScript', name: 'Lucas' },
  { tech: 'Jest', name: 'Lucas' },
  { tech: 'React', name: 'Lucas' },
];
console.log(result1); // Deve imprimir o array de objetos esperado

// Teste 2 - Deve retornar um array vazio quando a lista de tecnologias estiver vazia
const result2 = techList([], 'Lucas');
const expected2 = [];
console.log(result2); // Deve imprimir um array vazio

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
