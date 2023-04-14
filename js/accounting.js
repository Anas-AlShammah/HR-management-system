function loadData (){
    let data=window.localStorage.getItem('employee');
    if (data){
      return JSON.parse(data);
    }
  }
  let array=loadData ();
  let nAdministration=0;
  let sAdministration=0;
  let nMarketing=0;
  let sMarketing=0;
  let nDevelopment=0;
  let sDevelopment=0;
  let nFinance=0;
  let sFinance=0;
  let Total=0;

  array.forEach((emp)=>{
if (emp.Department=='Administration')
    {
nAdministration++;
sAdministration += emp.salary;
    }
else if (emp.Department=='Marketing')
{
nMarketing++;
sMarketing += emp.salary;
}
else if (emp.Department=='Development')
{
nDevelopment++;
sDevelopment += emp.salary;
}
else if (emp.Department=='Finance')
{
nFinance++;
sFinance += emp.salary;
}
 })

let tAdministration = document.querySelector('.nAdministration');
tAdministration.innerText=nAdministration;
let tAdministration2 = document.querySelector('.sAdministration');
tAdministration2.innerText=sAdministration;
let tAdministration3 = document.querySelector('.aAdministration');
tAdministration3.innerText=sAdministration/nAdministration;

let tMarketing = document.querySelector('.nMarketing');
tMarketing.innerText=nMarketing;
let tMarketing2 = document.querySelector('.sMarketing');
tMarketing2.innerText=sMarketing;
let tMarketing3 = document.querySelector('.aMarketing');
tMarketing3.innerText=sMarketing/nMarketing;




let tDevelopment = document.querySelector('.nDevelopment');
tDevelopment.innerText=nDevelopment;
let tDevelopment2 = document.querySelector('.sDevelopment');
tDevelopment2.innerText=sDevelopment;
let tDevelopment3 = document.querySelector('.aDevelopment');
tDevelopment3.innerText=sDevelopment/nDevelopment;

let tFinance = document.querySelector('.nFinance');
tFinance.innerText=nFinance;
let tFinance2 = document.querySelector('.sFinance');
tFinance2.innerText=sFinance;
let tFinance3 = document.querySelector('.aFinance');
tFinance3.innerText=sFinance/nFinance;

let tTotal = document.querySelectorAll('.nTotal')[0];
let fTotal = document.querySelectorAll('.nTotal')[1];
tTotal.innerText=nFinance+nDevelopment+nMarketing+nAdministration;
fTotal.innerText=nFinance+nDevelopment+nMarketing+nAdministration;
let tTotal2 = document.querySelectorAll('.sTotal')[0];
let fTotal2 = document.querySelectorAll('.sTotal')[1];
tTotal2.innerText=sFinance+sDevelopment+sMarketing+sAdministration;
fTotal2.innerText=sFinance+sDevelopment+sMarketing+sAdministration;
let tTotal3 = document.querySelectorAll('.aTotal')[0];
let fTotal3 = document.querySelectorAll('.aTotal')[1];
tTotal3.innerText=(sFinance+sDevelopment+sMarketing+sAdministration)/(nFinance+nDevelopment+nMarketing+nAdministration);
fTotal3.innerText=(sFinance+sDevelopment+sMarketing+sAdministration)/(nFinance+nDevelopment+nMarketing+nAdministration);
