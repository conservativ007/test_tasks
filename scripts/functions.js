import { directionOfTravel } from "./main.js";

let costOfTicket = 700;
let costOfCompositeTicket = 1200;
let timeOfTrip = 50;

export function getWordTicket(count) {
  count = Number(count);
  if (count === 1) return "билет";
  else if (count > 1 && count < 5) return "билета";
  else if (count > 4) return "билетов";
}

function getWordComposite(count, bool) {
  count = Number(count);
  if (count === 1 && bool === true) return "составной";
  else if (count > 1 && bool === true) return "составных";
  return "";
}

export function getMessage(message, success = false) {

  let alertSuccess = document.querySelector(".alert-success");
  let alertNotSuccess = document.querySelector(".alert-danger");

  if (success === false) {
    alertNotSuccess.innerHTML = message;
    alertNotSuccess.classList.remove("hide");
    let setTimeoutId = setTimeout(() => {
      alertNotSuccess.classList.add("hide");
      clearTimeout(setTimeoutId);
    }, 2000);
  }

  if (success === true) {
    alertSuccess.innerHTML = message;
    alertSuccess.classList.remove("hide");
    let setTimeoutId = setTimeout(() => {
      alertSuccess.classList.add("hide");
      clearTimeout(setTimeoutId);
    }, 7000);
  }
}

export function count() {
  let quantityOfTickets = document.querySelector(".ticket-quantity").value;

  if (quantityOfTickets === "") {
    getMessage("купите хотябы один билетик", false);
    return;
  }

  let message = "";

  let sumOfMoney = quantityOfTickets * costOfTicket;
  let route = directionOfTravel.getDirection();

  let ticketsWords = getWordTicket(quantityOfTickets);
  let wordComposite = getWordComposite(quantityOfTickets, directionOfTravel.tripToForwardAndComeBack);

  if (directionOfTravel.tripToForwardAndComeBack === false) {
    message = `
    <p>
      Вы выбрали ${quantityOfTickets} ${ticketsWords} по маршруту ${route} стоимостью ${sumOfMoney}р.
      Это путешествие займет у вас ${timeOfTrip} минут.
      Теплоход отправляется в ${directionOfTravel.departureTime}, а прибудет в ${directionOfTravel.getTripEndTime()}.
    </p>`;
  }

  if (directionOfTravel.tripToForwardAndComeBack === true) {
    console.log(directionOfTravel);

    message = `
    <p>
      Вы выбрали ${quantityOfTickets} ${wordComposite} ${ticketsWords} по маршруту из A в B и обратно в А стоимостью ${quantityOfTickets * costOfCompositeTicket}р.
      Это путешествие займет у вас ${timeOfTrip} минут.
      Теплоход отправляется в ${directionOfTravel.startTimeTicketGoForward}, а прибудет в ${directionOfTravel.getTripEndTime(true)}.
      Не забудте что в ${directionOfTravel.startTimeTicketForBack} отправляется ваш теплоход обратно.
    </p>`;
  }
  getMessage(message, true);

}

export function getCorrectedTimeComeBack(direction) {
  if (direction === "come-back") return;

  let x = directionOfTravel.getTripEndTime();
  let elemOfOptionsComeBack = document.querySelectorAll("#time-back option");

  [...elemOfOptionsComeBack].forEach(i => {
    let cortrectedTime = i.innerHTML.slice(0, 5);
    if (cortrectedTime < x) {
      i.classList.add("hide-option");
    } else {
      i.classList.remove("hide-option");
    }
  });
}

export function setTimeToOptionComeBackToDefault() {
  let option = document.querySelector("#time-back option");
  option.selected = true;
}

export function setTimeToOptionGoForwardToDefault() {
  let option = document.querySelector("#time-go option");
  option.selected = true;
}