/* 
Ya trabajamos con arreglos de una unica dimension, ahora subiremos un escalón e iremos por arreglos de dos dimensiones, 
es decir, un arreglo de arreglos de enteros. En este caso, el objetivo es encontrar la suma de todos los elementos del arreglo.

Ejemplos
mdArray: [1,2,3,4]
//          i
//             j
output: 10

mdArraySum: [ [2,4] , [1], [4,2,1] ]
output: 14

mdArraySum: [ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ]
output: 26
 */

//tengo un array con enteros y adentro otro array
//donde tengo que sumar todos los enteros

const sumarArr = (arr) => {
    suma = 0;
    for(var i = 0; i < arr.length; i++) {
        suma += Array.isArray(arr[i]) ? sumarArr(arr[i]) : arr[i];
    }
    return suma;
}

console.log(sumarArr([1, 2, 3, 4]));
console.log(sumarArr([ [2,4] , [1], [4,2,1] ]));
console.log(sumarArr([ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ]));

//complejidad temporal O(n) donde n son los numeros enteros

//complejidad espacial es O(n) n = cant arrays anidados (recursividad: funcion que se llama a sí misma)