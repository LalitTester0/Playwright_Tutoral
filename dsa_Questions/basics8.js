import { person } from "./basics7.js";


class Pet extends person{

    get location(){
        return 'Bluecross'
    }

    constructor(firstName,lastName){
        super(firstName,lastName)
    }
}

let dog=new Pet('Piston',"1111")

dog.fullName();