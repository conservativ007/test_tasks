// in this script we change the images in tickets
// show or not the third ticket in mobile layout
// change the price in the second ticket in mobile layout
// change active class in departure time

let imagesForTickets = document.querySelectorAll(".ticket-image__image");

let mobile = false;
let desktop = false;

init();
function init() {
  setInterval(() => {
    checkScreenSize();
  }, 1000);
}

function checkScreenSize() {
  let bodyWidth = document.querySelector("body").getBoundingClientRect().width;
  if (bodyWidth > 1069) {
    desktop = true;
    mobile = false;
  }
  if (bodyWidth <= 1069) {
    desktop = false;
    mobile = true;
  }

  setImagesForMobileScreen(mobile);
  showOrHideLastTicket(desktop);
  showOrHidePriceOnDock(desktop);
  changePriceForTwoTicket(mobile);
  setImageInfo(mobile);
  addActiveClass(mobile);
}


function setImagesForMobileScreen(mobile = true) {
  [...imagesForTickets].forEach((item, index) => {
    if (mobile === true) {
      item.style.backgroundImage = "url('./assets/images/sankt-peterburg_for-mobile.png')";
    } else {
      item.style.backgroundImage = `url('./assets/images/image${index + 1}.png')`;
    }

  })
}

function showOrHideLastTicket(show = true) {
  let lastTicket = document.querySelector(".container").lastElementChild;
  lastTicket.style.display = show === true ? "flex" : "none";
}

function showOrHidePriceOnDock(show = true) {
  let prices = document.querySelectorAll(".ticket-price__on-dock img");
  [...prices].forEach(img => {
    img.style.display = show === true ? "block" : "none";
  })
}

function changePriceForTwoTicket(mobile = true) {
  let ticket = [...document.querySelectorAll(".ticket-price")][1];
  let elemOfPrice = ticket.querySelector(".ticket-price__price span");

  mobile === true ?
    elemOfPrice.innerHTML = "2900" :
    elemOfPrice.innerHTML = "900";
}

function setImageInfo(mobile = false) {
  let classNamesForDesktop = ["desktop-one", "desktop-two"];
  let classNamesForMobile = ["mobile-one", "mobile-two"];

  let elemOfTicketsInfo = document.querySelectorAll(".ticket-image__info");
  [...elemOfTicketsInfo].forEach((info, index) => {
    if (mobile === true) {
      info.classList.add(classNamesForMobile[index]);
    } else {
      info.classList.add(classNamesForDesktop[index]);
    }
  });
}

function addActiveClass(mobile = false) {
  let elemOfTicket = [...document.querySelectorAll(".ticket-info__describe_chedule span")][1];
  if (mobile === true) {
    elemOfTicket.classList.remove("time-active");
  } else {
    elemOfTicket.classList.add("time-active");
  }
}

