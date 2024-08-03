/* OPERADORES ARITIMÉTICOS */

// (+) SOMA
let valor01 = 15 + 15;
console.log(`15 + 15 = ${valor01}`);

valor01++ // pos incremento de +1
console.log(valor01);

++valor01 // pre incremento de +1
console.log(valor01);  

valor01 += 8 ;// valor01 = valor01 + 8
console.log(valor01);

// (+) CONCATENAÇÃO
const valor02 = '15' + '15';
console.log(`'15' + '15' = ${valor02}`);

// (-) SUBTRAÇÃO
let valor03 = 45 - 15.5;
console.log(`45 - 15.5 = ${valor03}`);

valor03--;  // pos decremento de -1
console.log(valor03);

--valor03; // pre decremento de -1
console.log(valor03); 

valor03 -= 0.5; // valor03 = valor03 - 0.5
console.log(valor03);

// (/) DIVISÃO
let valor04 = 10 / 2;
console.log(`10/2 = ${valor04}`);

valor04 /= 5;
console.log(valor04);

// (%) RESTO DA DIVISÃO
const valor05 = 25 % 2;
console.log(`Resto da Divisão de 25/2 = ${valor05}`)

// (*) MULTIPLICAÇÃO
let valor06 = 10 * 4;
console.log(`10 * 4 = ${valor06}`);

valor06 *= 2;
console.log(valor06);

// (**) POTÊNCIA
let valor07 = 2 ** 3;
console.log(`2^3 = ${valor07}`);

valor07 **= 2;
console.log(valor07);

//CONVERSÃO DE TIPO DE DADOS
const num1 = 10;
const num2 = '20.5'
console.log(num1 + parseInt(num2) + typeof(num2)) // parseInt() -> para número inteiro
console.log(num1 + parseFloat(num2) + typeof(num2)) // parseFloat() -> para número flutuante
console.log(num1 + Number(num2) + typeof(num2)) // Number() -> para o tipo numerico automatico