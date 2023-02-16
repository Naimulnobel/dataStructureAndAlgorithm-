function margeSort(array1, array2) {
    const mergeArray=[];
    let array1Item=array1[0]
    let array2Item=array2[0]
    let i=1
    let j=1
    while(array1Item||array2Item){
        if(array1Item<array2Item||!array2Item){
            mergeArray.push(array1Item)
            array1Item=array1[i]
            i++
        }else{
            mergeArray.push(array2Item)
            array2Item=array2[j]
            j++
        }
    }
    return mergeArray
}
console.log( margeSort([1,2],[3,4]));   