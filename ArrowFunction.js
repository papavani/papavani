//Arrow Functions
const oldversion = () => // arrow function declaration
{
console.log("Iam pavani pallapu");
}
oldversion();

const newversion =(num1,num2) =>
{
    return num1+num2;
}
console.log(newversion(50,50));

//another simpleway
const newerversion =(num1,num2)=>(num1+num2);
console.log(newerversion(50,50));

//if only one parameter at that time we don't need to use parantasis also
const version=num1=>num1+50;
console.log(version(100));