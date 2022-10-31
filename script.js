window.addEventListener('DOMContentLoaded', () =>{

const deadline = '2023-01-01';

function start (endtime){
    const currentTime = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(currentTime/(1000*60*60*24));
    const hours = Math.floor((currentTime/1000/60/60)%24);
    const minutes = Math.floor((currentTime/1000/60)%60);
    const seconds = Math.floor((currentTime/1000)%60);

    return{
        'total': currentTime,
        'days': days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
      };
  }
 
start(deadline);

function setTime(selector, endtime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock,1000);

function updateClock(){
    const t = start(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
   
        if( t.total <= 0){
          clearInterval(timeInterval);
         }
      }
   }

   setTime('.timer', deadline);

});


const deadline = '2023-01-01';

function start (endtime){
    const currentTime = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(currentTime/(1000*60*60*24));
    const hours = Math.floor((currentTime/1000/60/60)%24);
    const minutes = Math.floor((currentTime/1000/60)%60);
    const seconds = Math.floor((currentTime/1000)%60);

    return{
        'total': currentTime,
        'days': days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
      };
  }
 
start(deadline);

function setTime(selector, endtime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock,1000);

function updateClock(){
    const t = start(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
   
        if( t.total <= 0){
          clearInterval(timeInterval);
         }
      }
   }

   setTime('.timer', deadline);

});