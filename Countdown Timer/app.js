
 



 


// This will Set the date we're counting down to 
 // This variable  were using the newDate method
 // and passing in the date we will be counting down to 
 //and getTime() method will help us count the milliseconds.
   var countDownDate = new Date("Dec 31, 2023 15:37:25").getTime();


   // This function will Update the count down every
   // 1 second  this keeps the countdown going in 
   //realtime second by second.
   var x = setInterval(function(){

     // This will get todays date and time
    var now = new Date().getTime();

    /* this variable will store the length of time between todays 
    date and the countdown date  so were subtracting the current time from
     predetermined time  */
   var distance = countDownDate - now;
 
 /* calculations for Days, hours,minutes  and seconds.
we will be using Math.floor which will round down whichever number we get 
 from the calculation as a result it would be rounded into a whole number instead of
  a decimal because when we are displaying days , hours and minutes we need
  the result as a whole number. */

 var days = Math.floor(distance/ (1000* 60* 60* 24));

 var hours = Math.floor (( distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

 var minutes = Math.floor(( distance % (1000 * 60 * 60 )) / (1000 * 60));

var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

document.getElementById("time").innerHTML =
'<div>' + days +'<span>D</span></div>' + 
'<div>' + hours +'<span>H</span></div>' +
'<div>' + minutes + '<span> M</span></div>' +
'<div>' + seconds + '<span> S</span></div>' ;
 

if (distance< 0){
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
}

}, 1000);