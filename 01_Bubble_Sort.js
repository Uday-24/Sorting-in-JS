function bubbleSort(arr) {
    let len = arr.length;

    for(let i=1; i<len; i++){
        for(let j=0; j<len-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let numbers = [4, 2, 5, 3, 1];
console.log(bubbleSort(numbers));