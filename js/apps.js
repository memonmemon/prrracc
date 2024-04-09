// var number = prompt("Enter number")
// if(number < 20){
//     console.log
//     ("number is negative");
// }
// else{
//     document.write("number is positive");
// }
// var number = prompt("enter your grade")
// if(number >= 80){
//     document.write("your a grade arrived");
// }
// else if(number >= 60){
//     document.write("your b grade arrived");
// }
// else{
//     document.write("you are fail");
// }
// var number = prompt("play final")
// if(number >= 2){
//     document.write("play final");
// }
// else{
//     document.write("out");
// }
// var num = prompt("add number")
// var num1 = prompt("add table number")
// var reminder = num % num1;
// if(reminder == 0){
//     document.write(num + " is  divided by" + num1);
// }
// else{
//     document.write(num + "is not divided by" + num1);
// }
    // var t1 = prompt("add number")
    // var t2 = prompt("add table")
    // var rem = t1 % t2;
    // if(rem == 0){
    //     document.write(t1 + " is divide by " + t2);
    // }
    // else{
    //     document.write(t1 + " not divide " + t2);
    // }

// var age = prompt("user age");
// var gender = prompt("user gender");
// if(age >= 15 || gender == "men" ){
//     document.write("bara he");
// }
// else{
//     document.write("chota he");
//     }

// var day = prompt("day");
// if(day > 30){
//     document.write("wrong info");
// }
// else if(day > 20 || day <= 30){
//     document.write("3rd");
// }
// else{
//     document.write("1st");
// }
// var month1 = "jan"
// var month2 = "feb"
// var month3 = "march"

// var months =["jan","feb","march","april","may"];
// console.log(months[1]);
// months[3] = "the month of spring"
// document.write(months[0] + " it is a big month. <br>");
// document.write(months[1] + " it is a small month. <br>"); 
// document.write(months[2] + " it is a long month. <br>"); 
// document.write(months[3] + " the month of heat. <br>"); 


// months.push("june","july", "aug");
// console.log("months after pops-->",months );


// months.pop("aug")
// console.log("months after pop-->" , months);

// months.unshift("moharram", "saffar")
// console.log("months after unshift-->" , months);


// months.shift()
// console.log("months after shift-->" , months);

// var months = months.length;
// console.log(months);

// months.length = 4;
// console.log(months);
// var examsmarks = prompt("enter your num");
// if(examsmarks >= 70) {
//     document.write("well");
// }  
// else{
//     document.write("bad");
// }
// var marks = prompt("marks");
// if(marks < 45){
//     document.write("fail")
// }
// else{
//     document.write("pass")
// }
// var fruts = ["apple","mango","grapes","banana"];
// console.log(fruts[0]);
// // fruts[1] = "lemon";
// document.write(fruts[1] +  " strong fruits");
// // fruts.unshift("chiku","guawa")
// // console.log("after unshift..>", fruts);
// fruts.splice(2,0,"orange");
// console.log("after splice add..>",fruts);
// fruts.splice(2,1);
// // fruts.splice(2,1);
// console.log("after splice remove..>",fruts);
// fruts.splice(2,1,"aaa",);
// console.log("after splice remove and add..>",fruts);
// var copy = ["aaa","bbb","ccc","ddd"];
// var copy = copy.slice(0,3);
// console.log("using slice..>", copy);

// var foods = ["biryani","pulaao","fish","naan"]
// // console.log(foods[1]);
// document.write(foods[2] + " delicious " );
// foods.unshift("tikka","barb");
// // console.log("after unshift..>",foods);
// foods.splice(1,0,"coldrink");
// // console.log("after splice..>" ,foods);


// for (var a = 0; a <= 20; a++){
//     if(a % 2 == 1){
//         console.log(a)
//     }
// }


// var num = 0;
// 1 3 6 10 15 21 28 36 45
// for (var a = 0; a < 10; a++)
// {
    // console.log(a, a + 1);
    // num = num + a;
    // console.log(num)
// }
// 9,8,7,6,5,4,3,2,1
// for(var a = 1; a <= 10;a++){console.log(10-a);}
// alert('wait');
// var original = ["anus","ali","adeel","moin","samar"]
// var local = ["zain","zaid","moin","ali","nisar","samar"]
// var duplicate = []
// for(a = 0;a <original.length;a++){
//     for(j = 0;j <local.length;j++){
//         if(original[a] == local[j]){
//             duplicate.push(original[a])
//         }
//     }
// }
// console.log("these names are same ..>",duplicate);
for(var a = 0;a <=100;a+10){
    for(var b = a;b <a+10;b++){
        console.log(b + " ");

    }
}