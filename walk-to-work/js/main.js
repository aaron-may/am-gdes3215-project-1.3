// add your API key inside the quotes on line 5
// add the latitude and longitude for your location one lines 6 and 7
// move on to adding your data requests on line 22
function weatherBalloon() {
  var key = '40e41cd2bcb2a21ae5fe764300f13159';
  var lat = '40.7831';
  var lon = '-73.9712';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}

// display weather information
function drawWeather( d ) {

  // add your specfic weather requests here

  $('.currenttemp').html( convertTemp(d.current.temp) + '&deg;' );
  $('.currentprecip').html( convertPop(d.daily[0].pop) + '&percnt; precipitation' );
  $('.currentwind').html( convertToMph(d.current.wind_speed) + ' mph wind') ;

  $('.weekforecast .day1 .firstday').html( displayDay(1) );
  $('.weekforecast .day1 .precip').html( convertPop(d.daily[1].pop) + '&percnt; precipitation' );
  $('.weekforecast .day1 .high').html( convertTemp(d.daily[1].temp.max) + '&deg;' );
  $('.weekforecast .day1 .wind').html( convertToMph(d.daily[1].wind_speed)  + ' mph wind');

  $('.weekforecast .day2 .secondday').html( displayDay(2) );
  $('.weekforecast .day2 .precip').html( convertPop(d.daily[2].pop) + '&percnt; precipitation' );
  $('.weekforecast .day2 .high').html( convertTemp(d.daily[2].temp.max) + '&deg;' );
  $('.weekforecast .day2 .wind').html( convertToMph(d.daily[2].wind_speed)  + ' mph wind');

  $('.weekforecast .day3 .thirdday').html( displayDay(3) );
  $('.weekforecast .day3 .high').html( convertTemp(d.daily[3].temp.max) + '&deg;' );
  $('.weekforecast .day3 .precip').html( convertPop(d.daily[3].pop) + '&percnt; precipitation' );
  $('.weekforecast .day3 .wind').html( convertToMph(d.daily[3].wind_speed)  + ' mph wind');

  $('.weekforecast .day4 .fourthday').html( displayDay(4) );
  $('.weekforecast .day4 .high').html( convertTemp(d.daily[4].temp.max) + '&deg;' );
  $('.weekforecast .day4 .precip').html( convertPop(d.daily[4].pop) + '&percnt; precipitation' );
  $('.weekforecast .day4 .wind').html( convertToMph(d.daily[4].wind_speed)  + ' mph wind');

  $('.weekforecast .day5 .fifthday').html( displayDay(5) );
  $('.weekforecast .day5 .high').html( convertTemp(d.daily[5].temp.max) + '&deg;' );
  $('.weekforecast .day5 .precip').html( convertPop(d.daily[5].pop) + '&percnt; precipitation' );
  $('.weekforecast .day5 .wind').html( convertToMph(d.daily[5].wind_speed)  + ' mph wind');

  $('.weekforecast .day6 .sixthday').html( displayDay(6) );
  $('.weekforecast .day6 .high').html( convertTemp(d.daily[6].temp.max) + '&deg;' );
  $('.weekforecast .day6 .precip').html( convertPop(d.daily[6].pop) + '&percnt; precipitation' );
  $('.weekforecast .day6 .wind').html( convertToMph(d.daily[6].wind_speed)  + ' mph wind');

  // $('.weekforecast .day2 .day').html( displayDay(2) );
  // $('.weekforecast .day2 .high').html( convertTemp(d.daily[2].temp.max) );
  // $('.weekforecast .day2 .precip').html( convertTemp(d.daily[2].temp.min) );
  // $('.weekforecast .day2 .wind').html(d.daily[2].wind_speed);

  // $('.weekforecast .day3 .day').html( displayDay(3) );
  // $('.weekforecast .day3 .high').html( convertTemp(d.daily[3].temp.max) );
  // $('.weekforecast .day3 .precip').html( convertTemp(d.daily[3].temp.min) );
  // $('.weekforecast .day3 .wind').html(d.daily[3].wind_speed);

  // $('.weekforecast .day4 .day').html( displayDay(4) );
  // $('.weekforecast .day4 .high').html( convertTemp(d.daily[4].temp.max) );
  // $('.weekforecast .day4 .precip').html( convertTemp(d.daily[4].temp.min) );
  // $('.weekforecast .day4 .wind').html(d.daily[4].wind_speed);

  // $('.weekforecast .day5 .day').html( displayDay(5) );
  // $('.weekforecast .day5 .high').html( convertTemp(d.daily[5].temp.max) );
  // $('.weekforecast .day5 .precip').html( convertTemp(d.daily[5].temp.min) );
  // $('.weekforecast .day5 .wind').html(d.daily[5].wind_speed);

  // $('.weekforecast .day6 .day').html( displayDay(6) );
  // $('.weekforecast .day6 .high').html( convertTemp(d.daily[6].temp.max) );
  // $('.weekforecast .day6 .precip').html( convertTemp(d.daily[6].temp.min) );
  // $('.weekforecast .day6 .wind').html(d.daily[6].wind_speed);

}


