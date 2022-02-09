function exercicio () {
    const formulario = document.querySelector('form');
    const secao = document.querySelector('.container');
    const divResultado = secao.querySelector('.resultado');

    function configuraMensagem (imc) {
        divResultado.classList = 'resultado';
        let mensagem = `Seu IMC eh ${imc}!`;
    
        if(imc < 18.5) {
            mensagem += ` Voce esta abaixo do peso!`;
            divResultado.classList += ' vermelho';
        } else if (imc >= 18.5 && imc <= 24.9) {
            mensagem += ` Voce esta com peso normal!`;
            divResultado.classList += ' verde';
        } else if (imc >= 25 && imc <= 29.9) {
            mensagem += ` Voce esta com sobrepeso!`;
            divResultado.classList += ' amarelo';
        } else if (imc >= 30 && imc <= 34.9) {
            mensagem += ` Voce esta com obesidade de grau 1!`;
            divResultado.classList += ' amarelo';
        } else if (imc >= 35 && imc <= 40) {
            mensagem += ` Voce esta com obesidade de grau 2!`;
            divResultado.classList += ' vermelho';
        } else {
            mensagem += ` Voce esta com obesidade de grau 3!`;
            divResultado.classList += ' vermelho';
        }
    
        divResultado.innerHTML = mensagem;
    }

    function ehNumero (num) {
        if (!isNaN(num)) {
            return true;
        }
        return false;
    }

    function calculaImc (evento) {
        evento.preventDefault();

        const peso = formulario.querySelector('#peso');
        const altura = formulario.querySelector('#altura');
        
        if(ehNumero(peso.value) && ehNumero(altura.value)){
            let imc = parseFloat(peso.value)/(parseFloat(altura.value)**2);
            imc = imc.toFixed(1);
    
            configuraMensagem(imc);
                
            divResultado.style.display = 'block';
        } else {
            alert('Altura ou peso Invalido!');
        }
    }

    formulario.addEventListener('submit', calculaImc);
}

exercicio();