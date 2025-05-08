function contagemRegressiva(numero) {
    if (numero === 0) {
        console.log("Fim! 💣💥")

        return
    }
    console.log(numero)
    contagemRegressiva(numero - 1)
}
contagemRegressiva(5)