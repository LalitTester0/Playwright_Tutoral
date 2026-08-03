let person={
    firstName:'Tim',
    lastName:'joe',
    age:27,

    fullName:function(){
        console.log(this.firstName+" "+this.lastName)
    }

}
console.log(person.lastName)

console.log(person['lastName'])

person.firstName='Tim david';
console.log(person.firstName)

person.gender='Male';
console.log(person)
delete person.gender;
console.log(person)
console.log('gender'in person)

for (let key in person){
    console.log(person[key])
}
 c
console.log(person.fullName())