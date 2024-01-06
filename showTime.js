

const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let minite = time.getMinutes();
    let second = time.getSeconds();
    pm = 'PM'

    if(hour >= 12){
        if(hour > 12) hour -= 12;
        pm = "PM";
    } else if (hour === 0) {
        hr = 12;
        pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = minite < 10 ? "0" + minite : minite;
    sec = second < 10 ? "0" + second : second;
    currentTime = `${hour} : ${min} : ${sec} ${pm}`;
    document.getElementById('clock').innerHTML = currentTime;

}
setInterval(showTime, 1000)
showTime()