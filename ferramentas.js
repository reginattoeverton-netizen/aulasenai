// 1 - Função para calcular área de um quadrado
// 2 - Função para calcular área de um retângulo
// 3 - Função para converter Celsius em Fahrenheit
// 4 - Função para formatar preço com duas cass decimais

// 5 - Todas com return e console fora da função 
  

//1
function areaQuadrado (lado){
    
    return area= lado * lado ;
}

let resultado = areaQuadrado(2);
console.log('A area do quadradoé?',areaQuadrado(2));

//2

function areaRetangulo (base,altura) {
  let area = base * altura 
  return area 
  
}
let ressultadoR = areaRetangulo(3,9);
console.log(ressultadoR);

//3

function converterTemperatura(Celsius){
    let f = (Celsius * 1.8) + 32
    return f 
}
 let Fahrenheit = converterTemperatura(30)
 console.log ('a temperatura de ahrenheit é:',Fahrenheit )

 //4
 function formatadorDeMoedas (moeda) {
    let novaMoeda = moeda.toFix(2)
    return novaMoeda;
 }

 let resultadoM = formatadorDeMoedas(25.55)
 console.log(`O resultado é ${resultadoM}`);