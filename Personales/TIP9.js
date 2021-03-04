// Escribe una función que pase un string en binario a un número decimal

// ejemplo: "1101"

function binaryToDecimal (num) {
    // num * base(2) elevado a la pocision
    var sum = 0;

    for(var i = 0; i < num.length; i++) {
        //me pasan 1*2^3 + 1*2^2 + 0*2^1 + 1*2^0
        //recorro string de atrás pa delante para asignar la potencia correspondiente
        // 8+4+0+1 = 13

        sum += num[i] * 2 ** (num.length - 1 - i);
        
    }

    if (sum === 0) return false
    return sum
}

console.log(binaryToDecimal('1101'));
console.log(binaryToDecimal('0101'));
console.log(binaryToDecimal(10))

//C. temporal O(n) => n = num.length;
//C. especial O(1) => suma, i;