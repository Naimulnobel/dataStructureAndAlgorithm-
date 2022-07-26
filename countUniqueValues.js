function countUniqueValues(arr){
    let i=0;
    let j=1;
    let count=0
    let value=0
    while(j<arr.length){
        count=arr[i]
        if(arr[i]!==arr[j]&&arr[i]!==value){
            value=arr[i];
            i++;
            arr[i]=arr[j];
            count++;
        }
        j++;
    }
    return count;

}
const arr=[1,1,1,1,2,2,3,4,5,6,7,8,9,10];
console.log(countUniqueValues(arr));