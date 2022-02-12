function getDiaSemanaTexto (diaSemana) {
    switch (diaSemana) {
        case 0:
            return `Domingo`;
        case 1:
            return `Segunda`;
        case 2:
            return `Terca`;
        case 3:
            return `Quarta`;
        case 4:
            return `Quinta`;
        case 5:
            return `Sexta`;
        case 6:
            return `Sabado`;
        default:
            return ``;
    }
}

const data = new Date('1987-04-21T00:00:00');
const diaSemana = data.getDay();

/*if (diaSemana === 0) {
    diaSemanaTexto = `Domingo`;
} else if (diaSemana === 1) {
    diaSemanaTexto = `Segunda`;
} else if (diaSemana == 2) {
    diaSemanaTexto = `Terca`;
} else if (diaSemana === 3) {
    diaSemanaTexto = `Quarta`;
} else if (diaSemana === 4) {
    diaSemanaTexto = `Quinta`;
} else if (diaSemana === 5) {
    diaSemanaTexto = `Sexta`;
} else {
    diaSemanaTexto = `Sabado`;
}*/

console.log(diaSemana, getDiaSemanaTexto(diaSemana));