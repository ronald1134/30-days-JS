function CalcularMedia(n1,n2,n3) {
    let media = (n1 + n2 + n3 ) / 3
    return media;
}
let resultado = CalcularMedia (30, 10, 95)

console.log("=============================================");
console.log("|           Resultado da Média              |");
console.log("=============================================");
//console.log(`| Valores informados: ${30}, ${10}, ${95}  `);
console.log(`| Média calculada: ${resultado.toFixed(2)}   `);
console.log("=============================================");