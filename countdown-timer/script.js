const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minutesCount = document.getElementById('minutes');
const secondsCount = document.getElementById('seconds');
const newYearCount =document.getElementById('year');

function countDown( ){
  
  const currentDate = new Date();

  const newYears = ((currentDate.getFullYear())+1);

  const newYearDate = new Date(`Jan 1 ${newYears}`); 

  const totalSeconds = (newYearDate- currentDate)/1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds =Math.floor(totalSeconds) %60;

  const year = Math.floor(newYears);

  daysCount.innerHTML = formateTime(days);
  hoursCount.innerHTML = formateTime(hours);
  minutesCount.innerHTML = formateTime(minutes);
  secondsCount.innerHTML = formateTime(seconds);
  newYearCount.innerHTML = formateTime(year);

}

function formateTime(time) {
  return time <10 ? `0${time}` : time;}

// initial call
countDown();

setInterval(countDown,1000);