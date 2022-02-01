let varA = 'A';
let varB = 'B';
let varC = 'C';

let aux = varA;

varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);

// JS permite fazer o seguinte:

varA = 'A';
varB = 'B';
varC = 'C';

[varA, varB, varC] = [varB, varC, varA]; // Similar ao Python
console.log(varA, varB, varC);