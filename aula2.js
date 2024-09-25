const prompt = require('prompt-sync')({ sigint: true });
// Crie um programa que declare variavel nome e idade e escreva a frase:
const nome = "Brunna Caroline"
const idade = 20

console.log("olá, meu nome é "+nome+" e tenho "+idade+"."+"\n")

//Crie um programa que  atribua variavel nome e cidade como strng:
const cidade = "Recife"
console.log("Meu nome é "+nome+",nascido em "+cidade+"\n")

//declarar duas variáveis num1 e num2
const num1 = 30
const num2 = 20
//soma 
var soma = num1 + num2
console.log(soma)  
//subtração
var subtracao = num1 - num2
console.log(subtracao)
//multiplicação 
var multiplicacao = num1 * num2 
console.log(multiplicacao)
//divisão
var divisao = (num1 / num2)
var resultado = divisao.toFixed(2)
console.log(resultado+"\n")

//cálculo da área
const base = 20
const altura = 40

const area = base*altura/2
const resultadoArea = area.toFixed(2)
console.log("A área do triângulo é "+area+"\n")

//cálculo média 
const nota1 = 9
const nota2 = 8
const nota3 = 6

const media = (nota1 + nota2 + nota3) / 3
const resultadomedia = media.toFixed(2)
console.log(resultadomedia+"\n")

//Desconto
var valorPeca = prompt("Digite o valor da peça: R$ ")
if (valorPeca >= 300){
    var desconto = valorPeca * 0.25
    var valorDescontoPeca = valorPeca - desconto
    console.log("O valor a pagar é R$ "+valorDescontoPeca+"\n")
}else{
    console.log("Valor de a pagar é R$ "+valorPeca+"\n")
}



//Imposto de renda
var salarioBruto = 1350
var aliquota = 0

if (salarioBruto <= 1700){
    aliquota = salarioBruto * 0.07
    salarioLiquido = salarioBruto - aliquota
}else{
    aliquota = salarioBruto * 0.15
    salarioLiquido = salarioBruto - aliquota
}
console.log("Meu salário com desconto é R$ "+salarioLiquido+ "\n")

//conversor de moeda
var valorDolar = 5.46
var real = prompt('Digite o valor em real: R$ ')
var Conversao= real / valorDolar

console.log("R$ "+real+" convertido pra dolar fica $ "+Conversao+"\n")

//convertendo Celsius para Fahrenheit
var celsius = 37

var Fahrenheit = (celsius*9/5) + 32

console.log("Na california faz "+Fahrenheit+"° fahrenheit que é o mesmo que "+celsius+"° celsius."+"\n")

//Calculo de IMC
let peso = 55
let alturaPessoa = 1.56
let imc = peso / (alturaPessoa * alturaPessoa)
let resultadoImc = imc.toFixed(2)

console.log("Meu imc é "+resultadoImc+"."+"\n")
