//classes in react

class person { // class declaration
  constructor()
  {
    this.name="Pavani Pallapu";
  }
  printName(){
    console.log(this.name);
  }
}
const persons =new person();// creating object for person class
persons.printName();