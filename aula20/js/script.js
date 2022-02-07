function meuEscopo() {
    const formulario = document.querySelector(".formulario");
    const resultado = document.querySelector(".resultado");

    /*formulario.onsubmit = function (evento){
        evento.preventDefault();
    };*/ // <- Uma forma de impedir que o formulario seja enviado

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        const pessoaNova = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        pessoas.push(pessoaNova);
        console.log(pessoas);

        resultado.innerHTML += `${pessoas[(pessoas.length)-1].nome} `; // pode ser exibido a partir de 'pessoaNova'
        resultado.innerHTML += `${pessoas[(pessoas.length)-1].sobrenome} `;
        resultado.innerHTML += `${pessoas[(pessoas.length)-1].peso} `;
        resultado.innerHTML += `${pessoas[(pessoas.length)-1].altura}<br>`;
        //console.log(nome.value, sobrenome.value, peso.value, altura.value);
        //console.log("Form nao foi enviado!");
    }

    formulario.addEventListener('submit', recebeEventoForm); // chama a funcao do segundo parametro quando ocorrer um 'submit'
}

meuEscopo();