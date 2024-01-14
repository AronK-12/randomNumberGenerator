const genButton = document.getElementById('generate__button');

const resultText = document.getElementById('generated__result');

genButton.onclick = () => {
  let rand;

  const min = Number(document.getElementById('min__input').value);
  const max = Number(document.getElementById('max__input').value);

  if (min < max) {
    rand = Math.floor(Math.random() * (max - min)) + min + 1;
    resultText.innerText = `${rand}`;
  } else {
    resultText.innerText = `Max can't be smaller than min.`;
  }
};
