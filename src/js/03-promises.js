import Notiflix from "notiflix";
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnPromises: document.querySelector('button[type="submit"]'),
};

function createPromise(delay) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      
      if (shouldResolve) {
        resolve({ delay });
      } else {
        reject({ delay });
      }
    }, delay);
  });
}
  
refs.btnPromises.addEventListener('click', evt => {
  evt.preventDefault();

  let firstDelay = Number(refs.delay.value);
  let stepDelay = Number(refs.step.value);

  for(let i = 0; i < refs.amount.value; i += 1) {
    createPromise(firstDelay + i * stepDelay)
    .then(({ delay }) => {
      const position = i + 1;
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      );
    })
    .catch(({ delay } ) => {
      const position = i + 1;
      Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
    });
  }
  refs.form.reset();
});