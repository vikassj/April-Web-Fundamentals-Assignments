let array3 = [10, 60, 30, 40, 50, 70];

// sort the array

let sortedArray = array3.sort();

// find the largest in sortedArray

function largest(sortedArray){
    let maximum = sortedArray[0];

    for (let i = 0; i < sortedArray.length; i++) {
         if (sortedArray[i] > maximum) {
            maximum = sortedArray[i];
            console.log(maximum);
         }

         return maximum
        
    }

}
let larges=largest(sortedArray)
console.log(larges);