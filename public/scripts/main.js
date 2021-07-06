const project = document.querySelector(".project-wrapper");
console.log(project);

function touch() {
    project.classList.add('active');
    console.log('Confirmed touch!')
}

function untouch() {
    project.classList.remove('active');
    console.log('Confirmed untouch!')
}

project.addEventListener('touchstart', touch);
project.addEventListener('touchend', untouch);
