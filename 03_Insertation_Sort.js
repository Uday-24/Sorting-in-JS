function insertationSort(arr){
    let len = arr.length;
    for(let i=1; i<len; i++){
        let curr = arr[i];
        let j = i-1;
        while(j >= 0 && curr < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }
    return arr;
}

console.log(insertationSort([4, 1, 5, 3, 2]));