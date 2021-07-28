const reveals = document.getElementsByClassName('reveal');
const arrL = document.querySelector('.leftArrow');
const arrR = document.querySelector('.rightArrow');
const sliderImg = document.getElementById('firstImg');
const modalBtn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const body = document.querySelector('body');
const iframe = document.querySelector('iframe');

// REVEAL   ON    SCROLL

window.addEventListener('scroll', reveal);

function reveal() {
    for(i = 0; i < reveals.length; i++) {
    
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 80;
    
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('revealed');
        } else {
            reveals[i].classList.remove('revealed');
        }
    }
}

// PROJECT   ARROW   SLIDER

let arrValue = 1;

function slider(e) {
    if(e.target.classList.contains('disabled')) return;

    if(e.target.classList.contains('leftArrow')) {
        sliderImg.classList.remove(`p${+ arrValue.toString()}`);
        arrValue--
    } else {
        arrValue++
        sliderImg.classList.add(`p${+ arrValue.toString()}`);
    }

    arrValue > 1 ? arrL.classList.remove('disabled') : arrL.classList.add('disabled');  

    arrValue < 4 ? arrR.classList.remove('disabled') : arrR.classList.add('disabled');  
}

arrL.addEventListener('click', slider);
arrR.addEventListener('click', slider);

// MODAL TOGGLING

function toggleModal() {
    modal.classList.toggle('hidden');
    body.classList.toggle('modalActive');
    modal.classList.contains('hidden') ? iframe.src = '' : iframe.src = 'https://www.youtube.com/embed/NBkX7c0Wqrk';
}
modalBtn.addEventListener('click', toggleModal)
modal.addEventListener('click', toggleModal)