function SomarNumeros (array){
    let soma = 0
    for(i = 0; i <array.length; i++){
        soma += array[i]
    }
    return soma
}
const compras = [15, 80, 6, 4, 25]
console.log("Total gastos R$", SomarNumeros(compras))