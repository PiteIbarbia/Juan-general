// Dada una hora en string en formato HH:MM, y un número de minutos. Devolver la nueva hora pasados esos minutos.

// IMPORTANTE
// El reloj es de 12 horas y tiene que devolverse en el formato HH:MM. Recuerda que no existen las 00hs.

// Ejemplos:
// clockMinuteAdder ('09:00', 20);
// ouput: '09:20'

// clockMinuteAdder ('01:30', 30);
// ouput: '02:00'

// clockMinuteAdder ('12:05', 100);
// ouput: '01:45'

function horaMin(hora, min) { //70 mn
    // separar el 01 y el 30
    let [hour, minutos] = hora.split(':')
    //   '01'    '30'
    var h = parseInt(hour);
    var m = parseInt(minutos);
    
    let horasASumar = min / 60; //1 min
    let minASuamr = min % 60 //10 min
    //sumar horaASUmar + minASumar
    // a hora le sumo min
    
    time = horasASumar + minASuamr;
    return time;
};

console.log(horaMin('01:30', 70));

// 12:30 + 60 = 12:90 => esto esta pesimo
// 12:30 + 60 = 01:30 => yo aca ag