function rotateClockHands(){
    var now = new Date();
    var hour = now.getHours() %12;
    var second = now.getSeconds();
    var minute = now.getMinutes();

    var hourHand = document.getElementById("hour");
    var minuteHand = document.getElementById("minute");
    var secondHand = document.getElementById("second");

    var hourRotations = (hour *30)+(minute /2);
    var minuteRotations = (minute * 6) + (second / 10);
    var secondRotations = (second*6);

    hourHand.style.transform = "rotate(" + hourRotations + "deg)";
    minuteHand.style.transform = "rotate(" +minuteRotations + "deg)";
    secondHand.style.transform = "rotate(" +secondRotations + "deg)";
}

setInterval(rotateClockHands,1000);