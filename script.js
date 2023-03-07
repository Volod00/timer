import countries from "./travelMenuData.js"
import countryData from "./countryPicker.js"

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

for (let countryIndex = 0; countryIndex < countries.length; countryIndex++){
  new TravelMenu(
    countries[countryIndex].src,
    countries[countryIndex].alt,
    countries[countryIndex].title,
    countries[countryIndex].descripton,
    countries[countryIndex].cost,
    ".trip .container"
  ).render();
}

//countryPicker
const emotionRadios = document.querySelector('#emotion-radios');

emotionRadios.addEventListener('change', highlightingOption);

function highlightingOption (e){
      let emotionItems = document.getElementsByClassName('radio')
      for(let emotionItem of emotionItems){      
        emotionItem.classList.remove('highlight')
        }
        document.getElementById(e.target.id).parentElement.classList.add('highlight')
    }

function getEmotion(param){
        const emotionArray = [];
        for (let country of param) {
               for (let emotion of country.tags){
                if (!emotionArray.includes(emotion)){
                  emotionArray.push(emotion)
                }
            }
          }
          return emotionArray;
       };

function renderEmotionsList(param){
        let radioItems =``;
        const emotionList =  getEmotion(param);
        for (let emotion of emotionList){
          radioItems+=`
          <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
          </div>`
        }
        emotionRadios.innerHTML = radioItems
     };
renderEmotionsList(countryData);







// modal window
const closeBtn = document.querySelector("#modal-close-btn");
const modal = document.querySelector(".modal");
const policyContent = document.getElementById("policy-content");
const modalInnerText = document.querySelector('.modal-inner-loading');
const thanksContent = document.getElementById("thanks-content");
const form = document.querySelector("#form");
const rejectBtn = document.querySelector("#modal-btn-reject");

setTimeout(function() {
  modal.style.display = "block";
}, 2000);

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  modal.style.backgroundColor = "blue";
  form.style.display = "none";
  policyContent.style.display = 'none';
  modalInnerText.style.display = "block";

  setTimeout(function () {
      document.querySelector(
      "#uploadText"
    ).innerText = `Your data is processed...`;
    modal.style.backgroundColor = "#5885AF";
  }, 3000);

  const loginData = new FormData(form);
  const name = loginData.get("fullName");
  const mail = loginData.get("email");

  setTimeout(function () {
    modalInnerText.style.display = "none";
    thanksContent.style.display = "block";
    document.querySelector("#your-name").innerText = name
    document.querySelector("#your-email").innerText = mail
  }, 5000);

  closeBtn.disabled = false;
});

rejectBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

fetch('db.json')
.then(data =>data.json())
.then(res => console.log(res));

});
