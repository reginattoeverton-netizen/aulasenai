// tirar espaços (inicio e fim ) e deixar tudo em maiusculo e mostrar quantidade de letras
let nome = '     Everton Reginatto    ';
let nomeformatado = nome.trim().toUpperCase();
console.log(nomeformatado + ' tem ' + nomeformatado.replace(/ /g,'').length + 'letras')

// escrever uma frase e deixa-la toda em minusculo

let frase = 'ESTOU DE BARRIGA CHEIA'
let fraseMinuscula = frase.toLowerCase();
console.log(fraseMinuscula);


let compras = ['pão','açucar','leite','ovos','cafe']
console.log(compras)
compras.push('coco')
console.log (compras)
compras.shift()
console.log(compras)
let temLeite = compras.includes('leite')
console.log(temLeite)

console.log(compras.length)