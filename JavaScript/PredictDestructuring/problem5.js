const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //value
const { secondKey } = lastTest; //[1,5,1,8,3,8]
const [ ,willThisWork] = secondKey; //5
//Predict the output
console.log(key); //value
console.log(secondKey); //[1,5,1,8,3,8]
console.log(secondKey[0]); //1
console.log(willThisWork); //5

