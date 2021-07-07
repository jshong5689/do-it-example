function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

function multiplyX(x) {
  return function (a) {
    return multiply(a, x);
  };
}

//multiplyX 화살표 함수 표현식
/*
const multiplyX = x => a => multiply(a, x);
*/

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3);
const result2 = multiplyFour(4);

const result3 = multiplyX(3)(3);
const result4 = multiplyX(4)(3);

const equation = (a, b, c) => (x) => x * a * b + c;
/*
function equation(a,b,c){
    return function(x){
        return ((x*a)*b)+c;
    }
}
*/
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);

const multiply2 = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX2 = (x) => (a) => multiply2(a, 2);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTwo2 = multiplyX2(2);
const multiplyThree2 = multiplyX2(3);
const formula2 = (x) => addFour(multiplyThree2(multiplyTwo2(x)));
