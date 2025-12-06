//Criar uma função de boas vindas (sem parametro) com dois consoles e frases
// chamar a função.

function mensagemDeBoasVindas () {
    console.log ('Seja bem Vindo');
    console.log (' Sejam todos bem vindos');

}
mensagemDeBoasVindas();

//2 Criar a função com dois parametros dentro da função criar uma variavel para calcular a soma de dois numeros e um console mostrando o resultado 
//chama a função para mostrar varios resultados

function somaDeNumeros(a,b){
    let soma = a+b;
    console.log('a soma de',a,`e de `,b,'é igual a',soma);
}
somaDeNumeros(9,8)
somaDeNumeros(0,7)
somaDeNumeros(7,7)

//3 - // criar uma função para retornar o dobro de um valor. Precisa ter 1 parametro. Uma variavel dentro da função. Usar ' return' dentro da função. console.log vai fora da função.

function dobrarValor(n1){
    let dobro = n1 * 2;
    return dobro;
}
let n1 =2;
let resultado = dobrarValor(2)
console.log (`O dobro de ${n1} é igual a ${resultado}`)
