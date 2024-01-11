function zeroAEsquerda(num) {
    return num >= 10 ? num : '0${num}';
}



function formataData(date) {
    const day = (data.getDate())
    const month = (data.getMonth() + 1)
    const year = (data.getFullYear())
    const hour = (data.getHours())
    const minutes = (data.getMinutes())
    const secs = (data.getSeconds())
}

const data = new Date()
const dataBrasil = formataData(date)
console.log(dataBrasil)