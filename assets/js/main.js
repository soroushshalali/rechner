let x=0;
let y=0;
let z;
let op = 0;
let re=0;
let dot=0;
let se = 99 ;
function mal(){
    op=1;
    re=1;
   
}
function teil(){
   op=2;
   re=1;
}
function pluss(){
   op=3;
   re=1;
}
function minuss(){
   op=4;
   re=1;
}
function eins(){
    



    if ( re==0 ){
        x= x + "1" ;
        
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "1";
        document.getElementById("monitor").innerHTML=y;
    }
    
    // se=x.search("0");
    // console.log(se);
    // console.log(x);
    // if (se == 0){
    //     x = x.slice(1);
    // }

     
}
function zwei(){
    if (re==0 ){
        x= x + "2";
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y=y + "2";
        document.getElementById("monitor").innerHTML=y;
    }

    
}
function drei(){
  
    if (re==0 ){
        x=x + "3";
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "3";
        document.getElementById("monitor").innerHTML=y;
    }
}
function vier(){
  
    if (re==0){
        x= x + "4" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "4";
        document.getElementById("monitor").innerHTML=y;
    }
}
function fünf(){
  
    if (re==0){
        x= x + "5" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "5";
        document.getElementById("monitor").innerHTML=y;
    }
}
function sechs(){
  
    if (re==0){
        x= x + "6" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "6";
        document.getElementById("monitor").innerHTML=y;
    }
}
function sieben(){
  
    if (re==0){
        x= x + "7" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "7";
        document.getElementById("monitor").innerHTML=y;
    }
}
function acht(){
  
    if (re==0){
        x= x + "8" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "8";
        document.getElementById("monitor").innerHTML=y;
    }
}
function neun(){
  
    if (re==0){
        x= x + "9" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "9";
        document.getElementById("monitor").innerHTML=y;
    }
}
function nuull(){
  
    if (re==0){
        x= x + "0" ;
        (x==0) ? x=0 : "" ;
        document.getElementById("monitor").innerHTML=x;
        
    }
    else {
        y= y + "0";
        (y==0) ? y=0 : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
}
function punkt(){
    dot=1;
    if (re==0){
        x= x + "." ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + ".";
        document.getElementById("monitor").innerHTML=y;
    }
}
function macht(){
    console.log(x);
    console.log(y);

    x=parseFloat(x);
    y=parseFloat(y);
    
    if (op==1){
        z=x*y;
        document.getElementById("monitor").innerHTML=z;
    }
    else if (op==2){
        z=x/y;
        document.getElementById("monitor").innerHTML=z;
    }
    else if (op==3){
        z=x+y;
        document.getElementById("monitor").innerHTML=z;
    }
    else if (op==4){
        z=x-y;
        document.getElementById("monitor").innerHTML=z;
    }
    console.log(z);
    x=z;
    y=0;
    re=0;
    z=0;
}
 function cle(){
    document.getElementById("monitor").innerHTML="0";
    x=0;
    y=0;
    re=0;
    z=0;
 }









