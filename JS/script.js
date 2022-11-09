//typing animation
var typed = new Typed(".typing",{
    strings:["","Software Engineer","Web Developer","Machine Learner","FrontEnd Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.main-cotainer .aside ul li a').forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})