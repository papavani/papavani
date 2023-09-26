//simple example

const se1=['pavani','22','pavani@gmail.com'];
const [name1, ,email1]=se1; // destructing assignment
console.log(name1,email1)
// consdering objects

person={
    name:"pavani",
    age:23,
    email:"pavani@gmal.com"
}
const {name,email}=person; // destrcting in objects
console.log(person.email);//without destructing 
console.log("my name is "+name+" and my email is "+email);

//
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,truck,suv] = vehicles;
console.log(suv,truck,car);


