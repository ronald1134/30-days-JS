function calcularFatorial(numero) {
    if (numero < 0) {
        return "O valor não pode ser número negativo ❌"
    } else if (numero === 0 || numero === 1) {
        return 1
    } else {
        return numero * calcularFatorial(numero - 1)
    }
}
const numero = 6;
const resultado = calcularFatorial(numero);

console.log("════════════════════════════════");
console.log("📘 Cálculo de Fatorial");
console.log("────────────────────────────────");
console.log(`🔢 Número informado: ${numero}`);
console.log(`🧮 Resultado do fatorial: ${resultado}`);
console.log("════════════════════════════════");