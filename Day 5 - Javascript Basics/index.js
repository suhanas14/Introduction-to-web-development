//Variable in Javascript
var fullName='Suhana Shrestha';
let address='Kathmandu, Nepal';
const bloodGroup='A+';

console.log(fullName);
console.log(address);
console.log(bloodGroup);

//Data types
let name='Suhana';
let age=20;
let isStudent=true;
let hobbies=['travelling','riding'];

//object
let user={
    name: 'Suhana',
    age: 20,
    isStudent: true,
    hobbies: ['travelling','riding'],
};

console.log(hobbies[0]);

console.log(user['name']);
console.log(user.age);

//functions

function greet(name){
    console.log('Hello',name);
}
greet('Suhana');

//DOM Manipulation

const headingElementById=document.getElementById('heading-2');
console.log(headingElementById);


const headingElementByQuery=document.querySelector('#heading-2');

const paragraphElement = document.querySelector('.para');

paragraphElement.textContent='This is updated paragraph';
paragraphElement.style.color='blue';

const  buttonElement=document.querySelector('.btn');

buttonElement.addEventListener('click',function() {
    alert('Button clicked!');
    console.log('Button clicked');
})