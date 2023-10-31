 
//-------------Destructing---------------
//----------------1---------------------- 

var student = {
  name: "Idrees Faiz",
  age: 23,
  email: "idreesfaiz63@gmail.com",
};
// Student  == Stu
var { name: nameStu, age: ageStu, email: emailStu } = student;
console.log(nameStu, ageStu, emailStu);

//----------------2---------------------- 

var obj = {
  firstName: " idrees",
  lastName: "faiz",
};
function data(obj) {
  const { firstName, lastName } = obj;
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}
const fullName = data(obj);
console.log(fullName);



//---------------Spread------------------
//------------------1-------------------- 

const arr1 = [1, 2, 3] , arr2 = [4, 5, 6];
const arr3 = [...arr1 , ...arr2]
console.log(arr3);


//------------------2-------------------- 

const  recorde = [1, 23, 44, 24, 5, 6, -53, -24];
const getLarge = Math.max(...recorde);
console.log(getLarge);


//---------------Rest--------------------
//----------------1---------------------- 

//using both spread and rest oprator 
const data = []
var count = +prompt("How many num that you have sum");
for(let i = 0 ; i< count ;i++){
var num = +prompt(`Enter ${i+1} number `);
data.push(num)
}
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(...data));


//----------------2---------------------- 


function calculateAverage(...numbers) {
  if (numbers.length === 0) {
    return 0; 
  }
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}
const userInput = prompt("Enter a list of numbers separated by spaces:").trim();
const numbersArray = userInput.split(" ").map(Number);
const average = calculateAverage(...numbersArray);
console.log("Average:", average);

 