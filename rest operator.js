const array =(a,b,...ope) =>
{
    console.log(ope);// rest operator consider the values as array.
    console.log(a,b);
}
array(10,20,30,40,50,60);