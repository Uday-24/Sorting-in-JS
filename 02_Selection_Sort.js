function selectionSort(arr){
    let len = arr.length;
    for(let i=0; i<len-1; i++){
        let smallestIdx = i;
        for(let j=i+1; j<len; j++){
            if(arr[smallestIdx] > arr[j]){
                let temp = arr[smallestIdx];
                arr[smallestIdx] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let arr = [4, 1, 5, 2, 3];
console.log(selectionSort(arr));