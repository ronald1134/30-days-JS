console.log("Vamos ver qual número é maior entre dois valores da função")
function maiorNumero (n1, n2){
    return n1 > n2 ? n1 :n2
}
console.log(maiorNumero(5,10))

//exemplo com três valores ternários ⬇️

function maiorDeTres(n1, n2, n3){
    return n1 > n2
    ?(n1 > n3? n1 : n3)
    :(n2 > n3? n2 : n3)
    
}
console.log('O valor maior que temos é:', maiorDeTres(5,10,50))