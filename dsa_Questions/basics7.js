export class person{
    age=25
    get location(){
        return 'canada'
    }

    //constructor is a  method which excutes by default when you create object of this class
    constructor(firstName,lastName){
        this.first=firstName
        this.last=lastName
    }

    fullName(){
        console.log(this.first+this.last);
    }

}

let per=new person('Tim','Joe')
console.log(per.age)
let loc=per.location;
per.fullName()