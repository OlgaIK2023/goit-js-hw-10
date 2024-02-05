import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import closeIcon from '../img/bi_x-octagon.png';
import successIcon from '../img/bi_check2.png';

const form = document.querySelector('.form');
form.addEventListener('submit', inputUserDelay)
function inputUserDelay(e) {
    e.preventDefault();
    const delay = Number(form.delay.value);
    if (delay<=0) {
        iziToast.error({
                        title: 'Error',
                        titleColor: '#FFF',
                        iconUrl: closeIcon,
                        messageColor: '#FFF',
                        color: '#EF4040',
                        position: 'topRight',
                        message: `Enter positive number`,
        })
        return;
    }
    const state = form.state.value;
    createPromise(delay,state);
    form.reset();
}
function createPromise(delay,state) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay)
    } else {reject(delay)}
   },delay)
 })
    promise
        .then(delay => {
            iziToast.success({
                title: 'OK',
                titleColor: '#FFF',
                messageColor: '#FFF',
                iconUrl: successIcon,
                color: '#59A10D',
                position: 'topRight',
                message: `Fulfilled promise in ${delay} ms`,
            })
        })
        .catch(delay => {
            iziToast.error({
                title: 'Error',
                titleColor: '#FFF',
                iconUrl: closeIcon,
                messageColor: '#FFF',
                color: '#EF4040',
                position: 'topRight',
                message: `Rejected promise in ${delay} ms`,
            })
        })
 }