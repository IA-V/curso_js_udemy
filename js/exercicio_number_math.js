        let num = prompt("Digite um numero qualquer");
        num = Number.parseFloat(num); // Ou Number(num)
        const numeroTitulo = document.getElementById('numero-titulo');
        const texto = document.getElementById('texto');

        numeroTitulo.innerHTML = `${num}<br>`;
        texto.innerHTML += `Raiz quadrada = ${num**0.5} <br>`;
        texto.innerHTML += `${num} eh inteiro? ${Number.isInteger(num)}<br>`;
        texto.innerHTML += `Eh NaN? ${Number.isNaN(num)}<br>`;
        texto.innerHTML += `Arredondado para baixo = ${Math.floor(num)}<br>`;
        texto.innerHTML += `Arredondado para cima = ${Math.ceil(num)}<br>`;
        texto.innerHTML += `Com duas casas decimais = ${num.toFixed(2)}<br>`;