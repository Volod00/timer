window.addEventListener("DOMContentLoaded", () => {
  const deadline = "2023-01-01";

  function start(endtime) {
    const currentTime = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(currentTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((currentTime / 1000 / 60 / 60) % 24);
    const minutes = Math.floor((currentTime / 1000 / 60) % 60);
    const seconds = Math.floor((currentTime / 1000) % 60);

    return {
      total: currentTime,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  start(deadline);

  function setTime(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = start(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setTime(".timer", deadline);
});
