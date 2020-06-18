console.log("hello world");

var a = 1;
a = "string";

let str = `day la gia tri cua bien ${a}`;

console.log(str.length);
console.log(str.includes("day"));
console.log(str.startsWith("la"));
console.log(str.endsWith("la"));

console.log(str.split(" "));

//object
let student = {
    name: "Nguyen Van A",
    age: 18,
    singASong: function () {
        console.log("Sing a HPMM song");
    },
};

console.log(student.name);
student.name = "Tran Thi B";
console.log(student.name);
student.singASong();

//Array

// let a = new Array()
// let arr = [1, 2, 3, 4, 5, 4];
// // arr.push(6)
// // arr.unshift(0)
// // arr.pop();

// console.log(arr);

// console.log(arr[0]);

// console.log(arr.indexOf(4));
// console.log(arr.lastIndexOf(4));

// let a = function () {};
// let a = () => {};

function Student() {
    this.age = 18;
    setTimeout(() => {
        this.age = 20;
    }, 100);
}

let arr = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8, 10];
let arr3 = [];
// let x2 = (number) => number*2

// for(let i = 0; i < arr.length; i++){
//     arr3.push(x2(arr[i]))
// }

arr3 = arr.map((e) => e * 2);

console.log(arr3);

let myFirstNameConvention

//DOM

let buttonDemo = document.getElementById('demo')

buttonDemo.addEventListener('click',  (e) => {
    document.getElementById('heading1').style = 'display: none'

})
