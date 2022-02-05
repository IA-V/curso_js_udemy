function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome, // como o atributo e o parametro tem o mesmo identificador, pode-se colocar apenas 'nome'
        sobrenome: sobrenome, // mesmo caso da linha 3
        idade: idade // mesmo caso da linha 4
    }; // objeto literal
}

/*const pessoa1 = {
    nome: 'Iago', // atributo
    sobrenome: 'Victor',
    idade: 21
}; // um objeto eh criado com chaves, diferentemente de um array, que eh criado com colchetes
*/
const pessoa1 = criaPessoa('Iago', 'Victor', 21);
console.log(pessoa1.nome);

// objetos podem ter funcoes, chamadas de metodos
const pessoa2 = {
    nome: 'Irineu',
    sobrenome: 'Vc nao sabe nem eu',
    idade: 25, // eh necessario colocar virgula antes da fucao, como se fosse outro atributo

    fala() {
        console.log(`${this.nome} ${this.sobrenome} falou 'Catapimbas'!`);
        console.log(`Minha idade atual eh ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();