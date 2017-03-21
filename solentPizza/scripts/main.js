function main(){
    console.log("Main Working")
}

function checkTime(i) { // add zero in front of numbers < 10
    "use strict";
    if (i < 10) {
        i = "0" + i
    }  
    return i;
}

function convertTime(curr_hour) {
    "use strict";
    if (curr_hour >= 12) {
        return (curr_hour - 12);
    }
}

function startTime() {
    "use strict";
    var today = new Date(),
        curr_year = today.getFullYear(),
        curr_month = today.getMonth() + 1, //Month starts at 0, add 1 to be accurate
        curr_day = today.getDate(),
        curr_hour = today.getHours(),
        curr_minute = today.getMinutes(),
        curr_second = today.getSeconds();
    curr_month = checkTime(curr_month);
    curr_day = checkTime(curr_day);
    curr_second = checkTime(curr_second);
    curr_minute = checkTime(curr_minute);
    curr_hour = checkTime(curr_hour);
    var curr_time = curr_day + "/" + curr_month + "/" + curr_year + " | " + convertTime(curr_hour) + ":" + curr_minute + ":" + curr_second;
    document.getElementById("time").innerHTML = curr_time;  
}

var myTimer = setInterval(startTime, 500);