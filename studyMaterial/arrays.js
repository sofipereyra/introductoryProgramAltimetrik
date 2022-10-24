//*Array syntax
const arr = [1,2,3,4,"hola",undefined,3,6,7];
const arr2 = new Array();

//access values by position
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[5]);
console.log(arr[6]);
//
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
//
for(values of arr){
    console.log(values);
}

//*Properties
console.log(arr.length);

//*Methods
//Adding values to an array
//.push() ==> Adds one or more elements to the end of an array, and returns the new length of the array.
arr.push("end");
console.log(arr);

//.unshift() ==> Adds one or more elements to the front of an array, and returns the new length of the array.
arr.unshift("beginning");
console.log(arr);

//Removing elements of an array
//.shift() ==> Removes the first element from an array and returns that element.
console.log(arr.shift());
console.log(arr);

//.pop() ==> Removes the last element from an array and returns that element.
console.log(arr.pop());
console.log(arr);

//.map() ==> Returns a new array containing the results of invoking a function on every element in the calling array.
array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

//--------------------------------------------------------------------------------------------------------------------
const arrOfNumbers = [4, 2, 5, 1]
const arrOfStrings = ["adiós", "ciao","hola","bonjour"]
//.concat() ==> Returns a new array that is the calling array joined with other array(s) and/or value(s).
const arrCombined = arrOfNumbers.concat(arrOfStrings)
console.log(arrCombined)

//spread syntax
const spreadSyntaxCombination = [...arrOfNumbers, ...arrOfStrings]
console.log(spreadSyntaxCombination)

//---------------------------------------------------------------------------------------------------------------------
const arrObjects = [
    { name: "Leire", age: 35 },
     { name: "Gorka", age: 34 },
     { name: "Miguel", age: 28 },
     { name: "Lucía", age: 3 },
    { name: "Amaia", age: 29}
]
//.filter() ==> Returns a new array containing all elements of the calling array for which the provided filtering function returns true.
const over30 = arrObjects.filter(obj => {
     if (obj.age > 30) {
         return true
     } else {
         return false
     }
})
const ageOver30 = arrObjects.filter(obj => obj.age > 30)
console.log(ageOver30)
const otherThanMiguel = arrObjects.filter(obj => obj.name !== "Miguel")
console.log(otherThanMiguel)

//---------------------------------------------------------------------------------------------------------------------
const array2 = [3, 56, 23, 5, 90, 100]
//.reduce() ==> reduce it to a single value
const sum1 = array2.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
const sum = array2.reduce((acumulado, cur, i, arrayOriginal) => acumulado + cur)
console.log(sum)