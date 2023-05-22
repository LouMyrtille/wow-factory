window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("visibilitychange", function () {
    var video = document.querySelector("#main video");
    if (document.hidden) {
        video.pause();
    } else {
        video.play();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".navbar-right")

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
    })
});
