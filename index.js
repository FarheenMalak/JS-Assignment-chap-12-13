//Q # 1
var mycharacter = prompt("Enter character");
var code = mycharacter.charCodeAt(0);
var letter = String.fromCharCode(mycharacter);
if((mycharacter >= "A") && (mycharacter <= "Z")){
    alert("Entered character is an Uppercase letter which is "+ mycharacter + " and its ASCII code is " + code);
}
else if((mycharacter >= "a") && (mycharacter <= "z")){
      alert("Entered character is an Lowercase letter which is " + mycharacter + " and its ASCII code is " + code);
}
else if((mycharacter >=65) && (mycharacter <= 90)){
    alert("Entered character is a number " +mycharacter + " is the ASCII code of uppercase letter " + letter );
}
else if((mycharacter >= 97) && (mycharacter <= 122)){
    alert( mycharacter + " is the ASCII code of Lowercase letter " + letter);
}

//Q # 2
var integer1 = prompt("Enter First Integer");
var integer2 = prompt("Enter Second Integer");
if(integer1 > integer2){
    alert(integer1 + " is greater integer!");
}else if(integer2 > integer1){
    alert(integer2 + " is greater integer!");
}else{
    alert(integer1 + " is equal to " + integer2);
}

//Q # 3
var mynum = prompt("Enter Number :");
if(mynum > 0){
    alert("The Number is Positive");
}
else if(mynum === 0){
    alert("The Number is zero");
}
else{
    alert("The Number is Negative");
}

//Q # 4
var newcharacter = prompt("Enter a character:").charAt(0);
if (newcharacter == 'a' || newcharacter == 'A' || newcharacter == 'e' || newcharacter == 'E' || newcharacter == 'i' || newcharacter == 'I' || newcharacter == 'o' || newcharacter == 'O' || newcharacter == 'u' || newcharacter == 'U'){ 
alert(newcharacter + " is a Vowel!"); 
}
else if((newcharacter >= 'a' && newcharacter <= 'z') || (newcharacter >= 'A' && newcharacter <= 'Z')) { 
alert(newcharacter + " is a Consonent"); 
}
 else { 
alert("Invalid input please enter valid alphabet"); }

//Q # 5
var password = "farheen75678";
var userpassword = prompt(" Enter your Password :");
if(userpassword === ""){
    alert("Please Enter Your Password!");
}
else if(userpassword === password){
    alert('"Correct! The Password you have entered matches the original Password"');
}
else{
    alert("Incorrect Password!");}

//Q # 6 
 var greeting;
 var hour = 13;
 if(hour < 18){
     greeting = " Good day";
 }
 else{
     greeting = "Good evening";
 }
document.write(greeting + "!");

//Q # 7
var time = prompt("Enter time in 24 hour format :");
if((time >= 0000) && (time < 1200)){
    alert(" Good Morning!");
}
else if((time >= 1200) && (time < 1700)){
    alert(" Good Afternoon!");
}
else if((time >= 1700) && (time < 2100)){
    alert(" Good Evening!");
}
else{
    alert("Good Night!");
}
//end 


