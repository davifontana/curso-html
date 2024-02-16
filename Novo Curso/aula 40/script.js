function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x and y need to be numbas')
    }

    return x + y
}

console.log(soma(1, 2))