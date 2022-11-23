const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clinteEmSting = JSON.stringify(dados);

console.log(clinteEmSting);
console.log(typeof clinteEmSting);

console.log(clinteEmSting.nome);

const objetoCliente = JSON.parse(clinteEmSting);

console.log(objetoCliente);