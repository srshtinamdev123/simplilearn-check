// function constructor

function Employee(name,designation,yearOfBirth)
{
    this.name = name;
    this.designation = designation;
    this.yearOfBirth = yearOfBirth;
}

Employee.prototype.calculateAge = function(){
    console.log("The current age is: " + (2024 - this.yearOfBirth));
}

console.log(Employee.prototype);

// lets create employee object

let emp1 = new Employee('Alex', 'Developer',1995);
console.log('Employee Object:',emp1);
emp1.calculateAge();

let emp2 = new Employee('disha', 'Manager',1990);
console.log('Employee Object:',emp2);
emp2.calculateAge();

let emp3 = new Employee('Tanusha', 'Tester',1992);
console.log('Employee Object:',emp3);
emp3.calculateAge();