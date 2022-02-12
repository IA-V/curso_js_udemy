const data = new Date();
const container = document.querySelector('.container');


function getDiaSemanaTexto (diaSemana) {
    switch (diaSemana) {
        case 0:
            return `Domingo`;
        case 1:
            return `Segunda-Feira`;
        case 2:
            return `Terça-Feira`;
        case 3:
            return `Quarta-Feira`;
        case 4:
            return `Quinta-Feira`;
        case 5:
            return `Sexta-Feira`;
        case 6:
            return `Sabado`;
        default:
            return ``;
    }
}

function getMesTexto (mes) {
    /**
     * eh possivel resolver este problema criando um array 
     * com os nomes dos meses e o retornando com a variavel
     * 'mes'como indice, ja que Date().getMonth() retorna um
     * valor numerico baseado em zero
     */
    switch (mes) {
        case 0:
            return `Janeiro`;
        case 1:
            return `Fevereiro`;
        case 2:
            return `Março`;
        case 3:
            return `Abril`;
        case 4:
            return `Maio`;
        case 5:
            return `Junho`;
        case 6:
            return `Julho`;
        case 7:
            return `Agosto`;
        case 8:
            return `Setembro`;
        case 9:
            return `Outubro`;
        case 10:
            return `Novembro`;
        case 11:
            return `Dezembro`;
        default:
            return ``;
    }
}

function zeroAEsquerda(num) {
    return num < 10 ? `0${num}` : num;
}

const diaDaSemana = getDiaSemanaTexto(data.getDay());
const diaDoMes = data.getDate();
const ano = data.getFullYear();
const hora = zeroAEsquerda(data.getHours());
const minuto = zeroAEsquerda(data.getMinutes());
const mes = getMesTexto(data.getMonth());

/**
 * Outra forma de fazer TUDO que foi feito acima eh usando
 * o metodo 'toLocaleDateString' do objeto Date
 * Observe
 */

const elementoP = document.createElement('p');
//elementoP.innerHTML = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}<br>${hora}:${minuto}`;
const opcoes = {
    dateStyle: 'full'
    //timeStyle: 'short' // <- ta dando ruim n sei o pq kk
}; // objeto de opcoes
elementoP.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
container.appendChild(elementoP);
