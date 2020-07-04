function myfunction(val){
document.getElementById("d").value+=val;
}

function splitarray(){
var d = document.getElementById("d").value;
var e= d.split(" ");
b=e[1];
if (b=='+'){
      document.getElementById("d").value=add();
}
else if(b=='-'){
      document.getElementById("d").value=sub();
}
else if(b=='/'){
     document.getElementById("d").value=div();
}
else if(b=='*'){
      document.getElementById("d").value=mul();
}
else if(b=='%'){
      document.getElementById("d").value=mod();
}
}

function add(){
var d = document.getElementById("d").value;
var e= d.split(" ");
var a=parseInt(e[0]);
var b=parseInt(e[2]);
var r=a+b;
return r;

}

function sub(){
      var d = document.getElementById("d").value;
      var e= d.split(" ");
      var a=parseInt(e[0]);
      var b=parseInt(e[2]);
      var r=a-b;
      return r;
      
      }


function mul(){
      var d = document.getElementById("d").value;
      var e= d.split(" ");
      var a=parseInt(e[0]);
      var b=parseInt(e[2]);
      var r=a*b;
      return r;
            
      }
      

function div(){
      var d = document.getElementById("d").value
      var e= d.split(" ");
      var a=parseInt(e[0]);
      var b=parseInt(e[2]);
      var r=a/b;
      return r;
                  
      }

function mod(){
      var d = document.getElementById("d").value;
      var e= d.split(" ");
      var a=parseInt(e[0]);
      var b=parseInt(e[2]);
      var r=a%b;
      return r;                  
      }

function absolute(){
var d=document.getElementById("d").value;
var e=d.split(" ");
var a=e.length
if(a>1){
b=e[2];
 document.getElementById("d").value=b;
}
else{
 document.getElementById("d").value=d;
}
}

function squareroot(){
var d=document.getElementById("d").value;
b=parseInt(d);
e=Math.sqrt( b );
document.getElementById("d").value=e;
}


function clr(){
document.getElementById("d").value=''
}


function validate1(){
      var a = document.getElementById("fname").value
      var letters = /^[A-Za-z]+$/;
      if(a.match(letters)){
            document.getElementById("demo").innerHTML="verified";
      }
      else{
            document.getElementById("demo").innerHTML="unverified";
      }
}

function  validate2(){
      var b=document.getElementById("lname").value
      var letters = /^[A-Za-z]+$/;
      if(b.match(letters)){
            document.getElementById("1").innerHTML="verified";
      }
      else{
            document.getElementById("1").innerHTML="unverified";
      }
}

function validate()
{
        var a=document.getElementById("fname").value
        var letters = /^[A-Za-z]+$/;
if(a.match(letters)){
    alert("accepted");
}
else{
     alert("not accepted");
}
}


function validate1()
{
    var c=document.getElementById("mail").value
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(c.match(email)){
   alert("correct");
}
else{
  alert("not correct");
}
}

function validate2()
{
    var b=document.getElementById("phoneno").value
    var num = /^\d{10}$/;
if(b.match(num)){
   alert("valid number");
}
else{
  alert("invalid number");
}
}
function validation1()
{
var s = document.getElementById('fname').value;
var d = document.getElementById('mail').value;
var f = document.getElementById('phoneno').value;
 if(s == " " || d == " " || f == " ")
{
alert("wanted");
}
else
{
   return true;
}
}


function checkpalindrome() {
var revStr = "";
var str = document.getElementById("str").value;
var i = str.length;
for(var j=i; j>=0; j--) {
revStr = revStr+str.charAt(j);
}
if(str == revStr) {
alert(str+" is true");
}
else{
alert(str+" is false");
}
}

function checkAnagram(string1, string2){
  var str1 = document.getElementById("string1").value;
  var str2 = document.getElementById("string2").value;
  str1 = str1.replace(/[^\w]/g, '').toLowerCase();
  str2 = str2.replace(/[^\w]/g, '').toLowerCase();

  var newstring1 = str1.toLowerCase().split('').sort().join();
  var newstring2 = str2.toLowerCase().split('').sort().join();

  if(newstring1 == newstring2){
    alert("String is Anagram");
  }
  else{
    alert("String is Not Anagram");
  }

}

function randnum(){
 document.getElementById("l").value=Math.floor("input1").value=Math.floor(Math.random()*Math.floor(1000));
document.getElementById("m").value=Math.floor("input2").value=Math.floor(Math.random()*Math.floor(1000));
}



