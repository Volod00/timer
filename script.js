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

class TravelMenu {
  constructor(src, alt, title, descripton, cost, parentSelector) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descripton = descripton;
    this.cost = cost;
    this.parentSelector = document.querySelector(parentSelector);
    this.rate = 42;
    this.changeCurrency();
  }

  changeCurrency() {
    this.cost = this.cost * this.rate;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt} class="img-timer">
                <h3 class="item-subtitle">${this.title}</h3>
                <div class="item-descr">${this.descripton}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.cost}</span>UAH</div>
                </div>
            </div>
    `;
    this.parentSelector.append(element);
  }
}
new TravelMenu(
  "images/prague.jpg",
  "Europe",
  "Chech Republic",
  "Prague is famous for its cultural life. Wolfgang Amadeus Mozart lived there, and his Prague Symphony and Don Giovanni were first performed in the city.",
  250,
  ".trip .container"
).render();

new TravelMenu(
  "images/krakow.jpg",
  "Europe",
  "Poland",
  "Krakow is a must-see at any time of year but, as a Christmas destination, the city is up there with the best European cities. The short days and cold nights are the perfect excuse to warm up with mulled wine and indulge in some hearty Polish food, which you can find in abundance at the cosy Christmas market.",
  150,
  ".trip .container"
).render();

new TravelMenu(
  "images/paris.jpg",
  "Europe",
  "France",
  "December is a wonderful time to visit Paris. The weather is cold and crisp, but the city is in full swing, with busy cafés, beautiful lights & decorations on the streets, and an interesting cultural program for locals and visitors alike.",
  650,
  ".trip .container"
).render();

new TravelMenu(
  "images/New-York.jpg",
  "USA",
  "USA",
  "December is a wonderful time to visit Paris. The weather is cold and crisp, but the city is in full swing, with busy cafés, beautiful lights & decorations on the streets, and an interesting cultural program for locals and visitors alike.",
  1050,
  ".trip .container"
).render();

const closeBtn = document.querySelector("#modal-close-btn");
const modal = document.getElementById("modal");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
