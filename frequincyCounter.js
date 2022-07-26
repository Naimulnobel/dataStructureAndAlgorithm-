//frequincy Counter
function correctAngram(str1,str2) {
    if(str1.length != str2.length) return false;
    const str1Obj = {};
    const str2Obj = {};
    for(let i of str1){
        i = i.toLowerCase();
        if(/[a-z0-9]/i.test(i)){
            str1Obj[i] = ++str1Obj[i] || 1;
        }
    }
    for(let i of str2){
        i = i.toLowerCase();
        if(/[a-z0-9]/i.test(i)){
            str2Obj[i] = ++str2Obj[i] || 1;
        }
    }
    console.log(str1Obj);
    console.log(str2Obj);
    for(let i in str1Obj){
        if(str1Obj[i] !== str2Obj[i]){
            return false;
        }
        return true;
    }
}
console.log(correctAngram('Hello2','hello1'));