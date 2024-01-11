const pessoa = {
    'nome': 'xdcfdkonv',
    'sobrenome': 'dlmpfkb',
    'idade': 30,
    'endereco': {
        'rua': 'Asa sul',
        'numero': 356
    }
}
const a = 20

const b = 'texto'
console.log(typeof (pessoa))

console.log(typeof (a))

console.log(typeof (b))

console.log(pessoa)

for (let chaves in pessoa) {
    console.log(chaves);
}