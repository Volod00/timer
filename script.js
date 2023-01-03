window.addEventListener("DOMContentLoaded", () => {
  const deadline = "2024-01-01";

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
// reverse timer
const btnReverse = document.querySelector("#btn-reverse");
const timer = document.querySelector(".timer");

btnReverse.addEventListener("click", function () {
  timer.classList.toggle("reverse");
});

// travel-container
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
                <img src=${this.src} alt=${this.alt} class="img-order">
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
  200,
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

new TravelMenu(
  "images/mexico.jpg",
  "Mexico City",
  "Mexica",
  "Tourists visiting Mexico City at Christmas will find plenty of cool stuff going on. Head to the Zocalo for the most public celebrations. In the square, you'll find an ice skating rink and a man-made sledding hill for kids and adults alike. It's a pretty fun little obstacle course that they set up each year.",
  750,
  ".trip .container"
).render();

// modal window
const closeBtn = document.querySelector("#modal-close-btn");
const modal = document.getElementById("modal");
const form = document.querySelector("#form");
const text = document.querySelector("#modal-inner");
const loginForm = document.querySelector("#form");
const rejectBtn = document.querySelector("#modal-btn-reject");

setTimeout(function () {
  modal.style.display = "block";
}, 2000);

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  text.innerHTML = `<div class="modal-inner-loading">
                  <img src="images/adventure.png" class="loading">
                  <p id="uploadText">
                      Thanky fo your registration...
                  </p>
                </div>`;
  modal.style.backgroundColor = "#E7D2CC";
  form.style.display = "none";

  setTimeout(function () {
    document.querySelector(
      "#uploadText"
    ).innerText = `Your data is processed...`;
    modal.style.backgroundColor = "#5885AF";
  }, 2000);

  const loginData = new FormData(form);
  const name = loginData.get("fullName");
  const mail = loginData.get("email");

  setTimeout(function () {
    document.querySelector("#modal-inner").innerHTML = `
                          <h2>Thanks <span class="modal-display-name">${name}</span> </h2>
                          <p>We will send confirmation on your mail: <span class="modal-display-name">${mail}</span></p>
                          <div>
                              <img src="images/plane.jpg" class="plane-logo">
                          </div>
                          `;
  }, 5000);
  closeBtn.disabled = false;
});

rejectBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
