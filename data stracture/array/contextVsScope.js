class Player {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`hi i am a ${this.name}, i am a ${this.type}`);
    }
}
class Wizard extends Player {
    constructor(name,type){
        super(name,type);
    }
    play() {
        console.log(`hi i am a ${this.name}`)
    }
}
const wizard1=new Wizard("nobel","darkmaze")
console.log(wizard1.play());