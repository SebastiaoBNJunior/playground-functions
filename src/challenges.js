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

  function calcTriangleArea (base, height){ // Função que calcula a área do triangulo
    return (base * height) / 2;
  }
  function calcRectangleArea (base, height){ // Função que calcula a área do retangulo
    return (base * height);
  }
  function calcAllAreas (base, height, form){ // Função que calcula a área e identifica a forma geométrica
    if (form === 'triangulo'){
        const area = calcTriangleArea(base, height);
        return 'O valor da área do triangulo é de: ' +area;
    } else if (form === 'retangulo'){
        const area = calcRectangleArea(base, height);
        return 'O valor da área do retangulo é de: ' +area;
    } else {
        return 'Não foi possível fazer o calculo, insira uma forma geométrica válida.'; 
    }
  } 

console.log(calcTriangleArea(10, 50)); // 250
console.log(calcRectangleArea(10, 50)); // 500
console.log(calcAllAreas(10, 50, 'triangulo')); // "O valor da área do triângulo é de: 250"
console.log(calcAllAreas(10, 50, 'retangulo')); // "O valor da área do retângulo é de: 500"
console.log(calcAllAreas(10, 50, 'quadrado')); // "Não foi possível fazer o cálculo, insira uma forma geométrica válida."

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
console.log(catAndMouse(1,3,2));
console.log(catAndMouse(1,6,12));
console.log(catAndMouse(1,2,2));

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(){

}

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
