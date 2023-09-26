 person ={
    name:"venu bandaru",
    age:23,
    email:"venu@gamil.com",
    birthplace:{
        city:"Guntur",
        state:"Ap",
        country:"India"

    }
}
// const {name,age,birthplace:{city}}=person;
// console.log("my name is "+name+ " age:"+ age+ " and birth city is "+city );

// another way by using function

myDetails(person)

 function myDetails({name,birthplace:{state,city}})
 {

    console.log("my name is "+ name + " my birth city is " +city+ " under the "+state);

 }