const maximumRange = document.getElementById('max__input');

const genButton = document.getElementById('generate__button');

const resultText = document.getElementById('generated__result');

genButton.onclick = () => {
  let rand;

  if (maximumRange.value) {
    rand = generateRandomNumber(maximumRange.value);
  } else {
    rand = 0;
  }

  resultText.innerText = `${rand}`;
};

function generateRandomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue + 1);
}
