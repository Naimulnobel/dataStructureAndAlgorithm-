function reverse(str){
    const length1=str.length-1
    const totalItems=[]
    if (!str||str.length>2||typeof str !=="string"){ 
        return 'that is not good'
    }
    for(let i=length1; i>=0; i--){
        totalItems.push(str[i])

    }
    
    return totalItems.join('')
}
console.log(reverse("hi")); 
