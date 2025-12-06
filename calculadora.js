// Inserir um console.log para ser o 'titulo'
// criar 3 variaveis(nome,anoNascimento,anoAtual)
// criar uma função sem paramentro que calcula idade, usando return
//chamar a função e mostrar o resultado
// -----------

// criar uma função com parametros para fazer o mesmo calculo de idade de questão acima
//------------

//criar uma função com parametro e return para mostrar a quantidade de Dias vividos
//-------------

//criar uma função para verificar se é maior de idade (com if e else)


let nome = 'Everton'
let anoNascimento = '1994'
let anoAtual = '2025'

function calcularIdade() {
 return anoAtual - anoNascimento

}

console.log(`A sua idade ${nome} é de ${calcularIdade(31)}`)


function calcularIdade (anoNascimento,anoAtual){
return anoAtual- anoNascimento
}

console.log (`Sua idade é de ${calcularIdade(1994,2025)} anos`);

function diasVividos(anoAtual, anoNascimento){
    return (anoAtual - anoNascimento) * 365
}
 console.log ('Everton tem:' + diasVividos(2025,1994), 'dias vividos')

 function maiorIdade(anoAtual,anoNascimento) {
    let calculo = anoAtual - anoNascimento
    if (calculo >= 18){
        return ('voce é maior de idade')
    } else {('voce nao é maior de idade')}
 }
console.log(maiorIdade(2025,1994))




// -------------------

let senhaCorreta = '1234';
let senhaDigitada = '1234';

if (senhaCorreta === senhaDigitada){
    console.log ('Acesso permitido')
}else {console.log('Senha incorreta')
}


// criar um programa que valide se a pessoa terá desconto na entrada do cinema.
// criar 3 variaveis (idade,estudante,preçoIngresso) fazer condicao para dar 50% de desconto caso a condicao 'estudante' seja true

let idade = 31;
let estudante = false
let preçoIngresso = 28.00;
 function descontoIngresso (){
    if (estudante === true){
        return console.log (`Havera um desconto de 50% no seu ingresso, o preço será R$ ${(preçoIngresso/2).toFixed(2)}`)
    }else if (idade < 18 || idade >60){(`Havera um desconto de 50% no seu ingresso, o preço será R$ ${(preçoIngresso/2).toFixed(2)}`)}
    else {
         return console.log (`Não será aplicado o desconto do seu ingresso, o preço será R$ ${preçoIngresso}`)}
 }
 console.log(descontoIngresso());



 //--------
 // calculadora de Imc



 let peso = 75;
 let altura = 1.76
 let imc = peso / (altura * altura);

 console.log ('Seu IMC é:' + imc.toFixed(2));

 if (imc < 18.5) {
    console.log('Classificaçao abaixo do peso')
 } else if (imc >= 18.5 && imc <= 24.9){
    console.log('Classificaçao sobrepeso')
 }else {
    console.log('classificacao obesidade')
 }

