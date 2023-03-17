// // let add_num = (...num)=>{
// // //    console.log(num);

// // let final = num.reduce((num,ele)=>{
// //     return num+ele;
// // })
// // document.write(`the final answer is:  ${final}`)
// // }
// // add_num(11,13,44,55,66,77,88,354,20)
// // console.log(parseInt(false));
// // console.log(Number(false));

// // var num1 = 10;
// // var num2 = 20;
// // var num3 = 30;

// // var sum1 = ++num1+num2+++num3++;
// // var sum2 = num1+++++num2+++num3++;

// // console.log(num1);
// // num1=10;
// // console.log(num1);
// // var num1;

// // console.log('this is /'text/'string');

// // const obj= {
// //     'name':'babayog',
// //     'getname':function(){
// //         console.log(this.name);
// //     }
// // }
// // console.log(JSON.stringify(obj));

// // const marr =[1,2,3,4,5];
// // const mstr = 'amigo';
// // const num1 = 10;
// // const num2 = 20;
// // const num3 = 30;
// // const resul = num1+num2+mstr+marr+num3;
// // console.log(resul);

// // const obj = {
// //     firsname :'john',
// //     lastname:'lark',
// //     age:28,
// //     getdeata:function(){
// //         console.log(`${this.firsname} ${this.lastname} is ${age} yers old`);
// //     }
   
// // }
// // obj.firsname='toto'
// // obj.lastname='wolf';
// // obj.age=35;
// // obj.getdeata();

// // function myfunc(sele,func){
// //     var li = document.querySelector(sele);
// //     for(i=0;i<li.length;i++){
// //         li[i].onClick=func;
// //     }
// // }

// // (parseInt('123xyz'));

// // var count = [1,,3]
// // console.log(count);console.log

// // function func1(){
// //     const a = 8;
// //     const b = 7;
// //     const c = 9;
// //     const d = 2;
    
// //     const e = a+(b-c)*d;
// //     console.log(e)
// // }
// // func1()

// function func1(input1,input2,input3){
//     input1=3,
//     input2=5,
//     input3=[(50,30,70),
//             (30,70,99),
//         (99,20,30)]
//         console.log((input1+input2+input3[0]),(input1+input2+input3[1]),(input1+input2+input3[2]));
// }
// func1()


// // Take input from user
// let totalClasses = parseInt(prompt("Enter total number of classes:"));
// let attendedClasses = parseInt(prompt("Enter number of classes attended:"));
// let hasMedicalCause = prompt("Do you have a medical cause? (Y/N)").toLowerCase();

// // Calculate attendance percentage
// let attendancePercentage = (attendedClasses / totalClasses) * 100;

// // Check if student can sit in exam or not based on attendance percentage and medical cause
// if (hasMedicalCause === 'y' && attendancePercentage >= 60) {
//   console.log("True");
//   document.write('<h1>True</h1>')
// } else if (attendancePercentage >= 75) {
//   console.log("True");
//   document.write('<h1>True</h1>')
// } else {
//   console.log("False");
//   document.write("<h1>False</h1>")
// }

let n = parseInt(prompt('Enter Your Value'));
let reverse = 0;

while (n > 0) {
  let digit = n % 10;
  reverse = reverse * 10 + digit;
  n = Math.floor(n / 10);
}

console.log("Reverse of the number: " + reverse);
document.write(`<h1>Output: ${reverse}</h1>`)