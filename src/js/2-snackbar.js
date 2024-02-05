import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('form.form');

// const options = {
//   position: 'center-bottom',
//   distance: '15px',
//   borderRadius: '15px',
//   timeout: 10000,
//   clickToClose: true,
//   cssAnimationStyle: 'from-right',
// };

form.addEventListener('click', onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseCreate(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1) {
    inputDelay += inputStep;

    createPromise(i, inputDelay)
      .then(({ position, delay }) => {

        iziToast.show 

({
    title: 'Success',
    message: `✅ Fulfilled promise ${position} in ${delay}ms`,
  });

       
      })
      .catch(({ position, delay }) => {

        iziToast.show 

({
    title: 'Failure',
    message: `❌ Rejected promise ${position} in ${delay}ms`,
  });

        
       
      });
    e.currentTarget.reset();
  }
}