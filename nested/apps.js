// var names1 = ["anus", "ahmed","bakr", "zaid","hamza"];
// var names2 = ["umar", "zain","farhan", "tariq","anus", "bilal", "samar", "ahmed"];
// var duplicate = []
// for(var a = 0; a < names1.length; a++){
//     for(var s = 0; s < names2.length; s++){
//         if(names1[a] == names2[s]){
//             duplicate.push(names2[s])
//         }
//     }
// }
// console.log("these names are same..>", duplicate);
// ...........................2nd example..........
// var bonds = [111,123,342,567,124,];
// var bondsnum = [111,123,234,445,35,656,764,];
// var won = [];
// for(var i = 0;i < bonds.length;i++){
//     for(var j = 0;j < bondsnum.length; j++){
//         // console.log(bonds[i] === bondsnum[j]);
//         if(bonds[i] === bondsnum[j]){
//             won.push(bonds[i])
//         }
//     }
// }
// console.log("this is the number...>", won);


// for(var a = 0;a <= 100;a = a+10){
//         for(var b = a;b <a+10;b++){
//             console.log(b + " ");
//         }
//         console.log("<br>");
// }

// var fruits = ["mango", "apple"]
// var fruits1 = ["banana", "orange", "strawbery", "grapes", "apple"]
// var same = [];
// for(var a = 0; a < fruits.length; a++){
//     for(var b = 0; b < fruits1.length; b++){
//         if(fruits[a] == fruits1[b]){
//             same.push(fruits[a]);
//         }
//     }
// }
//     console.log("after same..>" , same);

    // for(var a = 0; a <= 50; a+5){
    //     for(var b = a; b <a+5; b++ ){
    //         document.write(b + " ");
    //     }

    // }
    var months = ["jan","feb","march"]
    var nmonths = ["april","may","jan","feb","march"]
    var same =[]
    for(var a = 0;a < months.length;a++){
        for(var i = 0;i < nmonths.length;i++){
            if(months[a] == nmonths[i]){
                same.push(months[a]);
            }
        }
    }
    console.log("there are sames..>",same);
    months.push("april","june","july");
    console.log("after pop..>",months)
    months.unshift("june","july")
    console.log("after unsshift..>",months)
    months.shift("june")
    console.log("after shift..>",months)
    months.splice(2,3,"aug")
    console.log("after splice..>",months)
    var copy = months.slice(1);
    console.log("after slice..>",copy)

    // confirm("hello");
    // alert("hello");
// for(var a =0;a <10;a++){
    // alert("anus");
    // console.log("anus");
// }