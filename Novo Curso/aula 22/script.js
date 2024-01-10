/*
&& -> false && true -> false 'O mesmo valor'
|| -> or

FALSY
False
0
"" ''
null / undefined
NaN

*/

//console.log('Luiz' && 'Maria');

function falaOi() {
    return 'Oi Mate';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());