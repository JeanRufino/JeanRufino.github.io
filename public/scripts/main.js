const projects = document.querySelectorAll(".project-wrapper");

for (const project of projects) {
    project.addEventListener('touchstart', function touch() {
        project.classList.add('active');
    });
    project.addEventListener('touchmove', function touchMov() {
        project.classList.add('active');
    });
    project.addEventListener('touchend', function untouch() {
        project.classList.remove('active');
    });
}
