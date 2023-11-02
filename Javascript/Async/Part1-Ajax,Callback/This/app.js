/*
const person = {
    age: 25,
    tellAge: function(){
        //this=person
        console.log(this);
        console.log(this.age);
    }.bind(this) // this=window

}

person.tellAge();
*/

const person = {
    age: 25,
    tellAge:()=>{
        console.log(this);
        console.log(this.age);
    }
}

person.tellAge();
