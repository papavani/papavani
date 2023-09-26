set1=[4,9,10];
set2=[...set1,22,45,20]; //expanding the se1 values to set2 by using spread operator.

console.log(set2);

// consider 2 objects

set3=
{
name:"pavani pallapu",
email:"pavani@gamil.com"

}

set4={
    ...set3,
    age:23,
    company:"capgemini"
}

console.log(set4);