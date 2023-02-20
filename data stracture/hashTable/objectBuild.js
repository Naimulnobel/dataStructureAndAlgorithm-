class HashTable{
    constructor(sizes){
        this.data = new Array(sizes);

    }
    set(key, val){
        this.data.push([key, val]);
        return this.data
    }
    get(key){
       
        if(this.data){
        for(let i=0; i<this.data.length;i++){
            // if(athis.dat[i]){
            //  return this.data[i][1];
            // }
            if(this.data?.[i]?.[0]===key){
                return this.data?.[i]?.[1]
            }
        }
            
        }
    }
}
const hashTable = new HashTable(50)
console.log(hashTable.set("grape",1000));
console.log(hashTable.get("grape"));