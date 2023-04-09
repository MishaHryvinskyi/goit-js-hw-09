import Notiflix from "notiflix";
refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnPromises: document.querySelector('button[type="submit"]'),
};

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, refs.delay);
  });

  return promise;
}
  
refs.btnPromises.addEventListener('click', evt => {
  evt.preventDefault();

  let firstDelay = Number(refs.delay.value);
  let stepDelay = Number(refs.step.value);

  for(let i = 0; i < refs.amount.value; i += 1) {
    createPromise(1 + i, firstDelay + i * stepDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(
        `✅ Fulfilled promise ${position} in ${delay}ms`
      );
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
    });
  }
  refs.form.reset();
});


