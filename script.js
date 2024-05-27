// Add this script to your existing script.js file
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll(".section");
let navLinks  = document.querySelectorAll("header nav a");


windows.onscroll = () =>{
    sections.forEach(sec=>
        {
            let top = window.scrollY;
            let offset = sec.offsetTop- 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute;
                if(top>= offset && top < offset+height){
                    navLinks.forEach(links =>{
                        links.classList.remove('active');
                        document.querySelector('header nav a [href*='+ id + ']' ).classList.add('active');

                    })
                }
        }
    )
}

menuIcon.onClick = () =>
{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
}