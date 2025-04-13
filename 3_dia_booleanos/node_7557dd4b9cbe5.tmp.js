const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual foi sua nota? ", function(nota) {
  console.log(`Você tirou ${nota}. Tá mandando bem, viu? 😍`);
  rl.close();
});
