const nomes = ['Ronald', 'Rodrigo', 'Raquel', 'Luanda', 'Ademir']
console.log('os nomes que contém na nossa lista são:\n')

nomes.forEach((nome, index) => {
    console.log(`🔹 ${index + 1}. ${nome.toUpperCase()}`);
});
