// for(var a = 0;a < 3;a++){
//     for(var b =0;b < 2;b++){
//         console.log(a + "a=> b=>", a+b);
//     }
// }


// var firstName = ["anus","adeel","moin"];
// var lastName = ["younus","noor","nasir"];
// var fullName =[];

// for(var i = 0; i < firstName.length;i++){
//         var feel = firstName[i] + " " + lastName[i];
//          fullName.push(feel);
//     }
//     console.log(fullName);

// var star = "dawate islami";
// console.log(star.length);
// console.log(star[4]);



// var arr = [1,2,3,4,5,6,7,8];
// console.log(arr.reverse());
// var rows = prompt("Rows");
// var col = prompt("Col");
// for(var i = 0;i < rows; i++){
//     var star = "";
// for(var j = 0; j < col; j++){
//     star = star  + "$";
// }
// document.write(i+ " " + star + "<br>");
// }
// var str = "hello";
// var strArr = str.split("");
// console.log(strArr);
// var strArrRev = strArr.reverse()
// console.log(strArrRev);
// var strArrRevJoin = strArrRev.join()
// console.log(strArrRevJoin);
// var key = "201-202-354-111-"
// console.log(key .split("-"));

// var foods = ["biryani","pulaao","bar bq"]
// console.log(foods[1]);
// document.write(foods[0] + " it is a tasty");
// foods.push("tikka","fish");
// console.log("after push..>",foods);
// foods.unshift("tikka","fish");
// console.log("after unshift..>",foods);
// foods.pop("fish");
// console.log("after pop..>",foods);
// foods.splice(2,2,"boti");
// console.log("after splice..>",foods);
// var copy = foods.slice(1);
// console.log("after slice..>",copy);
// var num = prompt("num")
// if(num < 40){
//     document.write("fail");
// }
// else{
//     document.write("pass");
// }
// var fName = ["ali","anus","arslan"];
// var laName = ["younus","younus","saleem"]
// var fullName = [];
// for(var i = 0;i < fName.length;i++){
//     var com  = fName [i] + " " + laName [i];
//     fullName.push(com);
// }
//     console.log(fullName);
//  var fmonth = ["aa","bb","cc"]
//  var lmonth = ["dd","ee","ff"]
//  var full =[]
//  for(var a = 0;a <fmonth.length;a++){
//     var not = fmonth[a] + " " + lmonth[a];
//     full.push(not);
//  }
//  console.log(full);
// for(var i = 0; i < 10;i++){
//     console.log("aaa");
// }
// var same = "salam"
// var sameArr = same.split("")
// console.log(sameArr);
// var sameArrJoin = sameArr.join("")
// console.log(sameArrJoin);
// var sameArrrev = sameArr.reverse("")
// console.log(sameArrrev);
var fname = ["moin","hassan"]
var fatheName = ["nasir","ashraf"]
var full=[]
for(var a =0; a <fname.length;a++){
    var com = "Name: " + fname[a] + "<br>"   + "Father Name: " + fatheName[a] + "<br>";
  full.push(com);  
}
document.write(full);