/* -----------------------------------------------
   Function for converting temp to fahrenheit
   ----------------------------------------------- */

function convertTemp(t){

  return Math.round(((parseFloat(t)-273.15)*1.8)+32);

}


/* -----------------------------------------------
   Function for converting meters/sec to miles/hour
   ----------------------------------------------- */

function convertToMph(t){

  return Math.round(t * 2.236936);

}


/* -----------------------------------------------
   Function for converting temp to fahrenheit
   ----------------------------------------------- */

function convertPop(t){

  return Math.round( t*100 );

}


/* -------------------------------------------------------
   Function for printing weather-specific class on body
   ------------------------------------------------------- */

function changeTheme(d){
  
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    $('.currentday').addClass('rainy');
    $('.caniwalk h2').html('A Bad Day for Walking or Biking');

  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    $('.currentday').addClass('cloudy');

  // if the description includes the word "sunny"  
  } else if( d.indexOf('sunny') > 0 ) {
    $('.currentday').addClass('sunny');

  // if none of those cases are true, assume it's clear
  } else {
    $('.currentday').addClass('clear');
  }

}


/* -----------------------------------------------
   Function for printing weather-specific graphic
   ----------------------------------------------- */

function printGraphic(d){
  
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    return '<img src="img/svg/Cloud.svg" alt="Cloud icon">';
  
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    return '<img src="img/svg/Cloud-Rain.svg" alt="Cloud icon">';
  
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    return '<img src="img/svg/Sun.svg" alt="Cloud icon">';
  
  // if none of those cases are true, assume it's clear
  } else {
    return '<img src="img/svg/Sun.svg" alt="Cloud icon">';
  }

}


/* -----------------------------------------------
   Function for converting time to hours/minutes
   ----------------------------------------------- */

function convertTime(t){

  var unixTimestamp = t;
  // since javascript works in milliseconds, you should convert 
  // the time into milliseconds by multiplying it by 1000.
  var date = new Date(unixTimestamp * 1000);
  // hours part from the timestamp (extra code needed to convert from military)
  var hours = (date.getHours() + 24) % 12 || 12;;
  // minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // will display time in 11:10 format
  var formatTime = hours + ':' + minutes.substr(-2);
  // send formatted date back
  return formatTime;

}


/* -----------------------------------------------
   Function for creating day of the week
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below

// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

  var d = new Date();
  var weekday = new Array();

  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var dispDay = d.getDay() + n;

  // adjust number system for numbers over 6
  // subtract 7 from totals higher than 6
  // to keep the day numbers in the array range above
  if(dispDay > 6){
    dispDay = dispDay - 7;
  }

  return weekday[ dispDay ];

}

/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}


$('.coverbutton button').click(function(){
  $('.coverpage').addClass('open');
})


