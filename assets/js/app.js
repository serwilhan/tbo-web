const menuBtn = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('active');
        navLinks.classList.add('active');
        menuOpen = true;
        navLinks = true;
    } else {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        menuOpen = false;
        navLinks = false;
    }
});
