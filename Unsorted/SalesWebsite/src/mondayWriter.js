var currentDate = new Date();
//var currentDate = new Date(2017, 1, 6, 17, 30, 0 , 0);

//  The start date of the first session in term
//  We set the time to 8:30 when the session ends so that's when the
//  site ticks over
var sessionStartDate = new Date(2017, 0, 16, 20, 30, 0, 0);

function daysBetween(date1, date2) {
  //  A single day in milliseconds
  var oneDay = 1000 * 60 * 60 * 24;

  var date1Ms = date1.getTime();
  var date2Ms = date2.getTime();

  var differenceMs = date2Ms - date1Ms;

  // Return difference in days
  return Math.floor(differenceMs / oneDay);
}

//  Find the session to display always rounding to the next week
//
//  sesssionsList is defined in data/sessionList.js
//
function closest_session(testDate, startDate, sessionsList) {

  var defaultStart = "monday's session: ";

  var daysDiff = daysBetween(startDate, testDate);
  if (daysDiff < 0) return defaultStart + sessionsList[0];

  var index = Math.floor(1 + daysDiff / 7);

  if (index >= sessionsList.length) {
    return "no more sessions this term!";
  }
  return defaultStart + sessionsList[index];
}

var txt = closest_session(currentDate, sessionStartDate, sessionsList);

//  Replace div in html with result from function
$("#this_session").text(txt);
