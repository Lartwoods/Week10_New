const myDate = new Date();
const yearNow = myDate.getFullYear();
console.log(yearNow);

function divByFour() {
  if (yearNow % 4 === 0) {
    if (yearNow % 100 === 0) {
      if (yearNow % 400 === 0) {
        console.log("Год является високосным (366 дней).");
      }
    }
  } else {
    console.log(" Год не високосный (у него 365 дней).");
  }
}
divByFour();
