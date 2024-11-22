var time = document.querySelector(".time-container");

(function showDate(){
    var date = document.querySelector(".date-container");
    var todayDate = new Date().toDateString();
    date.innerText = todayDate;
}())

// 03 : 03 : 33 AM/PM
function showTime(){
    var clockTime = new Date().toLocaleTimeString([] , {hour: '2-digit' , minute : '2-digit' , second : '2-digit'});
    time.innerText = clockTime;
}

var inetervalRef;
function startTime(){
   inetervalRef = setInterval(showTime , 1000)
}

function stopTime(){
    clearInterval(inetervalRef)
}