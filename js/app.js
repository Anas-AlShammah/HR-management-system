"use strict";
let count=1;
let arr=[];
document.addEventListener('DOMContentLoaded', () => {
  if (loadData() ) {
    arr = loadData();
    render(arr);  
  }
});
function Employee(fullName,Department,level,imgUrl) {
  this.id=this.idGen();
     this.fullName=fullName;
    this.Department=Department;
    this.level=level;
    this.imgUrl=imgUrl;
    this.salary=this.calculateSalary() ;
    arr.push(this);
    
}
Employee.prototype.idGen=function() {
  const generatedIds = new Set();
    let uniqueId;
    do {
      // Generate a random number between 0 and 1
      const randomNumber = Math.random();
  
      // Multiply the random number by 10000 to get a four-digit number
      uniqueId = Math.floor(randomNumber * 9000+1000);
  
      // Convert the unique ID to a string
      uniqueId = uniqueId.toString().padStart(4, '0'); // Ensure it has four digits
  
    } while (generatedIds.has(uniqueId));
  
    generatedIds.add(uniqueId);
    console.log(uniqueId);
    return uniqueId;
}
Employee.prototype.calculateSalary =function(){
    let salay;
    let randomS=Math.floor(Math.random()*500);
if (this.level=="Senior")
 {
    salay=randomS+1500;
 }
else if (this.level=="Mid-Senior") 
{
    salay=randomS+1000;
}
else if (this.level=="Junior")
 {
    salay=randomS+500;
 }
 let netSalary=salay-salay*7.5/100;
 return Math.floor(netSalary);
};
const ul = document.getElementById('listData');
const section=document.getElementById('section')
section.className='articles';
function render (array) {
  section.innerHTML='';
  array.forEach ((emp)=>{
  const article =document.createElement('article');
  section.appendChild(article);
  const div =document.createElement('div');
  div.className="article-wrapper";
  article.appendChild(div);
  const figure =document.createElement('figure');
  div.appendChild(figure);
  const img= document.createElement('img');
  img.src=emp.imgUrl || `./assets/${Math.floor(Math.random()*7+1)}.jpg`;
  figure.appendChild(img);
  const div1 =document.createElement('div');
  div1.className='article-body';
  div.appendChild(div1);
  const h2 =document.createElement('h2');
  h2.textContent=`Name: ${emp.fullName} -ID: ${emp.id}`;
  div1.appendChild(h2);
  const p =document.createElement('p');
  p.textContent=`Department: ${emp.Department} - ${emp.level}`;
  div1.appendChild(p);
  const p1 =document.createElement('p');
  p1.textContent=`${emp.salary}`;
  p1.className='salary';
  div1.appendChild(p1);
    })
}
/*
let employee1 = new Employee(1000,'Ghazi Samer',"Administration","Senior")
let employee2 = new Employee(1001,'Lana Ali',"Finance","Senior")
let employee3 = new Employee(1002,'Tamara Ayoub',"Marketing","Senior")
let employee4 = new Employee(1003,'Safi Walid',"Administration","Mid-Senior")
let employee5 = new Employee(1004,'Omar Zaid',"Development","Senior")
let employee6 = new Employee(1005,'Rana Saleh',"Development","Junior")
let employee7 = new Employee(1006,'Hadi Ahmad',"Finance","Mid-Senior")

for (let key in Employee) {
    if (Employee.hasOwnProperty(key)) {
      console.log(key + ": " + Employee[key]);
    }
  }
*/
  const form = document.getElementById('registrar');
  
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
 
     let name=e.target.name.value;
     let department=e.target.department.value;
     let level=e.target.level.value;
     let url=e.target.imgUrl.value;
    let employee = new Employee(name,department,level,url)
    savaData(arr);
    render(arr);
  });
  function savaData (arrayEmployee){
    window.localStorage.setItem('employee',JSON.stringify(arrayEmployee));
  }
  function loadData (){
    let data=window.localStorage.getItem('employee');
    if (data){
      return JSON.parse(data);
    }
  }
  /*
const ul = document.getElementById('listData');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    console.log(e.target)
  */