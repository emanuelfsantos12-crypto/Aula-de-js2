//variaveis
//tipos de variaveis 
//comando de saida de dado 
console.log("hello world")
alert("Olá mundo");
//tyeof() : função para saber o tipo de dados 
//aritimetia: soma, divisão, subtração, multiplicação.
//string, number,booleam

//comando de entrada de dados 
//let nome = prompt("digite seu nome");
//alert("seu nome é " +nome);
//let sobreNome = prompt("Digita seu sobre nome");
//let nomeCompleto = nome +" "+  sobreNome;
//alert("Seu nome é " + nomeCompleto)

let num1 = Number(prompt("Digite a1 nota:")); 
let num2 = Number(prompt("Digite a2 nota:"));
let num3 = Number(prompt("Digite a3 nota"));
let num4 = Number(prompt("Digite a4 nota")); 

let resultado = (num1 + num2 + num3 + num4)/4
alert("Sua media é" + resultado)
if (media >=7){
    alert("Aprovado")
}
else {
    alert("Reprovado")
}
