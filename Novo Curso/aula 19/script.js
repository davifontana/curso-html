const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;

b.nome = 'João'
console.log(a)
console.log(b)