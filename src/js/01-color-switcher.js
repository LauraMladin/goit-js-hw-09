const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');

let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  stopBtn.setAttribute('disabled', '');

  startBtn.addEventListener('click', element => {
    element.target.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');

    intervalId = setInterval(() => {
        bodyColor.style.background = getRandomHexColor();
    }, 1000);
  })

  stopBtn.addEventListener('click', element => {
    element.target.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');

    clearInterval(intervalId);
  });
