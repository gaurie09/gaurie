function mergeSort(arr) {  
       if (arr.length <= 1) {  
               return arr; 
}      const mid = Math.floor(arr.length / 2); 
const left = arr.slice(0, mid);    
const right = arr.slice(mid); 
 return merge(mergeSort(left), mergeSort(right)); 
}  function merge(left, right) {  
       let result = [];   
         let leftIndex = 0;   
           let rightIndex = 0; 
 while (leftIndex < left.length && rightIndex < right.length) { 
            if (left[leftIndex] < right[rightIndex]) {  
                           result.push(left[leftIndex]);             leftIndex++; 
    } 
    else {             result.push(right[rightIndex]);             rightIndex++; 
    } 
}      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); 
} 

// Example usage: const unsortedArray = [5, 3, 7, 2, 9, 1, 6, 4, 8]; const sortedArray = mergeSort(unsortedArray); console.log("Sorted array using Merge Sort:", sortedArray); O/P: Sorted array: [1, 2, 3, 4, 5,6, 7, 8, 9]  
