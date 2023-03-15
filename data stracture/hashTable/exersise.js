function reccuringNumber(arr){
   
    const obj={}
    for(let i of arr){
        
            obj[i] = ++obj[i]||1
            
       
    }
    console.log(obj)
    for (let j in obj) {
        if (obj[j]>1) {
            return j
        }else{
            return undefined
        }
    }
}
function reccuringNumber2(arr){
   
    const obj={}
    for(let i=0;i<arr.length;i++) {
        if(obj[arr[i]]!==undefined) {
            return arr[i]
        }else{
            obj[arr[i]] =i
        }
        console.log(obj)
    }
   return undefined
}
console.log(reccuringNumber2([2,4,2,1]))
