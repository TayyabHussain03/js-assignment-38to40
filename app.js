// **********QUESTION 1*********

// function pow(a,b){
//  var res=Math.pow(a,b);
//  console.log(res);
// }
// pow(5,2);


// **********QUESTION 2**********

// var input = prompt("Enter a year and see that whther the year is leap year or not")
// function leapYear(){
//     if (input % 4 == 0 && input % 100!=0) {
//     alert(input + " is a Leap year");}

//     else if (input % 100 == 0 && input % 400 == 0){
//     alert(input + " is a Leap year");}
    
//     else {
//     alert(input + " is not a Leap year");
//     }
//     };
//     leapYear()


// **********QUESTION 3**********

// var a = 5; 
// var b = 6; 
// var c = 7; 
// var s;
// function two(a,b,c,s){
//     function one(a,b,c){
//         var s=(a + b + c)/2;
//         return s;
//     }
//     s = one(a,b,c);
//     console.log(s);

//     var area= (s*((s-a)*(s-b)*(s-c)));
//     return area;
// }
// var area= two(a,b,c,s);
// console.log(area);


// **********QUESTION 4**********

// function main(){
//     var english=+prompt("Enter English marks");
//     var maths=+prompt("Enter Maths marks");
//     var computer=+prompt("Enter Computer marks");
//     var avg;
//     var per;
//     function average(a,b,c){
//         var aver =a+b+c;
//         return aver;
//     }
//     avg =average(english,maths,computer)
//     console.log(avg);
//     function percentage(a){
//      var  percent=(a/300)*100;
//      return percent;
//     }
//     per= percentage(avg);
//     console.log(per);
// }
// main();


// **********QUESTION 5**********

// function check(){
//         var char=prompt("Enter a character");
//         var name ="abcdefghijklmnopqrstuvwxyz";
//         console.log(name.length);
//         for(var i=0;i<name.length;i++){
//             var charCheck=name[i];
//             if(char==charCheck){
//                 console.log("Index is "+i);
//                 break;
//             }
//            else{
//             "invalid  input";
//             }
//         }
        
//     }
//     check();
