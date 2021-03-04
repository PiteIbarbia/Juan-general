const Suma = (array, num) => {
    for(var i = 0; i < array.length; i++){
        for(var j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === num) return true
        }
    }
    return false
};

console.log(Suma([1,2,3,4], 6));

//Complejidad temporal = big O(n^2) donde n es long de arr;

//Complejidad espacial = O(1)
//constante ya que tengo 2 var(variables) indistintamente la long de arr-obj-etc

const Suma2 = (array, num) => {
    var i = 0;
    var j = array.length -1;
    while(i !== j){
        if(array[i] + array[j] === num) {
            return true
        } else {
            array[i] + array[j] > num ? j-- : i++; 
        }
    }
    return false
};

console.log(Suma2([1,2,3,4], 8));

//Complejidad temporal = big O(n) donde n es long de arr;
//Complejidad espacial = O(1)
//constante ya que tengo 2 var(variables) indistintamente la long de arr-obj-etc

//ternario === condicion ? si se cumple : si no se cumple