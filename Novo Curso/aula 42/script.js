function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaDoIntervalo() {
    console.log(mostraHora());
}

setInterval(funcaDoIntervalo, 1000);