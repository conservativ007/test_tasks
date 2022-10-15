import { count, getCorrectedTimeComeBack, setTimeToOptionComeBackToDefault, setTimeToOptionGoForwardToDefault } from "./functions.js";

export let directionOfTravel = {
  tripToForward: false,
  tripToBack: false,
  tripToForwardAndComeBack: false,
  startTimeTicketGoForward: 0,
  startTimeTicketForBack: 0,
  departureTime: 0,
  changeTimeToGo() {
    this.tripToForward = true;
    this.tripToBack = false;
  },
  changeTimeComeBack() {
    this.tripToForward = false;
    this.tripToBack = true;
  },
  setTripToForwardAndComeBack(bool) {
    this.tripToForwardAndComeBack = bool;
  },
  getDirection() {
    return this.tripToForward === true ? "из A в B" : "из B в A";
  },
  getTripEndTime(goForwardAndBack = false) {
    let minutes;
    let hours;

    if (goForwardAndBack === false) {
      minutes = this.departureTime.slice(3);
      hours = this.departureTime.slice(0, 2);
    } else {
      minutes = this.startTimeTicketGoForward.slice(3);
      hours = this.startTimeTicketGoForward.slice(0, 2);
    }

    minutes = Number(minutes);
    minutes += 50;

    let date = new Date(0, 0, 0, +hours, +minutes);
    let getCorrectedDate = String(date).slice(16, 21);

    return getCorrectedDate;
  }
}

let arrOfTime = ["18:00(из A в B)", "18:30(из A в B)", "18:45(из A в B)", "19:00(из A в B)", "19:15(из A в B)", "21:00(из A в B)", "18:30(из B в A)", "18:45(из B в A)", "19:00(из B в A)", "19:15(из B в A)", "19:35(из B в A)", "21:50(из B в A)", "21:55(из B в A)"];

let elemOfSelectTimeGo = document.querySelector("#time-go");
let elemOfSelectComeBack = document.querySelector("#time-back");
let elemOfInputQuntity = document.querySelector(".ticket-quantity");
let elemOfCountButton = document.querySelector(".btn-success");

let selectsOfRoutes = document.querySelectorAll("#route");
[...selectsOfRoutes].forEach(i => i.addEventListener("click", routeHandler));

elemOfSelectTimeGo.addEventListener("click", (e) => handlerTime(e, "go-forward"));
elemOfSelectComeBack.addEventListener("click", (e) => handlerTime(e, "come-back"));

function routeHandler(e) {
  let route = e.target.value;

  if (route === "из A в B") {
    directionOfTravel.changeTimeToGo();
    directionOfTravel.setTripToForwardAndComeBack(false);
  }

  if (route === "из B в A") {
    directionOfTravel.changeTimeComeBack();
    directionOfTravel.setTripToForwardAndComeBack(false);
  }

  if (route === "из A в B и обратно в А") {
    directionOfTravel.setTripToForwardAndComeBack(true);
  }

  setTimeToOptionComeBackToDefault();
  setTimeToOptionGoForwardToDefault();

  changeDisabledSelect();
}

function changeDisabledSelect() {
  if (directionOfTravel.tripToForward === true) {
    elemOfSelectTimeGo.disabled = false;
    elemOfSelectComeBack.disabled = true;
  }

  if (directionOfTravel.tripToBack === true) {
    elemOfSelectTimeGo.disabled = true;
    elemOfSelectComeBack.disabled = false;
  }

  if (directionOfTravel.tripToForwardAndComeBack === true) {
    elemOfSelectTimeGo.disabled = false;
    elemOfSelectComeBack.disabled = true;
  }
}

function handlerTime(e, direction) {

  let time = e.target.value;
  let found = arrOfTime.find(i => i === time);

  if (found === undefined) return;

  directionOfTravel.departureTime = time.slice(0, 5);

  if (directionOfTravel.tripToForwardAndComeBack === false) {
    elemOfInputQuntity.disabled = false;
    elemOfCountButton.disabled = false;
  }

  if (directionOfTravel.tripToForwardAndComeBack === true) {
    elemOfSelectComeBack.disabled = false;
    getCorrectedTimeComeBack(direction);
  }

  if (directionOfTravel.tripToForwardAndComeBack === true && direction === "go-forward") {
    setTimeToOptionComeBackToDefault();
    directionOfTravel.startTimeTicketGoForward = e.target.value.slice(0, 5);
  }

  if (directionOfTravel.tripToForwardAndComeBack === true && direction === "come-back") {
    directionOfTravel.startTimeTicketForBack = e.target.value.slice(0, 5);
    checkCorrectChosen(e)
  }

}

function checkCorrectChosen(e) {
  let found = arrOfTime.find(i => i === e.target.value);
  if (!found) return;

  elemOfInputQuntity.disabled = false;
  elemOfCountButton.disabled = false;
}

elemOfCountButton.addEventListener("click", count);








