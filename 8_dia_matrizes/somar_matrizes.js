function somaMatriz(matriz) {
    let soma = 0

    for (let linha of matriz) {
        for (let elemento of linha) {
            soma += elemento
        }
    }

    return soma
}
const minhaMatriz = [
    [10, 2, 16],
    [20, 0, 10]
];

const resultado = somaMatriz(minhaMatriz)
console.log(resultado)