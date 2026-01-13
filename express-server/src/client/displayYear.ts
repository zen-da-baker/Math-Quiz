const currentDate = new Date();

let currentYear = currentDate.getFullYear();

const dateUI = document.getElementById("date");

dateUI.textContent = currentYear.toString();