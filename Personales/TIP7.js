/*
{
    a se conceta con b  a:['b'];
    b se conecta con c y d  b:['c', 'd'];
    c se conecta con d  d:['d'];
}

    Tengo que a se conceta con b, solo ida, npo existe ida y vuelta, va en un sentido y no vuelve

    const graph = {
    a: ['c'],
    b: ['c'],
    c: ['s', 'r'],
    d: ['a'],
    s: ['a', 'c'],
    r: ['d'],
    z: ['z']
    };
 */
const graph = {a: ['c'], b: ['c'], c: ['s', 'r'], d: ['a'], s: ['a', 'c'], r: ['d'], z: ['z']};

// conectar start con end y si estan conectados avanza;
// function que recorra el graph;

function solveGraph(graph, start, end, arr = [], visitado = {}) {

    if (visitado.hasOwnProperty(start)) return false //para entrar al ciclo for

    // si graph tiene un start con un end true; else false;

    for(var i = 0; i < graph[start].length; i++) {
        if(graph[start][i] === end) {
            return true
        }
        arr.push(graph[start][i]);
        visitado[start] = true //guardo obj visitado
    }

    let next = arr.shift()
    return solveGraph(graph, next, end, arr, visitado);
}
console.log(solveGraph(graph, 'a', 'a'));
console.log(solveGraph(graph, 'a', 'z'));
console.log(solveGraph(graph, 'a', 'c'));
console.log(solveGraph(graph, 'a', 's'));

// C. temporal O(n) n = cant nodos;
// C. espacial O(n) n = recusrividad (cuanto más nodo agrego + memo ocupa);