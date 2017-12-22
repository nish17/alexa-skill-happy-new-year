// function wishTime(){
//   var dateIST = new Date();
//   var time = {}
//   time.hour = dateIST.getUTCHours + 5;
//   time.minutes = dateIST.getUTCMinutes + 30;
//   //date shifting for IST timezone +5 hours and 30 minutes
//   console.log('time.hour '+ time.hour);
//   console.log('time.minutes '+time.minutes);
//   if (time.hour < 12) return ' Good morning ';
//   else if(time.hour < 18) return ' Good noon ';
//   else return ' Good evening ';
// }
// console.log(wishTime());


// Date.daysBetween = function( date1, date2 ) {
//   //Get 1 day in milliseconds
//   var one_day=1000*60*60*24;

//   // Convert both dates to milliseconds
//   var date1_ms = date1.getTime();
//   var date2_ms = date2.getTime();

//   // Calculate the difference in milliseconds
//   var difference_ms = date2_ms - date1_ms;
    
//   // Convert back to days and return
//   return Math.round(difference_ms/one_day); 
// }

// //Set the two dates
// var y2k  = new Date(2000, 0, 1); 
// var Jan1st2010 = new Date(y2k.getFullYear() + 10, y2k.getMonth(), y2k.getDate());
// var today= new Date();

// var diff = 31 - today.getDate();
var countDownDate = new Date("Jan 1, 2018 00:00:00").getTime();
var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log(date);
// console.log(time);

console.log( days, hours, minutes, seconds);