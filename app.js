var validation=(event)=>{
    //password should be minimum 8 charcters(done)
    var len=document.querySelector("#pwd").value.length;
   
    if(len>=8){
        document.querySelector('#pwd1').classList.remove('error');
        document.querySelector('#pwd1').classList.add('right');

    }
   else{
    document.querySelector('#pwd1').classList.remove('right');
        document.querySelector('#pwd1').classList.add('error');
   }
   //for password should be start with upper case Letter(done)
   var firstChar=document.querySelector("#pwd").value;
   
   if(firstChar>='A' && firstChar<='Z' && len==1){
    document.querySelector('#pwd2').classList.remove('error');
    document.querySelector('#pwd2').classList.add('right');
   }
   if(!(firstChar>='A' && firstChar<='Z')){
    if(len==0){
        document.querySelector('#pwd2').classList.remove('right');
    document.querySelector('#pwd2').classList.add('error');
    }
   }
   //for password should be only one symbol
   
   var count=0;
   if(len==0){
    document.querySelector("#pwd3").classList.remove('right');
    document.querySelector("#pwd3").classList.add('error'); 
   }
   else{
      for(var j=0;j<firstChar.length;j++){
        if((firstChar.charAt(j)=='$')||(firstChar.charAt(j)=='@')||(firstChar.charAt(j)=='*')||(firstChar.charAt(j)=='%')||(firstChar.charAt(j)=='^'))
        {
            count=count+1;
        }
      }
      if(count==2){
        document.querySelector("#pwd3").classList.remove('right');
    document.querySelector("#pwd3").classList.add('error'); 
      }
      else{
    for(var i=0;i<firstChar.length;i++){
    
    if((firstChar.charAt(i)=='$')||(firstChar.charAt(i)=='@')||(firstChar.charAt(i)=='*')||(firstChar.charAt(i)=='%')||(firstChar.charAt(i)=='^'))
    {
       document.querySelector("#pwd3").classList.remove('error');
       document.querySelector("#pwd3").classList.add('right');
       
       break;
       
    }
    else{
        document.querySelector("#pwd3").classList.remove('right');
    document.querySelector("#pwd3").classList.add('error'); 
    }
   
    
   }
}

}
  //should minimum have one number(done)
 if(len==0){
    document.querySelector("#pwd4").classList.remove('right');
    document.querySelector("#pwd4").classList.add('error'); 
 }
  else{for(var i=0;i<firstChar.length;i++){
    if((firstChar.charAt(i)=='0')||(firstChar.charAt(i)=='1')||(firstChar.charAt(i)=='2')||(firstChar.charAt(i)=='3')||(firstChar.charAt(i)=='4')||(firstChar.charAt(i)=='5')||(firstChar.charAt(i)=='6')||(firstChar.charAt(i)=='7')||(firstChar.charAt(i)=='8')||(firstChar.charAt(i)=='9'))
    {
       document.querySelector("#pwd4").classList.remove('error');
       document.querySelector("#pwd4").classList.add('right');
       break;
    }
    else{
        document.querySelector("#pwd4").classList.remove('right');
    document.querySelector("#pwd4").classList.add('error'); 
    }
    
   }
}
 //should always end with a number(done)
 if((firstChar.charAt(len-1)=='0')||(firstChar.charAt(len-1)=='1')||(firstChar.charAt(len-1)=='2')||(firstChar.charAt(len-1)=='3')||(firstChar.charAt(len-1)=='4')||(firstChar.charAt(len-1)=='5')||(firstChar.charAt(len-1)=='6')||(firstChar.charAt(len-1)=='7')||(firstChar.charAt(len-1)=='8')||(firstChar.charAt(len-1)=='9'))
   {
    document.querySelector("#pwd5").classList.remove('error');
       document.querySelector("#pwd5").classList.add('right');
   }
   else{
     document.querySelector("#pwd5").classList.remove('right');
       document.querySelector("#pwd5").classList.add('error');
   }
}
//for onkeypress uppercase validation
/*var uppercase=(event)=>{
    var len=document.querySelector("#pwd").value.length;
  
   if(event.keyCode>=65 && event.keyCode<=90 && len==0){
    document.querySelector('#pwd2').classList.remove('error');
   document.querySelector('#pwd2').classList.add('right');
    }
   if(!(event.keyCode>=65 && event.keyCode<=90 )){
    if(len==0){
    document.querySelector('#pwd2').classList.remove('right');
    document.querySelector('#pwd2').classList.add('error');}
  }
    else{
    
   }
  
  

 }*/
 var render=()=>{
    var str=document.querySelector("#submit").value;
    if((str=="Yes")||(str=="yes")||(str=="YEs")||(str=="YES")||(str=="yEs")||(str=="yeS")||(str=="yES"))
    {
        location.reload();
    }
    if((str=="No")||(str=="NO")||(str=="no")||(str=="nO"))
    {
        location.reload();
    }
 }