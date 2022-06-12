const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person; 
//We get undefined as an output because the object person doesn't have a password.
console.log(password);  //12345
console.log(hashedPassword);   //undefined

