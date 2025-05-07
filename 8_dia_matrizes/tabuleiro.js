
let tabuleiro = []
for (let iniciador = 0; iniciador < 8; iniciador++){
    tabuleiro[iniciador] = []
    for(let j = 0; j < 8; j++){
    tabuleiro[iniciador][j] = (iniciador + j) % 2 === 0 ? "⬜" : "⬛"
    }
}
console.table(tabuleiro)

