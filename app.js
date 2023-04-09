"use strict";
function Employee(employee,fullName,Department,level) {
    this.employee=employee;
    this.fullName=fullName;
    this.Department=Department;
    this.level=level;
    this.imgUrl='imgUrl';
    this.salary=this.calculateSalary(level) ;
    this.rander=this.rander();
    
}

Employee.prototype.calculateSalary =function(level){
    let salay;
    let randomS=Math.floor(Math.random()*500);
if (level=="Senior")
 {
    salay=randomS+1500;
 }
else if (level=="Mid-Senior") 
{
    salay=randomS+1000;
}
else if (level=="Junior")
 {
    salay=randomS+500;
 }
 let netSalary=salay-salay*7.5/100;
 return netSalary;
};
Employee.prototype.rander =function () {
  document.write(`<h1>${this.fullName} </h1> 
  <h1>${this.salary} </h1>
 `)  
}
let employee1 = new Employee(1000,'Ghazi Samer',"Administration","Senior")
let employee2 = new Employee(1001,'Lana Ali',"Finance","Senior")
let employee3 = new Employee(1002,'Tamara Ayoub',"Marketing","Senior")
let employee4 = new Employee(1003,'Safi Walid',"Administration","Mid-Senior")
let employee5 = new Employee(1004,'Omar Zaid',"Development","Senior")
let employee6 = new Employee(1005,'Rana Saleh',"Development","Junior")
let employee7 = new Employee(1006,'Hadi Ahmad',"Finance","Mid-Senior")
console.log(typeof employee5)

for (let key in Employee) {
    if (Employee.hasOwnProperty(key)) {
      console.log(key + ": " + Employee[key]);
    }
  }