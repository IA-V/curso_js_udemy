alert('Minha mensagem do alert'); // atalho para "window.alert()"
// window eh um objeto da pagina html

let confirma = confirm("Vai confirmar ou nem?"); // atalho para "window.confirm()"

let textoDigitado = prompt('Digita alguma coisa ai'); // atalho para "window.prompt()"

console.log(confirma, typeof confirma);
console.log(textoDigitado, typeof textoDigitado);

let num1 = prompt("Digite um numero");
let num2 = prompt("Digite outro numero");

let resultado = Number(num1) + Number(num2);

alert(`O resultado da soma dos valores inseridos eh ${resultado}`);