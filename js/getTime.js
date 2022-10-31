const retrieveMondayDate = (date = new Date()) => {
  const clonedDate = new Date(date.getTime());

  const numOfDays = ((7 - clonedDate.getDay()) % 7 + 1) % 7;
  const newDate = clonedDate.getDate() + numOfDays;

  return clonedDate.setDate(newDate);
};

let nextMonday = new Date(retrieveMondayDate());
let cutrrentDate = nextMonday.toLocaleString().slice(0, 10);

document.querySelector("time").innerHTML = cutrrentDate;