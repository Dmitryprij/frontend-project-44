export const magicNumbers = (min = 1, max = 100) => {
    const minimal = Math.ceil(min);
    const maximal = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (maximal - minimal + 1)) + minimal;
    return randomNumber;
  };

  export const calculator = (x, y, oper) => {
    let result = 0;
    if (oper === '+') result = x + y;
    if (oper === '-') result = x - y;
    if (oper === '*') result = x * y;
    return result;
  };

  export const getOperator = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    const operator = arr[index];
    return operator;
  };

  export const getDivisor = (a, b) => {
    let x = a;
    let y = b;
    while (x !== y) {
      if (x > y) {
        x -= y;
      } else {
        y -= x;
      }
    }
    return x;
  };

  export const obchii = (a, b) => {
    let result = ' ';
    const length = magicNumbers(5, 10);
    const diserd = magicNumbers(1, length - 2);
    for (let i = 0; i < length; i += 1) {
      const form = (a + (b * i));
      result += (i !== diserd) ? `${form}` : '.. ';
    }
    return result;
  };
  
  export const progression = (a, b) => {
    let result = '';
    const length = magicNumbers(6, 10);
    const elected = magicNumbers(1, length - 2);
    for (let i = 0; i < length; i += 1) {
      const form = (a + (b * i));
      result += (i !== elected) ? `${form} ` : '.. ';
    }
    return result;
  };

  export const gitProgress = (str) => {
    const sort = str.split(' ');
    const indexNum = sort.indexOf('..');
    const oneNumber = parseInt(sort[indexNum - 1], 10);
    const twoNumber = parseInt(sort[indexNum + 1], 10);
    const solution = (oneNumber + twoNumber) / 2;
    return `${solution}`;
  };

  export const gitPrime = (num) => {
    const prim = [2, 3, 5, 7, 11, 13, 17,
      19, 23, 29, 31, 37, 41, 43, 53, 59,
      61, 67, 71, 73, 79, 83, 89, 97, 101,
      103, 107, 109, 113, 137, 131, 139,
      149, 151, 157, 163, 167, 173, 179, 
      181, 191, 197, 199];
    return (prim.includes(num)) ? 'yes' : 'no';
  };