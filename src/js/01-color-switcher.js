const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
};

refs.btnStop.disabled = true;
let colorInterval = null;

refs.btnStart.addEventListener('click', () => {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    colorInterval = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
});

refs.btnStop.addEventListener('click', () =>{
    clearInterval(colorInterval);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  