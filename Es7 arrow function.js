class human{
    age=23;
    name="pavani pallapu";

    display= () => console.log("this is "+this.name+" and age  "+ this.age);
}
class person extends human
{
company="capgemini";

printCompany=()=> console.log("this is "+this.name+" working in"+this.company);
    
}
const persons=new person();
persons.display();
persons.printCompany();