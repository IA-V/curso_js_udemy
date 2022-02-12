let data = new Date(); // retorna a data e hora atual do dia atual
              // ^ construtor do Objeto Date
console.log(data.toString());

data = new Date(0) // <- 01/01/1970 -> Timestamp unix ou epoca unica
// para obter valores anteriores ao valor acima, passa-se um argumento negativo
// para obter valores posteriores ao valor acima, passa-se um argumento positivo
console.log(data.toString()); // 'GMT-0300' indica um decrescimo de 03 horas devido ao fuso horario de Brasilia

const tresHoras = 60*60 * 3 * 1000;
               // 1 hora|3x|em milissegundos
data = new Date(0 + tresHoras);
console.log(data.toString());

data = new Date(2019, 3, 20, 15, 14, 27, 500);
// ano | mes | dia | hora | min | segundos | milesimos de segundo
// qualquer valor omitido sera definido como '0' (zero)
// o mes '3' eh Abril porque os meses sao indexados partindo do zero
console.log(data.toString());

data = new Date('2019-03-19');
// A string pode ter o horario ou nao, separado por um espaco ou pela letra 'T'
console.log(data.toString());

data = new Date('2019-03-19 20:35:47');
console.log(data.toString());
data = new Date('2019-03-19T20:35:47');
console.log(data.toString());

console.log(`Dia`, data.getDate()); // 'getDate()' retorna o dia do Mes
console.log(`Mes`, data.getMonth()); // comeca do zero
console.log(`Ano`, data.getFullYear());
console.log(`Hora`, data.getHours());
console.log(`Minutos`, data.getMinutes());
console.log(`Segundos`, data.getSeconds());
console.log(`Milissegundos`, data.getMilliseconds());
console.log(`Dia da semana`, data.getDay()); // 'getDay()' retorna o dia da Semana (0 - Domingo; 6 - Sabado)

console.log(Date.now()); // 'now()' retorna o tempo decorrido do marco zero (01/01/1970) ate o momento de sua chamada em Milissegundos
const ms = Date.now();
console.log(new Date(ms)); // retorna a data atual kk

// Parei em 19:42

function zeroAEsquerda(num) {
    return num < 10 ? `0${num}` : num;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data2 = new Date();
const dataBrasil = formataData(data2);

console.log(dataBrasil);