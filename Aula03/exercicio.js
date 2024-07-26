/* *FUNÇÃO PARA CAUCULAR O IMC*
const caucularImc = (peso, autura) => { 
    return peso/(autura*autura);
}
*/

const nome  = 'Mario Luiz';
const sexo  = 'Masculino';
const idade   = 19;
const peso    = 60.0;
const autura  = 1.83;    
let imc     = peso/(autura*autura)

console.log(`${nome} tem ${idade} anos, pesa ${peso}Kg, tem ${autura}m \ne seu IMC é de ${imc.toFixed(2)}`) //toFixed() = Método para definir o numero de casa decimais