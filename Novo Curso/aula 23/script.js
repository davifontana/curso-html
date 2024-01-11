/*

If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter vários else ifs na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else

*/

const hora = 13

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite')
} else {
    console.log('Aoba')
}