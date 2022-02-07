/**
 * FALSY -> Valores nao booleanos avaliados com 'false'
 * O proprio 'false'
 * 0
 * Strings vazias -> '', "" e ``
 * null e undefined
 * NaN
 * 
 * Qualquer valor diferente dos citados acima sao avaliados com 'true'
 */

console.log("a" && 'b'); // retorna o ultimo valor verdadeiro
console.log("a" && NaN && 'b'); // retorna o primeiro valor avaliado como 'false' e nao verifica o resto dos valores -> avaliacao de curto-circuito

console.log(0 || false || null || 'aha' || true); // retorna o primeiro valor verdadeiro e nao verifica o resto dos valores -> avaliacao de curto-circuito