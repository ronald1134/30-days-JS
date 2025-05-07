function matriz3x3() {
    let matriz = []
    let numero = 1

    for (let linha = 0; linha < 3; linha++) {
        let nova_linha = []

        for (let coluna = 0; coluna < 3; coluna++) {
            nova_linha.push(numero)
            numero++
        }
        matriz.push(nova_linha)
    }
    return matriz
}
console.table(matriz3x3());
