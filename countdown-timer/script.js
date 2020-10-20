const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minutesCount = document.getElementById('minutes');
const secondsCount = document.getElementById('seconds');

const newYears = "1 Jan 2021";

function countDown( ){
  
  const currentDate = new Date();
  const newYearDate = new Date(newYears);  

  const totalSeconds = (newYearDate- currentDate)/1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds =Math.floor(totalSeconds) %60;

  daysCount.innerHTML = formateTime(days);
  hoursCount.innerHTML = formateTime(hours);
  minutesCount.innerHTML = formateTime(minutes);
  secondsCount.innerHTML = formateTime(seconds);

}

function formateTime(time) {
  return time <10 ? `0${time}` : time;}

// initial call

countDown();

setInterval(countDown,1000);