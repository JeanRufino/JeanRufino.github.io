const reveals = document.getElementsByClassName('reveal');
const contactRev = document.getElementsByClassName('contactRev');

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

    for(i = 0; i < contactRev.length; i++) {
    
        var windowHeight = window.innerHeight;
        var revealTop = contactRev[i].getBoundingClientRect().top;
        var revealPoint = 80;
    
        if(revealTop < windowHeight - revealPoint) {
            contactRev[i].classList.add('contactRevd');
        } else {
            contactRev[i].classList.remove('contactRevd');
        }
    }
}