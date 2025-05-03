let musicas = ['🎵Pocket Rocket', '🎵Pink + White', '🎵Ninguém tá puro']
musicas.splice(2, 2, '🎵Disposição e atividade')

console.log('🎶 Lista de Músicas Atualizada 🎶');
console.log('===============================');

musicas.forEach((musica, index) => {
    console.log(`${index + 1}. ${musica}`);
});

console.log('===============================');