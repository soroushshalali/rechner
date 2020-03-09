let x=0;
let y=0;
let z;
let op = 0;
let re=0;
let dot=0;
let se = 1 ;
let vol , vol1 , vol2;
let volco=1 ;
let asciicode;
function keyfun(){
    asciicode=event.keyCode;
    console.log(asciicode);

    switch (asciicode){
        case 49:
            eins()
            break;

        case 50:
            zwei()
            break;

        case 51:
            drei()
            break;

        case 52:
            vier()
            break;

        case 53:
            fünf()
            break;
    
        case 54:
            sechs()
            break;
    
        case 55:
            sieben()
            break;
    
        case 56:
            acht()
            break;

        case 57:
            neun()
            break;
    
        case 48:
            nuull()
            break;
        case 46:
            punkt()
            break;

        case 42:
            mal()
            break;
        case 43:
            pluss()
            break;
        
        case 47:
            teil()
            break;  

        case 45:
            minuss()
            break;
        case 13:
            macht()
            break;
        case 32:
            macht()
            break;

        case 99:
            cle();
            break;

        case 67:
            cle();
            break;

        case 115:
            sound();
            break;

        case 83:
            sound();
            break;





    }

}
function sound(){
    vol= document.getElementById("a-16");
    vol1=document.getElementById("a-28");
    vol2=document.getElementById("a-17");
    if (volco == 1 ){
        vol.volume=0;
        vol1.volume=0;
        vol2.volume=0;
        volco=0;
        // document.getElementById("souoff").style.visibility="visible";
        // document.getElementById("souon").style.visibility="collapse";
        document.getElementById("souoff").style.display="none";
        document.getElementById("souon").style.display="block";
    }
     else{
        vol.volume=1;
        vol1.volume=1;
        vol2.volume=1;
        volco=1;
        // document.getElementById("souon").style.visibility="visible";
        // document.getElementById("souoff").style.visibility="collapse";
        document.getElementById("souoff").style.display="block";
        document.getElementById("souon").style.display="none";
        
     }
}
function mal(){
    op=1;
    (x!=0) ? re=1 : "";
    if (x != 0 && y != 0){
        macht();
    }

    document.getElementById("a-28").play();
    document.getElementById("a-28").currentTime=0;
   
}
function teil(){
   op=2;
   (x!=0) ? re=1 : "";
   if (x != 0 && y != 0){
    macht();
}

   
       document.getElementById("a-28").play();
    document.getElementById("a-28").currentTime=0;
}
function pluss(){
   op=3;
   (x!=0) ? re=1 : "";
   if (x != 0 && y != 0){
    macht();
}


       document.getElementById("a-28").play();
    document.getElementById("a-28").currentTime=0;
}
function minuss(){
   op=4;
   (x!=0) ? re=1 : "";
   if (x != 0 && y != 0){
    macht();
}

   
       document.getElementById("a-28").play();
    document.getElementById("a-28").currentTime=0;
}
function eins(){

    if ( re==0 ){
        x= x + "1" ;
        se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "1";
        se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
    document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function zwei(){
    if (re==0 ){
        x= x + "2";
        se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y=y + "2";
                se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }

    
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function drei(){
  
    if (re==0 ){
        x=x + "3";
        se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "3";
                se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function vier(){
  
    if (re==0){
        x= x + "4" ;
        se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "4";
                se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function fünf(){
  
    if (re==0){
        x= x + "5" ;
        se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "5";
                se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function sechs(){
  
    if (re==0){
        x= x + "6" ;
        se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "6";
                se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function sieben(){
  
    if (re==0){
        x= x + "7" ;
        se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "7";
                se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function acht(){
  
    if (re==0){
        x= x + "8" ;
        se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "8";
                se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function neun(){
  
    if (re==0){
        x= x + "9" ;
                se=x.search("0");
        (se==0) ? x = x.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=x;
    }
    else {
        y= y + "9";
                se=y.search("0");
        (se==0) ? y = y.slice(1) : "" ;
        document.getElementById("monitor").innerHTML=y;
    }
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
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
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
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
        document.getElementById("a-16").play();
    document.getElementById("a-16").currentTime=0;
}
function macht(){
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
    document.getElementById("a-17").play();
    document.getElementById("a-17").currentTime=0;
}
 function cle(){
    document.getElementById("monitor").innerHTML="0";
    x=0;
    y=0;
    re=0;
    z=0;
 }









