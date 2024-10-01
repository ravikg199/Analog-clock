const hr = document.getElementById('hour');
const min = document.getElementById('minute');
const sec = document.getElementById('second');


setInterval(() => {

    let date = new Date();
    let hour = date.getHours() * 30;
    let minute = date.getMinutes() * 6;
    let second = date.getSeconds() * 6;


    hr.style.transform = `rotatez(${(hour) + (minute / 12)}deg)`;
    min.style.transform = `rotatez(${minute}deg)`;
    sec.style.transform = `rotatez(${second}deg)`;



}
)
