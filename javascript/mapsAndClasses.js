var myMap = new Map();
myMap.set('firstname','Robb');
myMap.set('lastname','stark');
myMap.set('age',30);
myMap.set('friend1','brian');
myMap.set('friend2','john');

console.log('My Map :',myMap);

class Employee{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    detail(){
        console.log(this.id+" "+this.name);
    }
}

var e1 = new Employee(101, "John");
var e2 = new Employee(102, "Bob");

e1.detail();
e2.detail();
