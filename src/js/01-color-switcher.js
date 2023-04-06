const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStop.disable = true;
let colorInterval = null;

refs.btnStart.addEventListener('click', () => {
    refs.btnStart = true;
    refs.btnStop = false;

    colorInterval = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
});

refs.btnStop.addEventListener('click', () =>{
    clearInterval(colorInterval);
    refs.btnStart = false;
    refs.btnStop = true;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  