var myTimer = setInterval(startTime, 500); //Half second update for clock
var slideTimer = setInterval(slideImage, 4000); //5 second loop for carousel

function main(){
    document.getElementById("discountImg").addEventListener("mouseover", displayDiscountOn);
    document.getElementById("discountImg").addEventListener("mouseout", displayDiscountOff);
}

function checkTime(i) { // add zero in front of numbers < 10
    if (i < 10) {
        i = "0" + i;
    }  
    return i;
}

function convertTime(curr_hour) { //Makes clock 12 hour
    if (curr_hour >= 12) {
        return (curr_hour - 12);
    }
}

function startTime() {
    var today = new Date(), //Gets the fresh time and date and assigns them to variables
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
    var curr_time = curr_day + "/" + curr_month + "/" + curr_year + " | " + convertTime(curr_hour) + ":" + curr_minute + ":" + curr_second; //Puts time into 1 variable
    document.getElementById("time").innerHTML = curr_time;  //Puts time into html
}

function displayDiscountOn(){//Rollover image
    document.getElementById("discountImg").src = "images/homeOffer.png";
}

function displayDiscountOff(){//Rolloff image
    document.getElementById("discountImg").src = "images/dailyDiscount.png";
}

    var currItem = 0;//Outside of function to prevent it being 0 every time function is called
function slideImage(){ //Image carousel, loops between 5 images
    var myList = ["slider1.png","slider2.png","slider3.png","slider4.png","slider5.png"]; //Array with all images
    document.getElementById("carousel").src = "images/" + myList[currItem]; //Change image
    currItem += 1;
    if (currItem == 5){ //reset currItem to 0 when at end of array
        currItem = 0;
    }
}