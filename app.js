// CHAPTER 21 CHANGING CASE
// Q 1
// var allLower = userInput.toLowerCase();
// Q 2
// var x = "MAHEEN MALIK";
// console.log(x.toLowerCase());
// var x = "MAHEEN";
// x = x.toLowerCase();
// console.log(y);  
// Q 3
// var y = "maheen";
// y = y.toUpperCase();
// console.log(y); 
// Q 4
// var string = "MY NAME IS MAHEEN";
// var result = string.toLowerCase();
// console.log(result);
// Q 5 


// Q 6
// var string = "maheen";
// string = string.toUpperCase();
// alert(string);
// Q 7 
// var cityName ="kARACHI";
// var firstChar = cityName.slice(0,1).toUpperCase();
// var remainingChar = cityName.slice(1).toLowerCase();
// var combineWord = firstChar + remainingChar;
// alert(combineWord);

// CHAPTERS 22-25 STRINGS 
// Q 1
// var variable = "caption";
// var firstVar = variable.slice(0,1);
// var remainVar = variable.slice(3);
// console.log(firstVar + remainVar);
// Q 2 
// var  about = " my name is maheen";
// var result = about.indexOf("maheen");
// console.log(result);
// Q 3
// var animal = "elephant";
// var seg = animal.slice(2,6);
// console.log(seg);
// Q 4
// var city = "I live in karachi";
// var result = city.indexOf("karachi");
// console.log(result);
// Q 5
// var cityToCheck = "karachi";
// var numChars = cityToCheck.length;
// var seg = cityToCheck.slice(1, numChars - 3);
// console.log(seg);


// // Q 6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);
// Q 7
// var text = "To  or not to be .";
// var indx = text.lastIndexOf("be");
// console.log(indx);
// // 
// Q 8
// var text = "lets go go go !.... ";
// console.log(text.indexOf("go"));
// console.log(text.lastIndexOf("go"));
// Q 9
// // q 10
// var string = "abcde";
// console.log(string.charAt(2)); 
// Q 11
// var city = "i live in karachi";
// var Cha = city.charAt(10);
// console.log(Cha);
// q 12
// var str = "faria";
// var cha = str.charAt(str.length-1);
// console.log(cha);
// Q 13
// var input = "Maheen";
// var cha = input.charAt(5);
// console.log(cha);
// Q 14
// var character = "maheen";
// if(character.charAt(3) === "e"){
//     console.log("right")
// }
// Q 15
// var str = "i dont understand why you dont say no tell me ";
// for(var i = 0; i < str.length; i++){
//     if(str.slice(i, i + 2) === "no"){
//       str = str.slice(0,i) + "yes." + str.slice(i+2);
//     }
// }
// console.log(str);

// Q 16
// var str = "i have 1 apple";
// var newStr = str.replace("1","one");
// console.log(newStr);
// // Q 17
// var string = "i live in karachi . karachi is the biggest city";
// var newStr = string.replaceAll("karachi","lahore");
// console.log(newStr);

// var text = "My name is maheen";
// for(i=0;i<text.length;i++){
//     console.log(text.slice(i,i+5));
// }



// CHAPTER 26 ROUNDING NUMBERS
// Q 1
// var number = 2.6;
// console.log(Math.round(number));
// Q 2
// var number = 2.4;
// console.log(Math.ceil(number));
// Q 3
// var number = 2.9;
// console.log(Math.floor(number));
// Q 4
// var number = 2.5;
// var result = Math.round(number);
// console.log(result);
// Q 5
// var num = .5;
// console.log(Math.floor(num));
// CHAPTER 27 RANDOM Number
// Q 1
// console.log(Math.random() * 50);
// Q 2
// var num = Math.random()*3;
// console.log(num);
// Q 3
// var user = prompt("enter");
// var run = Math.random() * 7 ;
// var floor = Math.floor(run);
// if(floor === 1){
//     console.log( user +"one");
// }
// else if(floor === 2){
//     console.log( user + "two");
// }
// else if(floor === 3){
//     console.log( user + "three");
// }
// else if(floor === 4){
//     console.log( user + "four");
// }
// else if(floor === 5){
//     console.log( user + "five");
// }
// else if(floor === 6){
//     console.log( user + "six");
// }

// Q 4
// var headuser = prompt("enter headuser");
// var tailuser = prompt("enter tailuser");
// var toss = Math.random()*2;
// var floor = Math.floor(toss);
// if(floor === 0)
// {
//     alert("head" + " " + headuser + "win the toss")
// }else{
//     alert("tail" + " "+ tailuser + "win the toss")
// }
// CHAPTER 28/29 CONVERTI NG STRING 
// Q 1
// var string = "9";
// console.log(Number(string));
// Q 2
// var str = "10";
// console.log(Number(str));
// Q 3
// var floatingstringnum = "2.341";
// console.log(Number(floatingstringnum));
// Q 4
// var num = "23577";
// var result =Number(num);
// console.log(result);
// console.log(typeof(result));
// Q 5
// var
// var num = 56;
// console.log(num.toString());
// Q6
// var value = 42;
// console.log(value.toString());
// Q 7
// var string = "3.14";
// var result = Number(string);
// console.log(result);
// CHAPTER 30 CONTROLLING TE LENGTH OF DECIMALS
// Q 1
// var num = 3.364356;
// var newNum = num.toFixed(4);
// console.log(newNum);
// Q 2
// var number = 3.346573;
// number = number.toFixed(2);
// number = Number(number);
// console.log(number);
// Q 3 skip 
// Q 4
// var number = 5.43856344469894;
// var result = number.toFixed(2);
// result = result.toString();
// console.log(result);
