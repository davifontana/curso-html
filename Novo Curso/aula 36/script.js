function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(1, 50);

console.log('entrando no while')

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

console.log('entrando no do while')

do {
    rand = random(min, max)
    console.log(rand)
    rand = 10
} while (rand !== 10)