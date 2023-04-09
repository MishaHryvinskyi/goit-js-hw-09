import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
text: document.querySelector('#datetime-picker'),
timerMarkup: document.querySelector('.timer'),
startBtn: document.querySelector('button[data-start]'),
seconds: document.querySelector('span[data-seconds]'),
minutes: document.querySelector('span[data-minutes]'),
hours: document.querySelector('span[data-hours]'),
days: document.querySelector('span[data-days]'),
}

refs.startBtn.disabled = true; 
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) { 

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true; 
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.text, options);

function convertMs(ms) { 
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return value.toString().padStart(2, '0');
}

refs.startBtn.addEventListener('click', () => {
  let timer = setInterval(() => {

    let countdown = new Date(refs.text.value) - new Date();

    refs.startBtn.disabled = true; 

    if (countdown >= 0) {
      let timeObject = convertMs(countdown);

      refs.days.textContent = addZero(timeObject.days);
      refs.hours.textContent = addZero(timeObject.hours);
      refs.minutes.textContent = addZero(timeObject.minutes);
      refs.seconds.textContent = addZero(timeObject.seconds);

      if (countdown <= 10000) {
        refs.timerMarkup.style.color = 'red'; 
      }
    } else {
      Notiflix.Notify.success('Countdown finished');
      refs.timerMarkup.style.color = 'black'; 
    }
    
    if (countdown === 0) {
      clearInterval(timer);
    }

  }, 1000); 
});
