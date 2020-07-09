// jshint esversion :6

class Person {

    constructor(name = "anonymous" , age = 0){
      this.name = name;
      this.age = age;
    }
 
    getGreeting() {
      return `Hi . I am ${this.name}!.`;
    }
 
    getDescription() {
      return `${this.name} is ${this.age} years old `;
    }
   
    
 }
 
 class Traveler extends Person{
 
   constructor(name , age , homeLocation){
     super(name , age);
     this.homeLocation = homeLocation;
   }
 
   // hasGreeting(){
   //   return !!this.homeLocation;
   // }
 
   getGreeting(){
     let greeting = super.getGreeting();
 
     if(this.homeLocation){
       greeting  += ` I'm visiting ${this.homeLocation}.`;
     }
 
     return greeting;
   }
 
 
 }
 
 const me = new Traveler('Shivansh Dwivedi' , 19 , 'Faridabad');
 console.log(me.getGreeting());
 
 const another =  new Traveler();
 console.log(another.getGreeting());
 