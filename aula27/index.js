const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP');
} else {
    console.log('Usuario comum');
}

// Operador Ternario -> _condicao_ ? retorno_caso_true : retorno_caso_false
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario comum';
console.log(nivelUsuario);