console.log('entrei')
const elementos = [
    { tag: 'p', texto: 'Qualquer texto que você quiser.' },
    { tag: 'div', texto: 'Frase2' },
    { tag: 'footer', texto: 'Frase3' },
    { tag: 'section', texto: 'Frase4' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');
console.log('antes do loop')
console.log(elementos.length)
for (let i = 0; i < elementos.length; i++) {
    console.log(i)
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);

    div.appendChild(tagCriada)
}

container.appendChild(div); 