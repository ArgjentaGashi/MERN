const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name); /*It won't output anything beacuse it with thrrow an error at this line. It can't output 'name'
 because we set another name for that variable which is 'otherName', so it can't find 'name' anymore */
console.log(otherName);  //Otherwise this would output Elon

