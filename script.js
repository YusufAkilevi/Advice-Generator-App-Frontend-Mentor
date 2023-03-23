const adviceText = document.querySelector(".advice-text");
const adviceNumber = document.querySelector(".advice-number");
const diceBtn = document.querySelector(".icon-dice-button");

const getAdvice = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await res.json();

    adviceNumber.textContent = `ADVICE #${slip.id}`;
    adviceText.textContent = `"${slip.advice}"`;
  } catch (err) {
    adviceText.textContent = `${err} Something went wrong!`;
  }
};
getAdvice();
diceBtn.addEventListener("click", function () {
  getAdvice();
});
